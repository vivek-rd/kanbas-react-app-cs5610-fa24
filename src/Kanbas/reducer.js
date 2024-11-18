import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  enrollments: [],
};
const enrollmentSlice = createSlice({
  name: "enrollment",
  initialState,
  reducers: {
    setEnrollments: (state, action) => {
      state.enrollments = action.payload;
    },
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
export const { enroll, unenroll, setEnrollments } = enrollmentSlice.actions;
export default enrollmentSlice.reducer;
