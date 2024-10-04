import { AiOutlineDashboard } from "react-icons/ai";
import { LiaBookSolid } from "react-icons/lia";
import { FaRegCircleUser } from "react-icons/fa6";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineCalendar} from "react-icons/ai";
import { AiOutlineDesktop } from "react-icons/ai";
import { MdInbox } from "react-icons/md";


export default function KanbasNavigation() {
  const location = useLocation(); // Get the current location


  return (
    <div
      id="wd-kanbas-navigation"
      style={{ width: 105 }}
      className="list-group rounded-0 position-fixed bottom-0 top-0 d-none d-md-block bg-black z-2"
    >
      <a
        id="wd-neu-link"
        target="_blank"
        href="https://www.northeastern.edu/"
        className="list-group-item bg-black border-0 text-center"
      >
        <img src="/images/NEU.png" width='100%' />
      </a>

      <Link
        to="/Kanbas/Account"
        id="wd-account-link"
        className={`list-group-item text-center border-0 ${
          location.pathname === "/Kanbas/Account/Signin" 
            ? "bg-grey text-black"
            : "bg-black text-white"
        }`}
      >
        <FaRegCircleUser className="fs-1" />
        <br />
        Account
      </Link>

      <Link
        to="/Kanbas/Dashboard"
        id="wd-dashboard-link"
        className={`list-group-item text-center border-0 ${
          location.pathname === "/Kanbas/Dashboard"
            ? "bg-white text-danger"
            : "bg-black text-white"
        }`}
      >
        <AiOutlineDashboard className="fs-1 text-danger" />
        <br />
        Dashboard
      </Link>
      <Link
        to="/Kanbas/Courses"
        id="wd-course-link"
        className={`list-group-item text-center border-0 ${
          location.pathname.startsWith("/Kanbas/Courses")
            ? "bg-white text-danger" 
            : "bg-black text-white"
        }`}
      >
        <LiaBookSolid className="fs-1 text-danger" />
        <br />
        Courses
      </Link>
      <Link
        to="/Kanbas/Calendar"
        id="wd-calendar-link"
        className={`list-group-item text-center border-0 ${
          location.pathname === "/Kanbas/Calendar" ? 
          "bg-white text-danger" 
          : "bg-black text-white"
        }`}
      >
        <AiOutlineCalendar className="fs-1 text-danger" />
        <br />
        Calendar
      </Link>
      <Link
        to="/Kanbas/Inbox"
        id="wd-inbox-link"
        className={`list-group-item text-center border-0 ${
          location.pathname === "/Kanbas/Inbox" ? "bg-white text-danger" 
          : "bg-black text-white"
        }`}
      >
        <MdInbox className="fs-1 text-danger" />
        <br />
        Inbox
      </Link>
      <Link
        to="/Labs"
        id="wd-labs-link"
        className={`list-group-item text-center border-0 ${
          location.pathname === "/Labs" ? "bg-white text-danger" 
          : "bg-black text-white"
        }`}
      >
        <AiOutlineDesktop className="fs-1 text-danger" />
        <br />
        Labs
      </Link>
    </div>
  );
}