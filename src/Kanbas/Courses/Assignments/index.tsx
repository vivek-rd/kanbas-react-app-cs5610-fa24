import { Link, useParams } from "react-router-dom";
import AssignmentsControls from "./AssignmentsControls";
import LessonControlButtons from "../Modules/LessonControlButtons";
import { BsGripVertical } from "react-icons/bs";
import { GiNotebook } from "react-icons/gi";
import AssignmentsControlButtons from "./AssignmentsControlButtons";

import * as db from "../../Database";

export default function Assignments() {
  const { cid } = useParams();
  const assignments = db.assignments;
  return (
    <div id="wd-assignments">
      <AssignmentsControls></AssignmentsControls>

      <ul id="wd-assignments-list" className="list-group rounded-0">
        <li className="wd-assignments-list-item list-group-item p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary">
            <BsGripVertical className="me-2 fs-3" />
            ASSIGNMENTS
            <AssignmentsControlButtons></AssignmentsControlButtons>
          </div>
          <ul className="wd-assignments-sub-list list-group rounded-0">
            {assignments
              .filter((assignment) => assignment.course === cid)
              .map((assignment) => (
                <li className="wd-assignments-sub-list-item list-group-item p-3 ps-1 d-flex align-items-center justify-content-between">
                  <div className="col-auto d-flex align-items-center">
                    <BsGripVertical className="fs-3 me-2" />
                    <GiNotebook
                      className="fs-4 me-3"
                      style={{ color: "green" }}
                    />
                  </div>
                  <div className="col d-flex flex-column align-items-left">
                    <Link
                      className="wd-assignment-link"
                      to={`/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}
                    >
                      <span>{assignment.title}</span>
                    </Link>
                    <span>
                      <span className="text-danger "> Multiple Modules</span> |{" "}
                      <b>Not available until</b> May 6 at 12:00 AM | <b>Due</b>{" "}
                      {assignment.due_date} | {assignment.points}
                    </span>
                  </div>
                  <div className="col-auto">
                    <LessonControlButtons />
                  </div>
                </li>
              ))}
            {/* <li className="wd-assignments-sub-list-item list-group-item p-3 ps-1 d-flex align-items-center justify-content-between">
              <div className="col-auto d-flex align-items-center">
                <BsGripVertical className="fs-3 me-2" />
                <GiNotebook className="fs-4 me-3" style={{ color: "green" }} />
              </div>
              <div className="col d-flex flex-column align-items-left">
                <Link
                  className="wd-assignment-link"
                  to="/Kanbas/Courses/1234/Assignments/123"
                >
                  <span>A1</span>
                </Link>
                <span>
                  <span className="text-danger "> Multiple Modules</span> |{" "}
                  <b>Not available until</b> May 6 at 12:00 AM | <b>Due</b> May
                  13 at 11:59 PM | 100 pts
                </span>
              </div>
              <div className="col-auto">
                <LessonControlButtons />
              </div>
            </li>
            <li className="wd-assignments-sub-list-item list-group-item p-3 ps-1 d-flex align-items-center justify-content-between">
              <div className="col-auto d-flex align-items-center">
                <BsGripVertical className="fs-3 me-2" />
                <GiNotebook className="fs-4 me-3" style={{ color: "green" }} />
              </div>
              <div className="col d-flex flex-column align-items-left">
                <Link
                  className="wd-assignment-link"
                  to="/Kanbas/Courses/1234/Assignments/123"
                >
                  <span>A2</span>
                </Link>
                <span>
                  <span className="text-danger "> Multiple Modules</span> |{" "}
                  <b>Not available until</b> May 13 at 12:00 AM | <b>Due</b> May
                  20 at 11:59 PM | 100 pts
                </span>
              </div>
              <div className="col-auto">
                <LessonControlButtons />
              </div>
            </li>
            <li className="wd-assignments-sub-list-item list-group-item p-3 ps-1 d-flex align-items-center justify-content-between">
              <div className="col-auto d-flex align-items-center">
                <BsGripVertical className="fs-3 me-2" />
                <GiNotebook className="fs-4 me-3" style={{ color: "green" }} />
              </div>
              <div className="col d-flex flex-column align-items-left">
                <Link
                  className="wd-assignment-link"
                  to="/Kanbas/Courses/1234/Assignments/123"
                >
                  <span>A3</span>
                </Link>
                <span>
                  <span className="text-danger "> Multiple Modules</span> |{" "}
                  <b>Not available until</b> May 20 at 12:00 AM | <b>Due</b> May
                  27 at 11:59 PM | 100 pts
                </span>
              </div>
              <div className="col-auto">
                <LessonControlButtons />
              </div>
            </li> */}
          </ul>
        </li>
      </ul>
    </div>
  );
}
