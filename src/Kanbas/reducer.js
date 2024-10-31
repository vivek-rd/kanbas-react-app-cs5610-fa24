import { createSlice } from "@reduxjs/toolkit";
import { enrollments } from "./Database";

const initialState = {
  enrollments: enrollments,
};
const enrollmentSlice = createSlice({
  name: "enrollment",
  initialState,
  reducers: {
    enroll: (state, action) => {
      state.enrollments = [
        ...state.enrollments,
        { _id: new Date().getTime().toString(), ...action.payload },
      ];
    },
    unenroll: (state, action) => {
      console.log(state.enrollments);
      state.enrollments = state.enrollments.filter(
        (enrollment) =>
          enrollment.user !== action.payload.user ||
          enrollment.course !== action.payload.course
      );
      console.log(state.enrollments);
    },
  },
});
export const { enroll, unenroll } = enrollmentSlice.actions;
export default enrollmentSlice.reducer;
