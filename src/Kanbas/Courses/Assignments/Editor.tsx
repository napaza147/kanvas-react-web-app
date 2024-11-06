import 'bootstrap/dist/css/bootstrap.min.css';
import { useLocation, useParams, Link } from 'react-router-dom';
import * as db from "../../Database";
import { addAssignment, updateAssignment } from "./reducer";
import { useDispatch, useSelector } from "react-redux";
import AssignmentViewer from "./Viewer";
import { useState } from "react";
import ProtectedForFaculty from "../../ProtectedForFaculty";
import { useNavigate } from "react-router-dom";

export default function AssignmentEditor() {
    const navigate = useNavigate();
    const { cid, aid } = useParams();
    const assignment = useSelector((state: any) =>
        state.assignmentsReducer.assignments.find((x: any) => x._id === aid)
    );

    const [assignmentName, setName] = useState(assignment ? assignment.title : "")
    const [assignmentDescription, setDescription] = useState(assignment ? assignment.description : "Submit a link to the landing page of your Web application running on Netlify. The landing page should include your full name and section, a link to the Kanbas application, and links to all relevant source code repositories.")
    const [assignmentPoints, setPoints] = useState(assignment ? assignment.points : 100)
    const [dueDate, setDueDate] = useState(assignment ? assignment.due : "yyyy-mm-dd")
    const [availability, setAvailability] = useState(assignment ? assignment.available : "yyyy-mm-dd")

    const segment = useLocation().pathname.split('/');
    const location = segment[segment.length - 1];
    const dispatch = useDispatch();

    const addOrEdit = () => {
        const new_assignment = {
            _id: location === "Editor" ? new Date().getTime().toString() : aid,
            title: assignmentName,
            description: assignmentDescription,
            course: cid,
            points: assignmentPoints,
            due: dueDate,
            available: availability,
        };

        if (location === "Editor") {
            dispatch(addAssignment(new_assignment));
        } else {
            dispatch(updateAssignment(new_assignment));
        }
        
    };

    const nameChange = (e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value);
    const pointsChange = (e: React.ChangeEvent<HTMLInputElement>) => setPoints(parseFloat(e.target.value));
    const availabilityDateChange = (e: React.ChangeEvent<HTMLInputElement>) => setAvailability(e.target.value);
    const dueDateChange = (e: React.ChangeEvent<HTMLInputElement>) => setDueDate(e.target.value);
    const descriptionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => setDescription(e.target.value);

    return (
        <>
            <ProtectedForFaculty><span style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'grey' }}>Student View:</span></ProtectedForFaculty>
            <AssignmentViewer />

            <ProtectedForFaculty>
            <span style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'grey' }}>Editor View:</span>

            
                <div id="wd-assignments-editor" className="container mt-4">
                    <div className="d-flex flex-column w-100">

                        <div className="d-flex flex-column">

                            <div className="row mb-3">
                                <div className="col-4 text-end">
                                    <label htmlFor="wd-name" className="form-label"><strong>Assignment Name</strong></label>
                                </div>
                                <div className="col-8">
                                    <input id="wd-name" value={assignmentName} className="form-control" onChange={nameChange} />
                                </div>
                            </div>

                            <div style={{
                                border: '1px solid #ccc',
                                borderRadius: '5px',
                                padding: '15px',
                                margin: '20px 0',
                                backgroundColor: '#f9f9f9'
                            }}>
                                <p>
                                    <span>The assignment is</span> <span style={{ color: 'red' }}>available online.</span>
                                </p>
                                <textarea
                                    value={assignmentDescription}
                                    onChange={descriptionChange}
                                    className="form-control"
                                    rows={5}
                                    style={{ backgroundColor: '#f9f9f9', border: 'none' }}
                                />
                            </div>

                            <div className="input-group mb-3 w-25" style={{ marginLeft: '25%' }}>
                                <label htmlFor="wd-points" className="input-group-text">Points</label>
                                <input
                                    id="wd-points"
                                    type="number"
                                    className="form-control"
                                    value={assignmentPoints}
                                    onChange={pointsChange} />
                            </div>

                            <div className="input-group mb-3 w-25" style={{ marginLeft: '25%' }}>
                                <label htmlFor="wd-group" className="input-group-text">Assignment Group</label>
                                <select id="wd-group" className="form-select">
                                    <option>ASSIGNMENTS</option>
                                    <option>QUIZZES</option>
                                    <option>EXAMS</option>
                                </select>
                            </div>

                            <div className="input-group mb-3 w-25" style={{ marginLeft: '25%' }}>
                                <label htmlFor="wd-display-grade-as" className="input-group-text">Display Grade as</label>
                                <select id="wd-display-grade-as" className="form-select">
                                    <option>Percentage</option>
                                    <option>Letter</option>
                                    <option>Number</option>
                                </select>
                            </div>

                            <div className="mb-3">
                                <div className="col-3 text-end">
                                    <label htmlFor="wd-submission-type" className="form-label">Submission Type</label>
                                </div>

                                <div id="wd-submission-type" className="border border-2 p-3 w-75 ms-auto">
                                    <div className="mb-3">
                                        <select className="form-select">
                                            <option>Online</option>
                                            <option>In Person</option>
                                        </select>
                                    </div>

                                    <label className="fw-bold">Online Entry Options</label>
                                    {['Text Entry', 'Website URL', 'Media Recordings', 'Student Annotation', 'File Uploads'].map((option, index) => (
                                        <div className="form-check mb-3" key={index}>
                                            <input
                                                type="checkbox"
                                                id={`wd-${option.toLowerCase().replace(' ', '-')}`}
                                                className="form-check-input me-2" />
                                            <label htmlFor={`wd-${option.toLowerCase().replace(' ', '-')}`} className="form-check-label">
                                                {option}
                                            </label>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="mb-3">
                                <div className="col-3 text-end">
                                    <label className="form-label ms-auto">Assign</label>
                                </div>
                                <div className="border border-2 p-3 w-75 ms-auto">
                                    <div className="mb-3">
                                        <label htmlFor="wd-assign-to" className="fw-bold">Assign to</label>
                                        <input
                                            id="wd-assign-to"
                                            className="form-control"
                                            value="Everyone"
                                            readOnly />
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="wd-due-date">Due</label>
                                        <input
                                            id="wd-due-date"
                                            type="date"
                                            className="form-control"
                                            value={dueDate}
                                            onChange={dueDateChange} />
                                    </div>

                                    <div className="d-flex">
                                        <div className="me-3">
                                            <label htmlFor="wd-available-from">Available from</label>
                                            <input
                                                id="wd-available-from"
                                                type="date"
                                                className="form-control"
                                                value={availability}
                                                onChange={availabilityDateChange} />
                                        </div>
                                        <div>
                                            <label htmlFor="wd-until">Until</label>
                                            <input
                                                id="wd-until"
                                                type="date"
                                                className="form-control" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="d-flex justify-content-end mt-3">
                                <Link to={`/Kanbas/Courses/${cid}/Assignments`} className="btn btn-secondary me-2">Cancel</Link>
                                <button
                                    className="btn btn-danger"
                                    onClick={() => {
                                        addOrEdit();
                                        navigate(`/Kanbas/Courses/${cid}/Assignments`);
                                    }}>
                                    Save
                                </button>
                            </div>

                        </div>
                    </div>
                </div>
            </ProtectedForFaculty>
        </>
    );
}
