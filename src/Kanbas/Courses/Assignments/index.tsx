import { IoEllipsisVertical } from "react-icons/io5";
import {LessonControlButtons} from "../Modules/LessonControlButtons";
import AssignmentControls from "./AssignmentControls";
import { BsGripVertical } from "react-icons/bs";
import { LuClipboardEdit } from "react-icons/lu";
import { BsPlus } from "react-icons/bs";
import { FaCaretDown, FaTrash } from "react-icons/fa";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { setAssignments, addAssignment, deleteAssignment, editAssignment, updateAssignment } from "./reducer"
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import FacultyRestricted from "../../Common/ProtectedRoutes";
import * as assignmentsClient from "./client";
import * as coursesClient from "../client";

export default function Assignments (){

  const { cid } = useParams();
  // const [assignmentName, setAssignmentName] = useState("");
  const { assignments } = useSelector((state: any) => state.assignmentReducer || []);  // const assignments = db.assignments;
  const [assignmentName, setAssignmentName] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [assignmentToDelete, setAssignmentToDelete] = useState<{ _id: string; course: string; title: string; description: string; availableFrom: string; due: string; points: string } | null>(null);


  // const createAssignmentForCourse = async () => {
  //   // navigate(`${pathname}/new`);
  //   if (!cid) return;
  //   const newAssignment = { name: assignmentName, course: cid };
  //   const assignment = await coursesClient.createAssignmentForCourse(cid, newAssignment);
  //   dispatch(addAssignment(assignment));
  // };

  const fetchAssignments = async () => {
    const assignments = await coursesClient.findAssignmentsForCourse(cid as string);
    dispatch(setAssignments(assignments));
  };

  const handleEditAssignment = (assignment: any) => {
    if(currentUser && currentUser.role === "ADMIN"){
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

      // now using client
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
    if (!inputDate) return '';
    const d = new Date(inputDate);
    return d.toLocaleString() 
  };

  useEffect(() => {
    fetchAssignments();
  }, []);


  return (

  <div>
  <ul id="wd-modules" className="list-group rounded-1">
    <AssignmentControls 
    handleNewAssignment={handleNewAssignment}
    // handleNewAssignment={createAssignmentForCourse}
    />
    <br /><br /><br />
    <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
      <div className=" p-3 ps-2 bg-secondary d-flex justify-content-between align-items-center">
        <div className="wd-title">
          <BsGripVertical className="me-2 fs-3" />
          <FaCaretDown className="me-2 fs-5" />
          ASSIGNMENTS
        </div>
        <div className="float-end">
        <div className="d-flex align-items-center mt-3">
          <div
          className="wd-assignment-icon"
            style={{
              display: "inline-block",
              border: "1px solid #ced4da",
              borderRadius: "8px",
              padding: "5px 10px",
              backgroundColor: "#f8f9fa",
              marginRight: "10px",
            }}
          >
            40% of Total
          </div>
          <BsPlus className="fs-2" />
          <IoEllipsisVertical className="fs-4" />
        </div>
      </div>
        </div>
      <ul className="wd-lessons list-group rounded-0">
        {assignments
          // .filter((assignment: any) => assignment.course === cid)
          .map((assignment: any) => (
            <li className="wd-lesson list-group-item p-3 ps-1 d-flex justify-content-between align-items-center"
                  key={assignment._id}
                  onClick={() => handleEditAssignment(assignment)}
                  // onClick={() => dispatch(editAssignment(assignment._id))}
                >
              <div className="d-flex align-items-center">
                <BsGripVertical className="me-2 fs-3" />
                <LuClipboardEdit className="fs-3 green-icon" />
                <div className="d-flex align-items-center justify-content-start flex-grow-1">
                 <ul>
                   <span className="wd-assignment-name">{assignment.title}</span><br />
                   <span className="wd-assignment-color-red"> Multiple Modules </span>
                   <span className="wd-assignment-regular">|</span>
                   <span className="wd-assignment-bold"> Not Available Until </span>
                   <span className="wd-assignment-regular">{fmtDate(assignment.availableFrom)}</span><br />
                   <span className="wd-assignment-bold"> Due </span>
                  <span className="wd-assignment-regular"> {fmtDate(assignment.due)} |</span>
                   <span className="wd-assignment-regular"> {assignment.points} pts</span>
                 </ul>
               </div>
              </div>
              <div className="d-flex align-items-center">
                <LessonControlButtons />
                <FacultyRestricted >
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
                </FacultyRestricted>
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
};