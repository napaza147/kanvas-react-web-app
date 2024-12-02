import { useLocation } from "react-router";
export default function TOC() {
  const { pathname } = useLocation();
  return (
    <ul className="nav nav-pills">

      <li className="nav-item">
        <a id="wd-a1" href="#/Labs/Lab1"
          className={`nav-link ${pathname.includes("Lab1") ? "active" : ""}`}>
          Lab 1
        </a>
      </li>
      <li className="nav-item">
        <a id="wd-a2" href="#/Labs/Lab2"
          className={`nav-link ${pathname.includes("Lab2") ? "active" : ""}`}>
          Lab 2
        </a>
      </li>
      <li className="nav-item">
        <a id="wd-a3" href="#/Labs/Lab3"
          className={`nav-link ${pathname.includes("Lab3") ? "active" : ""}`}>
          Lab 3
        </a>
      </li>

      <li className="nav-item">
        <a id="wd-a4" href="#/Labs/Lab4"
          className={`nav-link ${pathname.includes("Lab4") ? "active" : ""}`}>
          Lab 4
        </a>
      </li>
      
        <li className="nav-item">
        <a id="wd-a5" href="#/Labs/Lab5"
          className={`nav-link ${pathname.includes("Lab5") ? "active" : ""}`}>
          Lab 5
        </a>

      </li>
      <li className="nav-item">
        <a id="wd-k" href="#/Kanbas" className="nav-link">
          Kanbas
        </a>
      </li>
      <li className="nav-item">
        <a id="wd-github" href="https://github.com/napaza147" className="nav-link">
          My GitHub
        </a>
      </li>

      <li className="nav-item">
        <a id="wd-github-node" href="https://github.com/napaza147/kanbas-node-server-app" className="nav-link">
          My GitHub's node
        </a>
      </li>

      <li className="nav-item">
        <a id="wd-Render" href="https://kanbas-node-server-app-g41m.onrender.com" className="nav-link">
          My Render
        </a>
      </li>


      <li className="nav-item">
        <a id="wd-Heroku" href="https://kanbas-node-server-app-ivan-4977f906acc5.herokuapp.com" className="nav-link">
          My Heroku
        </a>
      </li>

    </ul>
  );
}
