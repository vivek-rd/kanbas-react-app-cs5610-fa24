import { Link } from "react-router-dom";
export default function Assignments() {
  return (
    <div id="wd-assignments">
      <input id="wd-search-assignment" placeholder="Search for Assignments" />
      <button id="wd-add-assignment-group">+ Group</button>
      <button id="wd-add-assignment">+ Assignment</button>
      <h3 id="wd-assignments-title">
        ASSIGNMENTS 40% of Total <button>+</button>
      </h3>
      <ul id="wd-assignment-list">
        <li className="wd-assignment-list-item">
          <Link
            className="wd-assignment-link"
            to="/Kanbas/Courses/1234/Assignments/123"
          >
            A1 - ENV + HTML
          </Link>
          <div>
            Multiple Modules | <b>Not available until</b> May 6 at 12:00 AM |{" "}
            <b>Due</b> May 13 at 11:59 PM | 100 pts
          </div>
        </li>
        <br />
        <li className="wd-assignment-list-item">
          <Link
            className="wd-assignment-link"
            to="/Kanbas/Courses/1234/Assignments/123"
          >
            A2 - CSS + BOOTSTRAP
          </Link>
          <div>
            Multiple Modules | <b>Not available until</b> May 13 at 12:00 AM |{" "}
            <b>Due</b> May 20 at 11:59 PM | 100 pts
          </div>
        </li>
        <br />
        <li className="wd-assignment-list-item">
          <Link
            className="wd-assignment-link"
            to="/Kanbas/Courses/1234/Assignments/123"
          >
            A3 - JAVASCRIPT + REACT
          </Link>
          <div>
            Multiple Modules | <b>Not available until</b> May 20 at 12:00 AM |{" "}
            <b>Due</b> May 27 at 11:59 PM | 100 pts
          </div>
        </li>
      </ul>
    </div>
  );
}
