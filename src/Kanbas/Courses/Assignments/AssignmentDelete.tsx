import React from "react";
import { useDispatch } from "react-redux";
import { deleteAssignment } from "./reducer";
import * as assignmentClient from "./client";

function AssignmentDelete({ assignmentId }: { assignmentId: any }) {
  const dispatch = useDispatch();
  const removeAssignment = async (assignmentId: string) => {
    await assignmentClient.deleteAssignment(assignmentId);
    dispatch(deleteAssignment(assignmentId));
  };

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
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Cancel{" "}
            </button>
            <button
              onClick={() => removeAssignment(assignmentId)}
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
