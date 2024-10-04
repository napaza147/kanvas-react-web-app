import Modules from "../Modules";
import CourseStatus from "./Status";
export default function Home() {
  return (
  <div className="d-flex" id="wd-home">
    <div className="flex-fill">
      <Modules />
      </div>
      <div className="course-status">
      <CourseStatus />
    </div>
  </div>
  );
}
