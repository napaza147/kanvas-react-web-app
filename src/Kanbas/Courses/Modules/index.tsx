import ModulesControls from './ModulesControls'; 
import { BsGripVertical } from 'react-icons/bs';
import ModuleControlButtons from './ModuleControlButtons';
import LessonControlButtons from './LessonControlButtons';


export default function Modules() {
  return (
    <div>
      <ModulesControls /><br /><br /><br /><br />

      <ul id="wd-modules" className="list-group rounded-0">
        <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary"></div><BsGripVertical className="me-2 fs-3" />
        Week 1
        <ModuleControlButtons />

          <ul className="wd-lessons list-group rounded-0">
            <li className="wd-lesson list-group-item p-3 ps-1">
            <BsGripVertical className="me-2 fs-3" />
          LEARNING OBJECTIVES
          <LessonControlButtons />

              <ul className="wd-content">
                <li className="wd-content-item">Introduction to the course</li>
                <li className="wd-content-item">Learn what is Web Development</li>
              </ul>
            </li>
            <li className="wd-lesson list-group-item p-3 ps-1">
            <BsGripVertical className="me-2 fs-3" />
          READINGS
          <LessonControlButtons />
              <ul className="wd-content">
                <li className="wd-content-item">Full Stack Developer - Chapter 1 - Introduction</li>
                <li className="wd-content-item">Full Stack Developer - Chapter 2 - Creating User</li>
              </ul>
            </li>
            <li className="wd-lesson list-group-item p-3 ps-1">
            <BsGripVertical className="me-2 fs-3" />
          SLIDES
          <LessonControlButtons />
              <ul className="wd-content">
                <li className="wd-content-item">Introduction to Web Development</li>
                <li className="wd-content-item">Creating an HTTP server with Node.js</li>
                <li className="wd-content-item">Creating a React Application</li>
              </ul>
            </li>
          </ul>
        </li>
        
        <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary"></div><BsGripVertical className="me-2 fs-3" />
        Week 2
        <ModuleControlButtons />
          <ul className="wd-lessons list-group rounded-0">
            <li className="wd-lesson list-group-item p-3 ps-1">
              <span className="wd-title">LEARNING OBJECTIVES</span>
              <ul className="wd-content">
                <li className="wd-content-item">Lecture 2 - Formatting User Interfaces with HTML</li>
              </ul>
            </li>
            <li className="wd-lesson list-group-item p-3 ps-1">LESSON 1</li>
            <li className="wd-lesson list-group-item p-3 ps-1">LESSON 2</li>
          </ul>
        </li>
      </ul>
    </div>
  );
}
