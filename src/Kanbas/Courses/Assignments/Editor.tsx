import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
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
      dispatch(updateAssignment(updatedAssignment));
    }
    navigate(`/Kanbas/Courses/${cid}/Assignments`);
  };

  return (
    <div id="assignment-editor" className="container mt-4">
      <div className="d-flex flex-column w-100">

        <div className="row mb-3">
          <div className="col-4 text-end">
            <label htmlFor="assignment-name" className="form-label"><strong>Assignment Name</strong></label>
          </div>
          <div className="col-8">
            <input
              type="text"
              id="assignment-name"
              name="title"
              className="form-control"
              value={formValues.title}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-4 text-end">
            <label htmlFor="assignment-description" className="form-label"><strong>Description</strong></label>
          </div>
          <div className="col-8">
            <textarea
              id="assignment-description"
              name="description"
              className="form-control"
              rows={5}
              value={formValues.description}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-4 text-end">
            <label htmlFor="assignment-points" className="form-label"><strong>Points</strong></label>
          </div>
          <div className="col-8">
            <input
              type="number"
              id="assignment-points"
              name="points"
              className="form-control"
              value={formValues.points}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-4 text-end">
            <label htmlFor="available-from" className="form-label"><strong>Available From</strong></label>
          </div>
          <div className="col-8">
            <input
              type="datetime-local"
              id="available-from"
              name="availableFrom"
              className="form-control"
              value={fmtDate(formValues.availableFrom)}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-4 text-end">
            <label htmlFor="due-date" className="form-label"><strong>Due Date</strong></label>
          </div>
          <div className="col-8">
            <input
              type="datetime-local"
              id="due-date"
              name="due"
              className="form-control"
              value={fmtDate(formValues.due)}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className="d-flex justify-content-end mt-3">
          <Link
            to={`/Kanbas/Courses/${cid}/Assignments`}
            className="btn btn-secondary me-2"
          >
            Cancel
          </Link>
          <button
            className="btn btn-danger"
            onClick={handleEditAssignment}
          >
            Save
          </button>
        </div>

      </div>
    </div>
  );
}
