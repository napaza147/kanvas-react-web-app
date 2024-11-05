import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

export default function AccountNavigation() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const links = currentUser ? ["Profile"] : ["Signin", "Signup"];

  const location = useLocation();

  return (
    <div id="wd-account-navigation" className="wd list-group fs-5">
      <Link 
        to="/Kanbas/Account/Signin" 
        className={`list-group-item text-danger ${location.pathname === "/Kanbas/Account/Signin" ? 'active' : ''}`} 
      >
        Signin
      </Link>
      <Link 
        to="/Kanbas/Account/Signup" 
        className={`list-group-item text-danger ${location.pathname === "/Kanbas/Account/Signup" ? 'active' : ''}`} 
      >
        Signup
      </Link>
      <Link 
        to="/Kanbas/Account/Profile" 
        className={`list-group-item text-danger ${location.pathname === "/Kanbas/Account/Profile" ? 'active' : ''}`} 
      >
        Profile
      </Link>
    </div>
  );
}
