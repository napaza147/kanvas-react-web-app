import CoursesNavigation from "./Navigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import PeopleTable from "./People/Table";
import AssignmentEditor from "./Assignments/Editor";
import { courses } from "../Database";
import { FaAlignJustify } from 'react-icons/fa';
import { Navigate, Route, Routes, useParams, useLocation} from "react-router";


export default function Courses() {
  const { cid } = useParams(); 
  const course = courses.find((course) => course._id === cid); 
  const { pathname } = useLocation(); 
  
  return (
    <div id="wd-courses">
      <h2 className="text-black">
        <FaAlignJustify className="me-4 fs-4 mb-1" />
        {course ? course.name : "Course"} &gt; {pathname.split("/")[4]}
      </h2>
      <hr />
      <div className="d-flex">
        <div className="d-none d-md-block">
          <CoursesNavigation />
        </div>
        <div className="flex-fill">
          <Routes>
            {/* Keep `cid` in the route */}
            <Route path="/" element={<Navigate to={`/Kanbas/Courses/${cid}/Home`} />} />
            <Route path="Home" element={<Home />} />
            <Route path="Modules" element={<Modules />} />
            <Route path="Assignments" element={<Assignments />} />
            <Route path="Assignments/:aid" element={<AssignmentEditor />} />
            <Route path="People" element={<PeopleTable />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
