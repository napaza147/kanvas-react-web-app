import { Link, useParams, useNavigate } from "react-router-dom";
import { BsGripVertical, BsSearch } from 'react-icons/bs';
import { FaRegFileAlt, FaCaretDown, FaPlus, FaPencilAlt, FaTrash } from 'react-icons/fa';
import { IoEllipsisVertical } from 'react-icons/io5';
import LessonControlButtons from '../Modules/LessonControlButtons';
import PercentageIndicator from "./PercentageIndicator";
import * as db from "../../Database";
import { addAssignment, updateAssignment, deleteAssignment } from "./reducer";
import { useSelector, useDispatch } from "react-redux";
import ProtectedForFaculty from "../../Dashboard/ProtectedForFaculty";
import { useState } from "react";


export default function Assignments() {
  const { cid } = useParams();
  const now = new Date();
  const { assignments } = useSelector((state: any) => state.assignmentsReducer);
  const [AssignmentTarget, setAssignmentTarget] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const deletingAssignment = () => {
    if (AssignmentTarget) {
      console.log('Deleting assignment with ID:', AssignmentTarget);
      dispatch(deleteAssignment(AssignmentTarget));
      setAssignmentTarget(null);
    }
  };

  const cancelDeletion = () => {
    setAssignmentTarget(null);
  };

  const handleAdd = () => {
 
    navigate(`/Kanbas/Courses/${cid}/Assignments/Editor`);
  };

  return (
    <div id="wd-assignments-container" className="d-flex flex-column">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <div className="position-relative">
          <BsSearch className="position-absolute" style={{ left: '10px', top: '10px' }} />
          <input
            type="text"
            placeholder="Search"
            className="form-control ps-5"
            style={{ width: '300px', display: 'inline-block' }}
          />
        </div>

        <ProtectedForFaculty>
          <div className="d-flex">
            <button className="btn" style={{ backgroundColor: 'transparent' }}>
              <FaPlus className="fs-6 me-1 mb-1" /> Group
            </button>
            <button className="btn btn-danger ms-2" onClick={handleAdd}>
              <FaPlus className="fs-6 me-1 mb-1" /> Assignment
            </button>
          </div>
        </ProtectedForFaculty>
      </div>

      <li className="wd-title list-group-item p-3 ps-2 bg-secondary d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center">
          <BsGripVertical className="me-2 fs-3" />
          <FaCaretDown className="me-2 fs-3" />
          <span style={{ fontWeight: 'bold', color: 'black', fontSize: '1.5rem' }}>ASSIGNMENTS</span>
        </div>
        <div className="d-flex align-items-center">
          <PercentageIndicator />
          <span>+</span>
          <span className="ms-2">•••</span>
        </div>
      </li>

      {assignments.filter((assignment: any) => assignment.course === cid).length > 0 ? (
        <ul className="wd-lessons list-group rounded-0">
          {assignments
            .filter((assignment: any) => assignment.course === cid)
            .map((assignment: any) => (
              <li key={assignment._id} className="wd-lesson list-group-item p-3 ps-1" style={{ padding: '10px 15px' }}>
                <div className="d-flex align-items-center">
                  <BsGripVertical className="me-2 fs-3" />
                  <FaRegFileAlt className="text-success me-3 fs-3" />
                  <div className="d-flex flex-column">
                    <p className="fs-4">
                      <Link
                        className="wd-assignment-link"
                        to={`/Kanbas/Courses/${assignment.course}/Assignments/${assignment._id}`}
                        style={{ fontWeight: 'bold', color: 'black', fontSize: '1rem', textDecoration: 'none' }}
                      >
                        {assignment.title}
                      </Link>
                    </p>
                    <p style={{ whiteSpace: 'normal', overflow: 'hidden', fontSize: '0.9rem' }}>
                      <span className="text-danger">Multiple Modules</span>&nbsp;|
                      <span className="fw-bold"> Not available until </span> {assignment.available} at 12:00am |
                      <span className="fw-bold"> Due </span> {assignment.due} at 11:59pm | {assignment.points} pts
                    </p>
                  </div>
                  <div className="ms-auto">
                    <div className="float-end">
                      <ProtectedForFaculty>
                        <Link to={`/Kanbas/Courses/${assignment.course}/Assignments/${assignment._id}`}>
                          <FaPencilAlt className="text-primary me-3" />
                        </Link>

                        <FaTrash
                          className="text-danger me-2 mb-1"
                          onClick={() => setAssignmentTarget(assignment._id)}
                          style={{ cursor: 'pointer' }}
                        />
                      </ProtectedForFaculty>
                      <IoEllipsisVertical className="fs-4" />
                    </div>
                  </div>
                </div>
              </li>
            ))}
        </ul>    

      ) : (
        <p>No assignments available for this course.</p>
      )}

      {AssignmentTarget && (
        <div className="modal fade show" style={{ display: 'block', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Confirm Deletion</h5>
                <button type="button" className="btn-close" onClick={cancelDeletion}></button>
              </div>
              <div className="modal-body">
                Are you sure you want to delete this assignment?
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={cancelDeletion}>
                  Cancel
                </button>
                <button type="button" className="btn btn-danger" onClick={deletingAssignment}>
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
