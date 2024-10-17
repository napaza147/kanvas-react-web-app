import { Link, useLocation, useParams } from "react-router-dom";

export default function CoursesNavigation() {
  const { cid } = useParams(); 
  const location = useLocation();
  
  // given
  const links = ["Home", "Modules", "Piazza", "Zoom", "Assignments", "Quizzes", "Grades", "People"];

  return (
    <div id="wd-courses-navigation" className="wd list-group fs-5">
      {links.map((link) => (
        <Link 
          key={link} 
          to={`/Kanbas/Courses/${cid}/${link}`}
          className={`list-group-item text-danger ${location.pathname === `/Kanbas/Courses/${cid}/${link}` ? 'active' : ''}`} 
        >
          {link}
        </Link>
      ))}
    </div>
  );
}
