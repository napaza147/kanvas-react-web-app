import { Link } from "react-router-dom";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
      <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <Link className="wd-dashboard-course-link"
                to="/Kanbas/Courses/1234/Home">
            <img src="/images/reactjs.jpg" width={200} />
            <div>
              <h5>
                 CS1234 React JS
              </h5>
              <p className="wd-dashboard-course-title">
                Full Stack software developer
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>


        <div className="wd-dashboard-course">
          <Link className="wd-dashboard-course-link" to="/Kanbas/Courses/5678/Home">
            <img src="/images/nodejs.jpg" width={200} alt="CS5678 Node JS" />
            <div>
              <h5>CS5628 Node JS</h5>
              <p className="wd-dashboard-course-title">Backend Development with Node</p>
              <button> Go </button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
          <Link className="wd-dashboard-course-link" to="/Kanbas/Courses/9101/Home">
            <img src="/images/python.jpg" width={200} alt="CS9101 Python" />
            <div>
              <h5>CS7101 Python</h5>
              <p className="wd-dashboard-course-title">Introduction to Python</p>
              <button> Go </button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
          <Link className="wd-dashboard-course-link" to="/Kanbas/Courses/1121/Home">
            <img src="/images/java.jpg" width={200} alt="CS1121 Java" />
            <div>
              <h5>CS1121 Java</h5>
              <p className="wd-dashboard-course-title">Java, the basics</p>
              <button> Go </button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
          <Link className="wd-dashboard-course-link" to="/Kanbas/Courses/3141/Home">
            <img src="/images/webdev.jpg" width={200} alt="CS3141 Web Development" />
            <div>
              <h5>CS1041 Web Dev</h5>
              <p className="wd-dashboard-course-title">Web Dev</p>
              <button> Go </button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
          <Link className="wd-dashboard-course-link" to="/Kanbas/Courses/5161/Home">
            <img src="/images/datascience.jpg" width={200} alt="CS5161 Data Science" />
            <div>
              <h5>CS5261 Data Analysis</h5>
              <p className="wd-dashboard-course-title">Data Analysis</p>
              <button> Go </button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
          <Link className="wd-dashboard-course-link" to="/Kanbas/Courses/7181/Home">
            <img src="/images/machinelearning.jpg" width={200} alt="CS7181 Machine Learning" />
            <div>
              <h5>CS25421 Machine Learning</h5>
              <p className="wd-dashboard-course-title">Machine Learning</p>
              <button> Go </button>
            </div>
          </Link>
        </div>


      </div>
    </div>
  );
}
