import { Link, useLocation } from "react-router-dom";
export default function CoursesNavigation() {
  const { pathname } = useLocation();
  return (
    <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
      <Link
        id="wd-course-home-link"
        to="/Kanbas/Courses/1234/Home"
        className={`list-group-item list-group-item-action border border-0
          ${pathname.includes("Home") ? "active text-black" : "text-danger"} `}
      >
        {/* <button
          className={`btn w-100 text-start py-3 fs-5 ${
            pathname.includes("Home") ? "text-black" : "text-danger"
          }`}
        > */}
        Home
        {/* </button> */}
      </Link>

      <Link
        id="wd-course-modules-link"
        to="/Kanbas/Courses/1234/Modules"
        className={`list-group-item list-group-item-action border border-0
          ${
            pathname.includes("Modules") ? "active text-black" : "text-danger"
          } `}
      >
        Modules
      </Link>

      <Link
        id="wd-course-piazza-link"
        to="/Kanbas/Courses/1234/Piazza"
        className={`list-group-item list-group-item-action border border-0
          ${
            pathname.includes("Piazza") ? "active text-black" : "text-danger"
          } `}
      >
        Piazza
      </Link>

      <Link
        id="wd-course-zoom-link"
        to="/Kanbas/Courses/1234/Zoom"
        className={`list-group-item list-group-item-action border border-0
          ${pathname.includes("Zoom") ? "active text-black" : "text-danger"} `}
      >
        Zoom
      </Link>

      <Link
        id="wd-course-assignments-link"
        to="/Kanbas/Courses/1234/Assignments"
        className={`list-group-item list-group-item-action border border-0
          ${
            pathname.includes("Assignments")
              ? "active text-black"
              : "text-danger"
          } `}
      >
        Assignments
      </Link>

      <Link
        id="wd-course-quizzes-link"
        to="/Kanbas/Courses/1234/Quizzes"
        className={`list-group-item list-group-item-action border border-0
          ${
            pathname.includes("Quizzes") ? "active text-black" : "text-danger"
          } `}
      >
        Quizzes
      </Link>

      <Link
        id="wd-course-grades-link"
        to="/Kanbas/Courses/1234/Grades"
        className={`list-group-item list-group-item-action border border-0
          ${
            pathname.includes("Grades") ? "active text-black" : "text-danger"
          } `}
      >
        Grades
      </Link>

      <Link
        id="wd-course-people-link"
        to="/Kanbas/Courses/:cid/People"
        className={`list-group-item list-group-item-action border border-0
          ${
            pathname.includes("People") ? "active text-black" : "text-danger"
          } `}
      >
        People
      </Link>
    </div>
  );
}
