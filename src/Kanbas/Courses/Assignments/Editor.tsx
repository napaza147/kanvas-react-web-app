import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useParams } from "react-router-dom";
import { addAssignment, updateAssignment } from "./reducer";
import * as assignmentsClient from "./client";
import * as coursesClient from "../client";

export default function AssignmentEditor() {
  const { cid, aid } = useParams();
  const { assignments } = useSelector(
    (state: any) => state.assignmentReducer || []
  );
  const { pathname } = useLocation();
  const dispatch = useDispatch();

  const setAssignment = () => {
    if (aid === "new"){
      return { id: new Date().getTime().toString(), course: cid };
    }
    else {
      return assignments.find(
        (assignment: any) =>
          assignment.course === cid && assignment._id === aid
      )
    }
  }

  const assignment = useMemo(setAssignment, [aid, cid, assignments]);

  const [formValues, setFormValues] = useState({
    title: '',
    description: '',
    availableFrom: '',
    due: '',
    points: '',
  });
  console.log(formValues)

  const fmtDate = (inputDate: string) => {
    if (!inputDate) return '';
    const d = new Date(inputDate);
    return (new Date(d.getTime() - d.getTimezoneOffset() * 60000).toISOString()).slice(0, -1)
  }
  useEffect(() => {
    if (assignment) {
      setFormValues({
        title: assignment.title || '',
        description: assignment.description || '',
        availableFrom: assignment.availableFrom || '',
        due: assignment.due || '',
        points: assignment.points || '',
      });
    }
  }, [assignment]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target as HTMLInputElement;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleInputChangeDate = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target as HTMLInputElement;
    const dateValue = new Date(value).toLocaleString();
    setFormValues({
      ...formValues,
      [name]: dateValue,
    });
  };

  const handleNumericInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    if (!isNaN(Number(value))) {
      setFormValues({
        ...formValues,
        [name]: value,
      });
    }
};

  const handleEditAssignment = async () => {
    if (assignment) {
      
      if (aid === "new") {
        const assignment = await coursesClient.createAssignmentForCourse(cid, { ...formValues, id: new Date().getTime().toString(), course: cid });
        dispatch(addAssignment(assignment));
      }
      else {
        await assignmentsClient.updateAssignment({ ...assignment, ...formValues });
        dispatch(updateAssignment({ ...assignment, ...formValues }));
      }
    }
  };

  return (
    <div
      style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}
    >

          <div>
            <div className="assignment-name" key={assignment._id}>
              <label htmlFor="assignment-name">Assignment Name</label>
              <input
                type="text"
                className="form-control mb-3"
                id="assignment-name"
                name="title"
                defaultValue={formValues.title}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group mb-3">
            <textarea
              className="form-control"
              id="assignment-description"
              name="description"
              style={{ minHeight: '200px', border: '1px solid #ced4da', padding: '10px' }}
              value={formValues.description}
              onChange={handleInputChange}
            />
            </div>
            <div className="container-fluid d-flex justify-content-end">
              <div className="form-group row">
                <div className="col-sm-12 d-flex justify-content-end">
                  <label className="me-3">Points</label>
                  <input
                    type="text"
                    className="form-control p-6 mb-3"
                    id="assignment-points"
                    defaultValue={formValues.points}
                    onChange={handleNumericInputChange}
                    style={{ width: "350px" }}
                  />
                </div>

                <div className="col-sm-12 d-flex justify-content-end">
                  <label className="me-3">Assignment Group</label>
                  <button
                    className="form-control p-6 mb-3 dropdown-toggle d-flex justify-content-between align-items-center"
                    id="assignment-name-large"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    style={{
                      width: "350px",
                      height: "35px",
                      textAlign: "left",
                    }}
                  >
                    ASSIGNMENTS
                  </button>
                  <ul className="dropdown-menu">
                    <li>
                      <a
                        id="wd-assignments-btn"
                        className="dropdown-item"
                        href="#"
                      >
                        ASSIGNMENTS
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col-sm-12 d-flex justify-content-end">
                  <label className="me-3">Display Grade as</label>
                  <button
                    className="form-control p-6 mb-3 dropdown-toggle d-flex justify-content-between align-items-center"
                    id="assignment-name-large"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    style={{
                      width: "350px",
                      height: "35px",
                      textAlign: "left",
                    }}
                  >
                    Percentage
                  </button>
                  <ul className="dropdown-menu">
                    <li>
                      <a
                        id="wd-percentage-btn"
                        className="dropdown-item"
                        href="#"
                      >
                        Percentage
                      </a>
                    </li>
                  </ul>
                </div>
                <form className="container-fluid mt-3 d-flex justify-content-end">
                  <label className="me-3">Submission Type</label>
                  <div className="form-group form-group-border">
                    <button
                      className="form-control p-6 mb-3 dropdown-toggle d-flex justify-content-between align-items-center"
                      id="assignment-name-large"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                      style={{
                        width: "300px",
                        height: "35px",
                        textAlign: "left",
                      }}
                    >
                      Online
                    </button>
                    <ul className="dropdown-menu">
                      <li>
                        <a
                          id="wd-assignments-btn"
                          className="dropdown-item"
                          href="#"
                        >
                          Online
                        </a>
                      </li>
                    </ul>

                    <label className="wd-checkbox-bold">
                      Online Entry Options
                    </label>
                    <br />
                    <br />
                    <div className="checkbox">
                      <label>
                        <input type="checkbox" className="me-2" />
                        <span className="wd-checkbox-regular">Text Entry</span>
                        <br />
                      </label>
                      <br />
                      <br />
                      <label>
                        <input type="checkbox" className="me-2" />
                        <span className="wd-checkbox-regular">Website URL</span>
                        <br />
                      </label>
                      <br />
                      <br />
                      <label>
                        <input type="checkbox" className="me-2" />
                        <span className="wd-checkbox-regular">
                          Media Recordings
                        </span>
                        <br />
                      </label>
                      <br />
                      <br />
                      <label>
                        <input type="checkbox" className="me-2" />
                        <span className="wd-checkbox-regular">
                          Student Annotation
                        </span>
                        <br />
                      </label>
                      <br />
                      <br />
                      <label>
                        <input type="checkbox" className="me-2" />
                        <span className="wd-checkbox-regular">
                          File Uploads
                        </span>
                        <br />
                      </label>
                      <br />
                      <br />
                    </div>
                  </div>
                </form>
                <form className="container mt-3 d-flex justify-content-end">
                  <label className="me-3">Assign</label>
                  <div className="form-group form-group-border">
                    <label className="wd-checkbox-bold">Assign to</label>
                    <div
                      className="form-control p-6 mb-3 d-flex align-items-center"
                      style={{
                        width: "100%",
                        height: "35px",
                        textAlign: "left",
                      }}
                    >
                      <div
                        className="tag d-flex align-items-center"
                        style={{
                          background: "#f1f1f1",
                          borderRadius: "0px",
                          padding: "2px 10px",
                          display: "inline-flex",
                        }}
                      >
                        Everyone
                        <button
                          type="button"
                          className="ms-2 btn-close"
                          aria-label="Close"
                          style={{
                            fontSize: "12px",
                            padding: "0",
                            marginLeft: "5px",
                          }}
                        />
                      </div>
                    </div>

                    <label className="wd-checkbox-bold">Due</label>
                    <div className="input-group">
                      <input
                        type="datetime-local"
                        className="form-control"
                        name="due"
                        value={fmtDate(formValues.due)}
                        aria-label="Due date"
                        aria-describedby="basic-addon2"
                        onChange={handleInputChangeDate}
                      />
                      <span className="input-group-text" id="basic-addon2">
                        {/* <FaCalendarAlt /> */}
                      </span>
                    </div>

                    <div className="container mt-3 p-0">
                      <div className="row">
                        <div className="col-sm">
                          <label className="wd-checkbox-bold">
                            Available From
                          </label>
                          <div className="input-group">
                            <input
                              type="datetime-local"
                              className="form-control"
                              name="availableFrom"
                              defaultValue={fmtDate(formValues.availableFrom)}
                              aria-label="Available from date"
                              aria-describedby="basic-addon2"
                              onChange={handleInputChangeDate}
                            />
                            <span
                              className="input-group-text"
                              id="basic-addon2"
                            >
                            </span>
                          </div>
                        </div>
                        <div className="col-sm">
                          <label className="wd-checkbox-bold">Until</label>
                          <div className="input-group">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Until date"
                              aria-label="Until date"
                              aria-describedby="basic-addon2"
                            />
                            <span
                              className="input-group-text"
                              id="basic-addon2"
                            >
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
                <div id="wd-edit-controls" className="text-nowrap">
                  <hr className="mt-auto" style={{ marginTop: "auto" }} />
                </div>
                <div className="d-flex justify-content-end">
                  <Link
                    to={`${pathname.split("/").slice(0, -1).join("/")}`} // Dynamically route back to Assignments
                    className="text-decoration-none"
                  >
                    <button
                      id="wd-view-progress-btn"
                      className="btn btn-md btn-secondary me-1"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={handleEditAssignment}
                      id="wd-add-module-btn"
                      className="btn btn-md btn-danger me-2"
                    >
                      Save
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
    </div>
  );
}
