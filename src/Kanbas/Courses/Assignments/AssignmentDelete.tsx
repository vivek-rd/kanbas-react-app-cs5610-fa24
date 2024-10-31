import React from "react";
import { deleteAssignment } from "./reducer";
import { useDispatch } from "react-redux";

function AssignmentDelete({ assignmentId }: { assignmentId: any }) {
  const dispatch = useDispatch();

  return (
    <div
      id="wd-delete-assignment-dialog"
      className="modal fade"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1
              className="modal-title fs-5"
              id="delete-assignment-staticBackdropLabel"
            >
              Are you sure about deleting the assignment?
            </h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
            ></button>
          </div>
          {/* <div className="modal-body">
        <input
          className="form-control"
          value={moduleName}
          placeholder="Module Name"
          onChange={(e) => setModuleName(e.target.value)}
        />
      </div> */}
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Cancel{" "}
            </button>
            <button
              onClick={() => dispatch(deleteAssignment(assignmentId))}
              type="button"
              data-bs-dismiss="modal"
              className="btn btn-danger"
            >
              Yes{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AssignmentDelete;
