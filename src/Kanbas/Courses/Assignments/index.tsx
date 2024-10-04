import { Link } from "react-router-dom";
import { BsGripVertical, BsSearch } from 'react-icons/bs';
import { FaRegFileAlt, FaCaretDown } from 'react-icons/fa';
import LessonControlButtons from '../Modules/LessonControlButtons';
import PercentageIndicator from "./PercentageIndicator";

export default function Assignments() {
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

          {/* Assignment Items */}
          <li className="wd-lesson list-group-item p-3 ps-1 d-flex justify-content-between align-items-start">
            <div className="d-flex align-items-start">
              <BsGripVertical className="me-2 fs-3" />
              <FaRegFileAlt className="text-success me-2 fs-4" />
              <div className="d-flex flex-column">
                <Link
                  className="wd-assignment-link"
                  to="/Kanbas/Courses/1234/Assignments/124"
                  style={{ fontWeight: 'bold', color: 'black', fontSize: '1rem', textDecoration: 'none' }}
                >
                  A1
                </Link>
                <div style={{ whiteSpace: 'normal', overflow: 'hidden', fontSize: '0.9rem' }}>
                  <span className="text-danger">Multiple Modules </span>
                  <strong>| Not available until</strong> May 6 at 12:00am | 
                  <strong>Due</strong> May 13 at 11:59pm | 
                  <span>100 pts</span>
                </div>
              </div>
            </div>
            <LessonControlButtons />
          </li>

          {/* Additional Assignment Items */}
          <li className="wd-lesson list-group-item p-3 ps-1 d-flex justify-content-between align-items-start">
            <div className="d-flex align-items-start">
              <BsGripVertical className="me-2 fs-3" />
              <FaRegFileAlt className="text-success me-2 fs-4" />
              <div className="d-flex flex-column">
                <Link
                  className="wd-assignment-link"
                  to="/Kanbas/Courses/1234/Assignments/125"
                  style={{ fontWeight: 'bold', color: 'black', fontSize: '1rem', textDecoration: 'none' }}
                >
                  A2
                </Link>
                <div style={{ whiteSpace: 'normal', overflow: 'hidden', fontSize: '0.9rem' }}>
                  <span className="text-danger">Multiple Modules </span>
                  <strong>| Not available until</strong> May 13 at 12:00am | 
                  <strong>Due</strong> May 20 at 11:59pm | 
                  <span>100 pts</span>
                </div>
              </div>
            </div>
            <LessonControlButtons />
          </li>

          <li className="wd-lesson list-group-item p-3 ps-1 d-flex justify-content-between align-items-start">
            <div className="d-flex align-items-start">
              <BsGripVertical className="me-2 fs-3" />
              <FaRegFileAlt className="text-success me-2 fs-4" />
              <div className="d-flex flex-column">
                <Link
                  className="wd-assignment-link"
                  to="/Kanbas/Courses/1234/Assignments/126"
                  style={{ fontWeight: 'bold', color: 'black', fontSize: '1rem', textDecoration: 'none' }}
                >
                  A3
                </Link>
                <div style={{ whiteSpace: 'normal', overflow: 'hidden', fontSize: '0.9rem' }}>
                  <span className="text-danger">Multiple Modules </span>
                  <strong>| Not available until</strong> May 20 at 12:00am | 
                  <strong>Due</strong> May 27 at 11:59pm | 
                  <span>100 pts</span>
                </div>
              </div>
            </div>
            <LessonControlButtons />
          </li>
        </ul>
      </div>
    </div>
  );
}
