import { createSlice } from "@reduxjs/toolkit";
import { assignments } from "../../Database";

const initialState = {
  assignments: assignments,
};

const assignmentSlice = createSlice({
  name: "assignment",
  initialState,
  reducers: {
    addAssignment: (state, action) => {
      state.assignments = [...state.assignments, action.payload];
    },

    updateAssignment: (state, action) => {
      state.assignments = state.assignments.map((a) =>
        a._id === action.payload._id ? action.payload : a
      );
    },

    deleteAssignment: (state, { payload: assignmentId }) => {
      state.assignments = state.assignments.filter(
        (assignment) => assignment._id !== assignmentId
      );
    },
  },
});

export const { addAssignment, updateAssignment, deleteAssignment } =
  assignmentSlice.actions;
export default assignmentSlice.reducer;
