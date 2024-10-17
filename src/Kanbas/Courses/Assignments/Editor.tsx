import { useParams } from "react-router";
import * as db from "../../Database";
import DateInputs from "./DateInputs";
import { Link } from "react-router-dom";

export default function AssignmentEditor() {
  const { cid, aid } = useParams();
  console.log("course and assignment id are", cid, aid);
  const assignments = db.assignments;

  return (
    <div id="wd-assignments-editor">
      {assignments
        .filter((assignment) => assignment._id === aid)
        .map((assignment) => (
          <>
            <div className="mb-3">
              <label htmlFor="wd-name" className="form-label">
                <h3>Assignment Name</h3>
              </label>
              <input
                id="wd-name"
                value={assignment.title}
                className="form-control"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="wd-description" className="form-label">
                Description
              </label>
              <textarea id="wd-description" className="form-control">
                {assignment.description}
              </textarea>
            </div>

            <div className="row g-3">
              <div className="col-md-2 text-end">
                <label htmlFor="wd-points" className="col-form-label">
                  Points
                </label>
              </div>
              <div className="col-md-10">
                <input
                  id="wd-points"
                  value={assignment.points}
                  className="form-control"
                />
              </div>

              <div className="col-md-2 text-end">
                <label htmlFor="wd-group" className="col-form-label">
                  Assignment Group
                </label>
              </div>
              <div className="col-md-10">
                <select
                  name="assignment-group"
                  id="wd-group"
                  className="form-select"
                >
                  <option value="ASSIGNMENTS">ASSIGNMENTS</option>
                </select>
              </div>

              <div className="col-md-2 text-end">
                <label htmlFor="wd-display-grade-as" className="col-form-label">
                  Display Grade as
                </label>
              </div>
              <div className="col-md-10">
                <select
                  name="display-grade-as"
                  id="wd-display-grade-as"
                  className="form-select"
                >
                  <option value="percentage">Percentage</option>
                  <option value="letter-grade">Letter Grade</option>
                </select>
              </div>

              <div className="col-md-2 text-end">
                <label htmlFor="wd-submission-type" className="col-form-label">
                  Submission Type
                </label>
              </div>
              <div className="col-md-10 border rounded">
                <select
                  name="submission-type"
                  id="wd-submission-type"
                  className="form-control mt-2"
                >
                  <option value="online">Online</option>
                </select>
                <br />
                <label>Online Entry Options:</label>
                <br />
                <div className="form-check">
                  <input
                    type="checkbox"
                    name="text-entry"
                    id="wd-text-entry"
                    className="form-check-input"
                  />
                  <label className="form-check-label" htmlFor="wd-text-entry">
                    Text Entry
                  </label>
                </div>
                <div className="form-check">
                  <input
                    type="checkbox"
                    name="website-url"
                    id="wd-website-url"
                    className="form-check-input"
                  />
                  <label className="form-check-label" htmlFor="wd-website-url">
                    Website URL
                  </label>
                </div>
                <div className="form-check">
                  <input
                    type="checkbox"
                    name="media-recordings"
                    id="wd-media-recordings"
                    className="form-check-input"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="wd-media-recordings"
                  >
                    Media Recordings
                  </label>
                </div>
                <div className="form-check">
                  <input
                    type="checkbox"
                    name="student-annotation"
                    id="wd-student-annotation"
                    className="form-check-input"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="wd-student-annotation"
                  >
                    Student Annotations
                  </label>
                </div>
                <div className="form-check">
                  <input
                    type="checkbox"
                    name="file-upload"
                    id="wd-file-upload"
                    className="form-check-input"
                  />
                  <label
                    className="form-check-label mb-2"
                    htmlFor="wd-file-upload"
                  >
                    File Upload
                  </label>
                </div>
              </div>

              <div className="col-md-2 text-end">
                <label htmlFor="wd-assign-to" className="col-form-label">
                  Assign
                </label>
              </div>
              <div className="col-md-10 border rounded">
                <input
                  id="wd-assign-to"
                  value={"Everyone"}
                  className="form-control mt-2 mb-2"
                />

                <div className="col mb-2">
                  <label htmlFor="wd-due-date">Due</label>
                  <div className="input-group">
                    <input
                      type="date"
                      id="wd-due-date"
                      className="form-control"
                      value={
                        new Date(assignment.due_date)
                          .toISOString()
                          .split("T")[0]
                      }
                    />
                  </div>
                </div>

                <DateInputs
                  available_date={
                    new Date(assignment.available_date)
                      .toISOString()
                      .split("T")[0]
                  }
                ></DateInputs>
              </div>
            </div>
            <hr />
            <div className="d-flex justify-content-end mb-3">
              <Link to={`/Kanbas/Courses/${cid}/Assignments`}>
                <input
                  type="button"
                  value="Save"
                  id="wd-assignment-save"
                  className="btn btn-primary text-white bg-danger border-0 me-2"
                />
              </Link>
              <Link to={`/Kanbas/Courses/${cid}/Assignments`}>
                <input
                  type="button"
                  value="Cancel"
                  id="wd-assignment-cancel"
                  className="btn btn-secondary  border-0 me-2"
                />
              </Link>
            </div>
          </>
        ))}
    </div>
  );
}
