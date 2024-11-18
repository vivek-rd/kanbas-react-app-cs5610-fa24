import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { enroll, unenroll, setEnrollments } from "./reducer";
import * as enrollmentClient from "./client";

export default function Dashboard({
  courses,
  course,
  setCourse,
  addNewCourse,
  deleteCourse,
  updateCourse,
}: {
  courses: any[];
  course: any;
  setCourse: (course: any) => void;
  addNewCourse: () => void;
  deleteCourse: (course: any) => void;
  updateCourse: () => void;
}) {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const { enrollments } = useSelector((state: any) => state.enrollmentReducer);
  const [showEnrollments, setShowEnrollments] = useState(false);
  const dispatch = useDispatch();

  const enrollFunction = async (userId: any, courseId: any) => {
    await enrollmentClient.enrollStudent(userId, courseId);
    dispatch(
      enroll({
        course: courseId,
        user: userId,
      })
    );
  };

  const unenrollFunction = async (userId: any, courseId: any) => {
    await enrollmentClient.unenrollStudent(userId, courseId);
    dispatch(
      unenroll({
        course: courseId,
        user: userId,
      })
    );
  };

  const getEnrollments = async () => {
    const enrollments = await enrollmentClient.getEnrollments(currentUser._id);
    dispatch(setEnrollments(enrollments));
  };

  useEffect(() => {
    getEnrollments();
  }, [currentUser]);

  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      {currentUser.role === "FACULTY" && (
        <>
          <h5>
            New Course
            <button
              className="btn btn-primary float-end"
              id="wd-add-new-course-click"
              onClick={addNewCourse}
            >
              {" "}
              Add{" "}
            </button>
            <button
              className="btn btn-warning float-end me-2"
              onClick={updateCourse}
              id="wd-update-course-click"
            >
              Update
            </button>
          </h5>
          <br />
          <input
            defaultValue={course.name}
            className="form-control mb-2"
            value={course.name}
            onChange={(e) => setCourse({ ...course, name: e.target.value })}
          />
          <textarea
            defaultValue={course.description}
            className="form-control mb-3"
            value={course.description}
            onChange={(e) =>
              setCourse({ ...course, description: e.target.value })
            }
          />
        </>
      )}
      <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2>{" "}
      <hr />
      {currentUser.role === "STUDENT" && (
        <button
          className="btn btn-primary float-end"
          onClick={() => setShowEnrollments(!showEnrollments)}
        >
          Enrollments
        </button>
      )}
      <div id="wd-dashboard-courses" className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          {courses
            .filter(
              (course) =>
                showEnrollments ||
                enrollments.some(
                  (enrollment: any) =>
                    enrollment.user === currentUser._id &&
                    enrollment.course === course._id
                )
            )
            .map((course) => (
              <div
                className="wd-dashboard-course col"
                style={{ width: "300px" }}
              >
                <div className="card rounded-3 overflow-hidden">
                  <img src="/images/reactjs.jpg" width="100%" height={160} />
                  <div className="card-body">
                    <h5 className="wd-dashboard-course-title card-title">
                      {course.name}{" "}
                    </h5>
                    <p
                      className="wd-dashboard-course-title card-text overflow-y-hidden"
                      style={{ maxHeight: 100 }}
                    >
                      {course.description}{" "}
                    </p>
                    {enrollments.find(
                      (enrollment: any) =>
                        enrollment.user === currentUser._id &&
                        enrollment.course === course._id
                    ) && (
                      <Link
                        to={`/Kanbas/Courses/${course._id}/Home`}
                        className="wd-dashboard-course-link text-decoration-none text-dark"
                      >
                        <button className="btn btn-primary"> Go </button>
                      </Link>
                    )}

                    {currentUser.role === "STUDENT" && showEnrollments && (
                      <>
                        {enrollments.find(
                          (enrollment: any) =>
                            enrollment.user === currentUser._id &&
                            enrollment.course === course._id
                        ) ? (
                          <button
                            className="btn btn-danger float-end"
                            onClick={() => {
                              unenrollFunction(currentUser._id, course._id);
                            }}
                          >
                            Unenroll
                          </button>
                        ) : (
                          <button
                            className="btn btn-success float-end"
                            onClick={() => {
                              enrollFunction(currentUser._id, course._id);
                            }}
                          >
                            Enroll
                          </button>
                        )}
                      </>
                    )}
                    {currentUser.role === "FACULTY" && (
                      <>
                        <button
                          onClick={(event) => {
                            event.preventDefault();
                            deleteCourse(course._id);
                          }}
                          className="btn btn-danger float-end"
                          id="wd-delete-course-click"
                        >
                          Delete
                        </button>
                        <button
                          id="wd-edit-course-click"
                          onClick={(event) => {
                            event.preventDefault();
                            setCourse(course);
                          }}
                          className="btn btn-warning me-2 float-end"
                        >
                          Edit
                        </button>
                      </>
                    )}
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
