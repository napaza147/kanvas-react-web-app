import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2>
      <hr />
      <div id="wd-dashboard-courses" className="container">
        <div className="row g-4 justify-content-start">

          <div className="col-auto">
            <div className="card wd-dashboard-card">
              <Link className="text-decoration-none text-dark" to="/Kanbas/Courses/1234/Home">
                <img src="/images/reactjs.jpg" className="card-img-top wd-dashboard-card-img" alt="CS1234 React JS" />
                <div className="card-body">
                  <h5 className="card-title">CS1234 React JS</h5>
                  <p className="card-text">Full Stack Software Developer</p>
                </div>
              </Link>
            </div>
          </div>

          <div className="col-auto">
            <div className="card wd-dashboard-card">
              <Link className="text-decoration-none text-dark" to="/Kanbas/Courses/5678/Home">
                <img src="/images/nodejs.jpg" className="card-img-top wd-dashboard-card-img" alt="CS5678 Node JS" />
                <div className="card-body">
                  <h5 className="card-title">CS5678 Node JS</h5>
                  <p className="card-text">Backend Development with Node</p>
                </div>
              </Link>
            </div>
          </div>

          <div className="col-auto">
            <div className="card wd-dashboard-card">
              <Link className="text-decoration-none text-dark" to="/Kanbas/Courses/9101/Home">
                <img src="/images/python.jpg" className="card-img-top wd-dashboard-card-img" alt="CS9101 Python" />
                <div className="card-body">
                  <h5 className="card-title">CS9101 Python</h5>
                  <p className="card-text">Introduction to Python</p>
                </div>
              </Link>
            </div>
          </div>

          <div className="col-auto">
            <div className="card wd-dashboard-card">
              <Link className="text-decoration-none text-dark" to="/Kanbas/Courses/1121/Home">
                <img src="/images/java.jpg" className="card-img-top wd-dashboard-card-img" alt="CS1121 Java" />
                <div className="card-body">
                  <h5 className="card-title">CS1121 Java</h5>
                  <p className="card-text">Java, the Basics</p>
                </div>
              </Link>
            </div>
          </div>

          <div className="col-auto">
            <div className="card wd-dashboard-card">
              <Link className="text-decoration-none text-dark" to="/Kanbas/Courses/3141/Home">
                <img src="/images/webdev.jpg" className="card-img-top wd-dashboard-card-img" alt="CS3141 Web Development" />
                <div className="card-body">
                  <h5 className="card-title">CS3141 Web Dev</h5>
                  <p className="card-text">Web Development Basics</p>
                </div>
              </Link>
            </div>
          </div>

          <div className="col-auto">
            <div className="card wd-dashboard-card">
              <Link className="text-decoration-none text-dark" to="/Kanbas/Courses/5161/Home">
                <img src="/images/datascience.jpg" className="card-img-top wd-dashboard-card-img" alt="CS5161 Data Science" />
                <div className="card-body">
                  <h5 className="card-title">CS5161 Data Analysis</h5>
                  <p className="card-text">Data Analysis Techniques</p>
                </div>
              </Link>
            </div>
          </div>

          <div className="col-auto">
            <div className="card wd-dashboard-card">
              <Link className="text-decoration-none text-dark" to="/Kanbas/Courses/7181/Home">
                <img src="/images/machinelearning.jpg" className="card-img-top wd-dashboard-card-img" alt="CS7181 Machine Learning" />
                <div className="card-body">
                  <h5 className="card-title">CS7181 Machine Learning</h5>
                  <p className="card-text">Introduction to Machine Learning</p>
                </div>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
