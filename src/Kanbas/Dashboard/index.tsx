import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ProtectedForFaculty from "./ProtectedForFaculty";
import { addEnrollment, deleteEnrollment } from "../Enrollment/reducer";

interface Enrollment {
  user: string;
  course: string;
}

export default function Dashboard(
  { courses, course, setCourse, addNewCourse,
    deleteCourse, updateCourse }: {
    courses: any[]; course: any; setCourse: (course: any) => void;
    addNewCourse: () => void; deleteCourse: (course: any) => void;
    updateCourse: () => void; }) {

  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const { enrollments } = useSelector((state: any) => state.enrollmentReducer);

  const dispatch = useDispatch();

  const [showEnrollment, setEnrollment] = useState(true);
  const shownCourses = showEnrollment
    ? courses.filter((course) =>
        enrollments.some((enrollment: Enrollment) =>
          enrollment.user === currentUser._id &&
          enrollment.course === course._id
        )
      )
    : courses;

  const toggleEnrollment = () => {
    setEnrollment(!showEnrollment);
  };

  const addCurrEnrollment = (courseID: string) => {
    const newEnrollment = {
      "_id": new Date().getTime().toString(),
      "user": currentUser._id,
      "course": courseID
    };
    dispatch(addEnrollment(newEnrollment));
  };

  const isEnrolled = (courseID: string) => {
    return enrollments.some((enrollment: Enrollment) =>
      enrollment.user === currentUser._id && enrollment.course === courseID
    );
  };

  const removeCurrEnrollment = (courseID: string) => {
    const removeEnrollment = {
      "_id": new Date().getTime().toString(),
      "user": currentUser._id,
      "course": courseID
    };
    dispatch(deleteEnrollment(removeEnrollment));
  };

  return (
    <div id="wd-dashboard">
      <div className="d-flex justify-content-between align-items-center">
        <h1 id="wd-dashboard-title">Dashboard</h1>
        {currentUser.role === "STUDENT" && (
          <button className="btn btn-primary" onClick={toggleEnrollment}>
            {showEnrollment ? "View All Courses" : "View My Enrollments"}
          </button>
        )}
      </div>

      {/* Faculty Section */}
      <ProtectedForFaculty>
        <h5 className="d-flex justify-content-between align-items-center">
          New Course
          <div>
            <button className="btn btn-primary float-end" onClick={addNewCourse}>
              Add
            </button>
            <button className="btn btn-warning float-end me-2" onClick={updateCourse}>
              Update
            </button>
          </div>
        </h5>
        <hr />
        <input
          value={course.name}
          className="form-control mb-2"
          onChange={(e) => setCourse({ ...course, name: e.target.value })}
        />
        <textarea
          value={course.description}
          className="form-control"
          onChange={(e) => setCourse({ ...course, description: e.target.value })}
        />
        <hr />
      </ProtectedForFaculty>






      {/* Published Courses */}
      <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2>
      <hr />





      
      <div id="wd-dashboard-courses" className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          {shownCourses.map((course) => (
            <div className="col" key={course._id} style={{ maxWidth: "300px" }}>
              <div className="card rounded-3 overflow-hidden">
                <div className="card-body">
                  <Link
                    to={`/Kanbas/Courses/${course._id}/Home`}
                    className="wd-dashboard-course-link text-decoration-none text-dark"
                  >
                    <img src={course.image} alt={course.name} width="100%" height={160} />
                    <h5 className="wd-dashboard-course-title card-title">{course.name}</h5>
                    <p className="wd-dashboard-course-text card-text" style={{ maxHeight: 100 }}>
                      {course.description}
                    </p>
                  </Link>

                  {/* Student Enrollment Buttons */}
                  {!showEnrollment && (
                    <div className="d-flex justify-content-between">
                      {!isEnrolled(course._id) ? (
                        <button
                          className="btn btn-success"
                          onClick={() => addCurrEnrollment(course._id)}
                        >
                          Enroll
                        </button>
                      ) : (
                        <button
                          className="btn btn-danger"
                          onClick={() => removeCurrEnrollment(course._id)}
                        >
                          Unenroll
                        </button>
                      )}
                    </div>
                  )}

                  {/* Faculty Actions */}
                  <ProtectedForFaculty>
                    <div className="d-flex justify-content-between mt-3">
                      <button
                        className="btn btn-danger"
                        onClick={(event) => {
                          event.preventDefault();
                          deleteCourse(course._id);
                        }}
                      >
                        Delete
                      </button>
                      <button
                        className="btn btn-warning"
                        onClick={(event) => {
                          event.preventDefault();
                          setCourse(course);
                        }}
                      >
                        Edit
                      </button>
                    </div>
                  </ProtectedForFaculty>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>








    </div>
  );
}
