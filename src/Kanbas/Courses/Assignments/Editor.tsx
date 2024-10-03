// export default function AssignmentEditor() {
//   return (
//     <div id="wd-assignments-editor">
//       <label htmlFor="wd-name">
//         <h3>Assignment Name</h3>
//       </label>
//       <input id="wd-name" value="A1 - ENV + HTML" />
//       <br />
//       <br />
//       <textarea id="wd-description">
//         The assignment is available online Submit a link to the landing page of
//       </textarea>
//       <br />
//       <br />
//       <table>
//         <tr>
//           <td align="right" valign="top">
//             <label htmlFor="wd-points">Points</label>
//           </td>
//           <td>
//             <input id="wd-points" value={100} />
//           </td>
//         </tr>
//         <br />
//         <tr>
//           <td align="right" valign="top">
//             <label htmlFor="wd-group">Assignment Group</label>
//           </td>
//           <td>
//             <select name="assignment-group" id="wd-group">
//               <option value="ASSIGNMENTS">ASSIGNMENTS</option>
//             </select>
//           </td>
//         </tr>
//         <br />
//         <tr>
//           <td align="right" valign="top">
//             <label htmlFor="wd-display-grade-as">Display Grade as</label>
//           </td>
//           <td>
//             <select name="display-grade-as" id="wd-display-grade-as">
//               <option value="percentage">Percentage</option>
//               <option value="letter-grade">Letter Grade</option>
//             </select>
//           </td>
//         </tr>
//         <br />
//         <tr>
//           <td align="right" valign="top">
//             <label htmlFor="wd-submission-type">Submission Type</label>
//           </td>
//           <td>
//             <select name="submission-type" id="wd-submission-type">
//               <option value="online">Online</option>
//             </select>
//             <br />
//             <br />
//             <label>Online Entry Options:</label>
//             <br />
//             <br />
//             <input type="checkbox" name="text-entry" id="wd-text-entry" />
//             <label htmlFor="wd-text-entry">Text Entry</label>
//             <br />
//             <input type="checkbox" name="website-url" id="wd-website-url" />
//             <label htmlFor="wd-website-url">Website URL</label>
//             <br />
//             <input
//               type="checkbox"
//               name="media-recordings"
//               id="wd-media-recordings"
//             />
//             <label htmlFor="wd-media-recordings">Media Recordings</label>
//             <br />
//             <input
//               type="checkbox"
//               name="student-annotation"
//               id="wd-student-annotation"
//             />
//             <label htmlFor="wd-student-annotation">Student Annotations</label>
//             <br />
//             <input type="checkbox" name="file-upload" id="wd-file-upload" />
//             <label htmlFor="wd-file-upload">File Upload</label>
//           </td>
//         </tr>
//         <br />
//         <tr>
//           <td align="right" valign="top">
//             <label htmlFor="wd-assign-to">Assign</label>
//           </td>
//           <td>
//             <label htmlFor="wd-assign-to">Assign to</label>
//             <br />
//             <input id="wd-assign-to" value={"Everyone"} />
//             <br />
//             <br />
//             <label htmlFor="wd-due-date">Due</label>
//             <br />
//             <input type="date" id="wd-due-date" />
//             <br />
//             <br />
//             <label htmlFor="wd-available-from">Available From</label>
//             &nbsp;&nbsp;&nbsp;
//             <label htmlFor="wd-available-until">Until</label>
//             <br />
//             <input type="date" id="wd-available-from" />
//             &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//             <input type="date" id="wd-available-until" />
//           </td>
//         </tr>
//         <br />
//       </table>
//       <hr />
//       <input
//         type="button"
//         value="Save"
//         id="wd-assignment-save"
//         style={{ float: "right", marginLeft: "10px" }}
//       ></input>
//       &nbsp;&nbsp;
//       <input
//         type="button"
//         value="Cancel"
//         id="wd-assignment-cancel"
//         style={{ float: "right", marginLeft: "10px" }}
//       ></input>
//     </div>
//   );
// }

import { FaCalendarAlt } from "react-icons/fa";
import DateInputs from "./DateInputs";

export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor">
      <div className="mb-3">
        <label htmlFor="wd-name" className="form-label">
          <h3>Assignment Name</h3>
        </label>
        <input id="wd-name" value="A1 - ENV + HTML" className="form-control" />
      </div>

      <div className="mb-3">
        <label htmlFor="wd-description" className="form-label">
          Description
        </label>
        <textarea id="wd-description" className="form-control">
          The assignment is available online Submit a link to the landing page
          of
        </textarea>
      </div>

      <div className="row g-3">
        <div className="col-md-2 text-end">
          <label htmlFor="wd-points" className="col-form-label">
            Points
          </label>
        </div>
        <div className="col-md-10">
          <input id="wd-points" value={100} className="form-control" />
        </div>

        <div className="col-md-2 text-end">
          <label htmlFor="wd-group" className="col-form-label">
            Assignment Group
          </label>
        </div>
        <div className="col-md-10">
          <select name="assignment-group" id="wd-group" className="form-select">
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
            <label className="form-check-label" htmlFor="wd-student-annotation">
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
            <label htmlFor="wd-due-date">Due</label>
            <div className="input-group">
              <input type="date" id="wd-due-date" className="form-control" />
              {/* <span className="input-group-text">
                <FaCalendarAlt />
              </span> */}
            </div>
          </div>

          <DateInputs></DateInputs>
        </div>
      </div>

      <hr />

      <div className="d-flex justify-content-end mb-3">
        <input
          type="button"
          value="Save"
          id="wd-assignment-save"
          className="btn btn-primary text-white bg-danger border-0 me-2"
        />
        <input
          type="button"
          value="Cancel"
          id="wd-assignment-cancel"
          className="btn btn-secondary"
        />
      </div>
    </div>
  );
}
