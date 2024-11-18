import { Link, useParams } from "react-router-dom";
import AssignmentsControls from "./AssignmentsControls";
import LessonControlButtons from "../Modules/LessonControlButtons";
import { BsGripVertical } from "react-icons/bs";
import { GiNotebook } from "react-icons/gi";
import AssignmentsControlButtons from "./AssignmentsControlButtons";
import * as coursesClient from "../client";

import { useDispatch, useSelector } from "react-redux";
import { FaTrash } from "react-icons/fa";
import AssignmentDelete from "./AssignmentDelete";
import { useEffect, useState } from "react";
import { setAssignments } from "./reducer";

export default function Assignments() {
  const { cid } = useParams();
  const dispatch = useDispatch();
  const { assignments } = useSelector((state: any) => state.assignmentReducer);
  const { currentUser } = useSelector((state: any) => state.accountReducer);

  const fetchAssignments = async () => {
    const assignments = await coursesClient.findAssignmentsForCourse(
      cid as string
    );
    dispatch(setAssignments(assignments));
  };
  useEffect(() => {
    fetchAssignments();
  }, []);
  // State to hold the assignmentId of the assignment to be deleted
  const [assignmentToDelete, setAssignmentToDelete] = useState(null);

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
              // .filter((assignment: any) => assignment.course === cid)
              .map((assignment: any) => (
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
                      to={
                        currentUser.role === "FACULTY"
                          ? `/Kanbas/Courses/${cid}/Assignments/${assignment._id}`
                          : `/Kanbas/Courses/${cid}/Assignments/`
                      }
                    >
                      <span>{assignment.title}</span>
                    </Link>
                    <span>
                      <span className="text-danger "> Multiple Modules</span> |{" "}
                      <b>Not available until</b> {assignment.available_date} |{" "}
                      <b>Due</b> {assignment.due_date} | {assignment.points}
                    </span>
                  </div>
                  <div className="col-auto">
                    {currentUser.role === "FACULTY" && (
                      <button
                        id="wd-delete-assignment-btn"
                        className="btn btn-link text-danger border-0"
                        data-bs-toggle="modal"
                        data-bs-target="#wd-delete-assignment-dialog"
                        onClick={() => setAssignmentToDelete(assignment._id)}
                      >
                        <FaTrash
                          className="me-1"
                          size={20}
                          style={{
                            position: "relative",
                            top: "-2px",
                            left: "2px",
                          }}
                          // onClick={() => ()}
                        ></FaTrash>
                      </button>
                    )}
                    <LessonControlButtons />
                  </div>
                </li>
              ))}
            <AssignmentDelete
              assignmentId={assignmentToDelete}
            ></AssignmentDelete>
          </ul>
        </li>
      </ul>
    </div>
  );
}
