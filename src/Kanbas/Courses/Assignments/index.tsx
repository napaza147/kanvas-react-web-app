import { Link, useParams } from "react-router-dom";
import { BsGripVertical, BsSearch } from 'react-icons/bs';
import { FaRegFileAlt, FaCaretDown } from 'react-icons/fa';
import LessonControlButtons from '../Modules/LessonControlButtons';
import PercentageIndicator from "./PercentageIndicator";
import * as db from "../../Database";

export default function Assignments() {
  const { cid } = useParams();
  const assignments = db.assignments;

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

        <div className="d-flex">
          <button className="btn" style={{ backgroundColor: 'transparent' }}>
            +Group
          </button>
          <button className="btn btn-danger ms-2">
            +Assignment
          </button>
        </div>
      </div>
      
      <div className="d-flex flex-column">
        <ul id="wd-assignment-list" className="wd-lessons list-group rounded-0 mt-0">
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

          {assignments.filter(assignment => assignment.course === cid).length > 0 ? (
            assignments
              .filter(assignment => assignment.course === cid)
              .map(assignment => (
                <li key={assignment._id} className="wd-lesson list-group-item p-3 ps-1 d-flex justify-content-between align-items-start">
                  <div className="d-flex align-items-start">
                    <BsGripVertical className="me-2 fs-3" />
                    <FaRegFileAlt className="text-success me-2 fs-4" />
                    <div className="d-flex flex-column">
                      <Link
                        className="wd-assignment-link"
                        to={`/Kanbas/Courses/${cid}/Assignments/${assignment._id}`} // Use courseId and assignment ID
                        style={{ fontWeight: 'bold', color: 'black', fontSize: '1rem', textDecoration: 'none' }}
                      >
                        {assignment.title}
                      </Link>
                      <div style={{ whiteSpace: 'normal', overflow: 'hidden', fontSize: '0.9rem' }}>
                        <span className="text-danger">Multiple Modules </span>
                        <strong>| Not available until</strong> TBD | 
                        <strong>Due</strong> TBD | 
                        <span>100 pts</span>
                      </div>
                    </div>
                  </div>
                  <LessonControlButtons />
                </li>
              ))
          ) : (
            <li className="wd-lesson list-group-item p-3 ps-1 d-flex justify-content-between align-items-start">
              <span>No data available.</span>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}

