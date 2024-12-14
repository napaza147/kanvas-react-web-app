import { IoEllipsisVertical } from "react-icons/io5";
import { LessonControlButtons } from "../Modules/LessonControlButtons";
import AssignmentControls from "./AssignmentControls";
import { BsGripVertical } from "react-icons/bs";
import { LuClipboardEdit } from "react-icons/lu";
import { FaCaretDown, FaRegFileAlt, FaTrash, FaPencilAlt } from "react-icons/fa";
import { useParams, useLocation, useNavigate, Link } from "react-router-dom";
import {
  setAssignments,
  addAssignment,
  deleteAssignment,
  editAssignment,
} from "./reducer";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { ProtectedFacultyRoute } from "../../Common/ProtectedRoutes";
import * as assignmentsClient from "./client";
import * as coursesClient from "../client";
import PercentageIndicator from "./PercentageIndicator";

export default function Assignments() {
  const { cid } = useParams();
  const { assignments } = useSelector((state: any) => state.assignmentsReducer);
  const [assignmentName, setAssignmentName] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [assignmentToDelete, setAssignmentToDelete] = useState<{
    _id: string;
    course: string;
    title: string;
    description: string;
    availableFrom: string;
    due: string;
    points: string;
  } | null>(null);

  const fetchAssignments = async () => {
    const assignments = await coursesClient.findAssignmentsForCourse(cid as string);
    dispatch(setAssignments(assignments));
  };

  const handleEditAssignment = (assignment: any) => {
    if (currentUser && currentUser.role === "ADMIN") {
      dispatch(editAssignment(assignment._id));
      navigate(`${pathname}/${assignment._id}`);
    }
  };

  const handleDeleteAssignment = async (assignment: { _id: string; course: string; title: string; description: string; availableFrom: string; due: string; points: string }) => {
    setAssignmentToDelete(assignment);
    setShowDeleteDialog(true);
  };


  const confirmDeleteAssignment = async () => {
    if (assignmentToDelete) {
      await assignmentsClient.deleteAssignment(assignmentToDelete._id);
      dispatch(deleteAssignment(assignmentToDelete._id));
      setShowDeleteDialog(false);
      setAssignmentToDelete(null);
    }
  };

  const handleNewAssignment = () => {
    navigate(`${pathname}/new`);
  };

  const fmtDate = (inputDate: string) => {
    if (!inputDate) return "";
    const d = new Date(inputDate);
    return d.toLocaleString();
  };

  useEffect(() => {
    fetchAssignments();
  }, []);

  return (
    <div>
      <ul id="wd-modules" className="list-group rounded-1">
        <AssignmentControls handleNewAssignment={handleNewAssignment} />
        <br />
        <br />
        <br />
        <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
          <div className="p-3 ps-2 bg-secondary d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center">
              <BsGripVertical className="me-2 fs-3" />
              <FaCaretDown className="me-2 fs-3" />
              <span style={{ fontWeight: "bold", color: "black", fontSize: "1.5rem" }}>
                ASSIGNMENTS
              </span>
            </div>
            <div className="d-flex align-items-center">
              <PercentageIndicator />
              <span>+</span>
              <span className="ms-2">•••</span>
            </div>
          </div>
          <ul className="wd-lessons list-group rounded-0">
            {assignments.map((assignment: any) => (
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
                      <ProtectedFacultyRoute>
                        <Link to={`/Kanbas/Courses/${assignment.course}/Assignments/${assignment._id}`}>
                          <FaPencilAlt className="text-primary me-3" />
                        </Link>

                        <FaTrash
                        className="ms-3 text-danger"
                        style={{ cursor: "pointer" }}
                        onClick={(e) => {
                          e.stopPropagation();
                          handleDeleteAssignment(assignment);
                        }}
                        // onClick={(e) => 
                        //   {
                        //     e.stopPropagation();
                        //     removeAssignment(assignment._id)}
                        //   }
                      />
                      </ProtectedFacultyRoute>
                      <IoEllipsisVertical className="fs-4" />
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </li>
      </ul>
      {showDeleteDialog && (
        <div className="modal" style={{ display: "block" }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Delete Assignment</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setShowDeleteDialog(false)}
                ></button>
              </div>
              <div className="modal-body">
                <p>Are you sure you want to delete this assignment?</p>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => setShowDeleteDialog(false)}
                >
                  Cancel
                </button>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={confirmDeleteAssignment}
                >
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
