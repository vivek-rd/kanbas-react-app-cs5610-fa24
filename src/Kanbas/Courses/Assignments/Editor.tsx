import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addAssignment, updateAssignment } from "./reducer";
import { useState } from "react";

export default function AssignmentEditor() {
  const { cid, aid } = useParams();
  const dispatch = useDispatch();
  const { assignments } = useSelector((state: any) => state.assignmentReducer);

  const new_assignment = assignments.find(
    (assignment: any) => assignment._id === aid
  ) || {
    _id: new Date().toISOString(),
    title: "New Assignment",
    description: "New Description",
    points: 100,
    course: cid || "",
    due_date: new Date().toISOString(),
    available_date: new Date().toISOString(),
  };

  const [currentAssignment, setCurrentAssignment] = useState(new_assignment);

  const handleChange = (e: any) => {
    const { id, value } = e.target;

    const updated = {
      ...currentAssignment,
      [id.replace("wd-", "")]: value,
    };
    console.log(updated);
    setCurrentAssignment(updated);
  };

  const saveAssignment = (currentAssignment: any) => {
    console.log(currentAssignment);
    if (
      assignments.find(
        (assignment: any) => assignment._id === currentAssignment._id
      )
    ) {
      dispatch(updateAssignment(currentAssignment));
    } else {
      dispatch(addAssignment(currentAssignment));
    }
  };

  return (
    <div id="wd-assignments-editor">
      <>
        <div className="mb-3">
          <label htmlFor="wd-title" className="form-label">
            <h3>Assignment Name</h3>
          </label>
          <input
            id="wd-title"
            value={currentAssignment.title}
            className="form-control"
            onChange={(e) => handleChange(e)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="wd-description" className="form-label">
            Description
          </label>
          <input
            id="wd-description"
            className="form-control"
            value={currentAssignment.description}
            onChange={(e) => handleChange(e)}
          ></input>
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
              value={currentAssignment.points}
              className="form-control"
              onChange={(e) => handleChange(e)}
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
              <label className="form-check-label" htmlFor="wd-media-recordings">
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
              <label className="form-check-label mb-2" htmlFor="wd-file-upload">
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
              <label htmlFor="wd-due_date">Due</label>
              <div className="input-group">
                <input
                  type="date"
                  id="wd-due_date"
                  className="form-control"
                  value={
                    new Date(currentAssignment.due_date)
                      .toISOString()
                      .split("T")[0]
                  }
                  onChange={(e) => handleChange(e)}
                />
              </div>
            </div>
            <div className="row g-3">
              <div className="col-md-6">
                <label htmlFor="wd-available_date">Available From</label>
                <div className="input-group mb-4">
                  <input
                    type="date"
                    id="wd-available_date"
                    className="form-control"
                    value={
                      new Date(currentAssignment.available_date)
                        .toISOString()
                        .split("T")[0]
                    }
                    onChange={(e: any) => handleChange(e)}
                  />
                  {/* <span className="input-group-text">
            <FaCalendarAlt />
          </span> */}
                </div>
              </div>
              <div className="col-md-6">
                <label htmlFor="wd-available_until">Until</label>
                <div className="input-group mb-4">
                  <input
                    type="date"
                    id="wd-available_until"
                    className="form-control"
                    onChange={(e: any) => handleChange(e)}
                  />
                </div>
              </div>
            </div>
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
              onClick={() => saveAssignment(currentAssignment)}
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
    </div>
  );
}
