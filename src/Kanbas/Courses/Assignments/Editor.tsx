import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useParams } from "react-router-dom";
import { addAssignment, updateAssignment } from "./reducer";
import * as assignmentsClient from "./client";
import * as coursesClient from "../client";

export default function AssignmentEditor() {
  const { cid, aid } = useParams();
  const { assignments } = useSelector(
    (state: any) => state.assignmentsReducer || []
  );
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const assignment = useMemo(() => {
    if (aid === "new") {
      return { _id: new Date().getTime().toString(), course: cid };
    }
    return assignments.find(
      (assignment: any) =>
        assignment.course === cid && assignment._id === aid
    );
  }, [aid, cid, assignments]);

  const [formValues, setFormValues] = useState({
    title: "",
    description:
      "Submit a link to the landing page of your Web application running on Netlify. The landing page should include your full name and section, a link to the Kanbas application, and links to all relevant source code repositories.",
    availableFrom: "",
    due: "",
    points: "100",
  });

  const fmtDate = (inputDate: string) => {
    if (!inputDate) return "";
    const d = new Date(inputDate);
    return new Date(d.getTime() - d.getTimezoneOffset() * 60000)
      .toISOString()
      .slice(0, -1);
  };

  useEffect(() => {
    if (assignment) {
      setFormValues({
        title: assignment.title || "",
        description: assignment.description || formValues.description,
        availableFrom: assignment.availableFrom || "",
        due: assignment.due || "",
        points: assignment.points || "100",
      });
    }
  }, [assignment]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleEditAssignment = async () => {
    if (aid === "new") {
      const newAssignment = await coursesClient.createAssignmentForCourse(cid, {
        ...formValues,
        _id: new Date().getTime().toString(),
        course: cid,
      });
      dispatch(addAssignment(newAssignment));
    } else {
      const updatedAssignment = await assignmentsClient.updateAssignment({
        ...assignment,
        ...formValues,
      });
    }
    navigate(-1);
  };

  return (
    <div className="container mt-4">
      <div className="mb-3">
        <label htmlFor="assignment-name" className="form-label">
          Assignment Name
        </label>
        <input
          type="text"
          className="form-control"
          id="assignment-name"
          name="title"
          value={formValues.title}
          onChange={handleInputChange}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="assignment-description" className="form-label">
          Description
        </label>
        <textarea
          className="form-control"
          id="assignment-description"
          name="description"
          rows={5}
          value={formValues.description}
          onChange={handleInputChange}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="assignment-points" className="form-label">
          Points
        </label>
        <input
          type="number"
          className="form-control"
          id="assignment-points"
          name="points"
          value={formValues.points}
          onChange={handleInputChange}
        />
      </div>

      <div className="row mb-3">
        <div className="col">
          <label htmlFor="available-from" className="form-label">
            Available From
          </label>
          <input
            type="datetime-local"
            className="form-control"
            id="available-from"
            name="availableFrom"
            value={fmtDate(formValues.availableFrom)}
            onChange={handleInputChange}
          />
        </div>
        <div className="col">
          <label htmlFor="due-date" className="form-label">
            Due Date
          </label>
          <input
            type="datetime-local"
            className="form-control"
            id="due-date"
            name="due"
            value={fmtDate(formValues.due)}
            onChange={handleInputChange}
          />
        </div>
      </div>

      <div className="d-flex justify-content-end">
        <Link
          to={`/Kanbas/Courses/${cid}/Assignments`}
          className="btn btn-secondary me-2"
        >
          Cancel
        </Link>
        <button className="btn btn-danger" onClick={handleEditAssignment}>
          Save

        </button>
      </div>
    </div>
  );
}
