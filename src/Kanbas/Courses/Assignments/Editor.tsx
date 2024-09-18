export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor">
      <label htmlFor="wd-name">
        <h3>Assignment Name</h3>
      </label>
      <input id="wd-name" value="A1 - ENV + HTML" />
      <br />
      <br />
      <textarea id="wd-description">
        The assignment is available online Submit a link to the landing page of
      </textarea>
      <br />
      <br />
      <table>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-points">Points</label>
          </td>
          <td>
            <input id="wd-points" value={100} />
          </td>
        </tr>
        <br />
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-group">Assignment Group</label>
          </td>
          <td>
            <select name="assignment-group" id="wd-group">
              <option value="ASSIGNMENTS">ASSIGNMENTS</option>
            </select>
          </td>
        </tr>
        <br />
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-display-grade-as">Display Grade as</label>
          </td>
          <td>
            <select name="display-grade-as" id="wd-display-grade-as">
              <option value="percentage">Percentage</option>
              <option value="letter-grade">Letter Grade</option>
            </select>
          </td>
        </tr>
        <br />
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-submission-type">Submission Type</label>
          </td>
          <td>
            <select name="submission-type" id="wd-submission-type">
              <option value="online">Online</option>
            </select>
            <br />
            <br />
            <label>Online Entry Options:</label>
            <br />
            <br />
            <input type="checkbox" name="text-entry" id="wd-text-entry" />
            <label htmlFor="wd-text-entry">Text Entry</label>
            <br />
            <input type="checkbox" name="website-url" id="wd-website-url" />
            <label htmlFor="wd-website-url">Website URL</label>
            <br />
            <input
              type="checkbox"
              name="media-recordings"
              id="wd-media-recordings"
            />
            <label htmlFor="wd-media-recordings">Media Recordings</label>
            <br />
            <input
              type="checkbox"
              name="student-annotation"
              id="wd-student-annotation"
            />
            <label htmlFor="wd-student-annotation">Student Annotations</label>
            <br />
            <input type="checkbox" name="file-upload" id="wd-file-upload" />
            <label htmlFor="wd-file-upload">File Upload</label>
          </td>
        </tr>
        <br />
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-assign-to">Assign</label>
          </td>
          <td>
            <label htmlFor="wd-assign-to">Assign to</label>
            <br />
            <input id="wd-assign-to" value={"Everyone"} />
            <br />
            <br />
            <label htmlFor="wd-due-date">Due</label>
            <br />
            <input type="date" id="wd-due-date" />
            <br />
            <br />
            <label htmlFor="wd-available-from">Available From</label>
            &nbsp;&nbsp;&nbsp;
            <label htmlFor="wd-available-until">Until</label>
            <br />
            <input type="date" id="wd-available-from" />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input type="date" id="wd-available-until" />
          </td>
        </tr>
        <br />
      </table>
      <hr />
      <input
        type="button"
        value="Save"
        id="wd-assignment-save"
        style={{ float: "right", marginLeft: "10px" }}
      ></input>
      &nbsp;&nbsp;
      <input
        type="button"
        value="Cancel"
        id="wd-assignment-cancel"
        style={{ float: "right", marginLeft: "10px" }}
      ></input>
    </div>
  );
}
