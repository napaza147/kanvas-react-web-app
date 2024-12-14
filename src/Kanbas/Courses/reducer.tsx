import { createSlice } from "@reduxjs/toolkit";
import { enrollments } from "../Database";
const initialState = {
  enrollments: enrollments,
};

const enrollmentsSlice = createSlice({
  name: "enrollments",
  initialState,
  reducers: {
    addEnrollment: (state, { payload: enrollment }) => {
      const newEnrollment = {
        _id: enrollment.id,
        user: enrollment.user,
        course: enrollment.course
      };
      state.enrollments = [...state.enrollments, newEnrollment] as any;
    },
    deleteEnrollment: (state, { payload: enrollmentId }) => {
      state.enrollments = state.enrollments.filter((a: any) => a._id !== enrollmentId);
    },
    updateEnrollment: (state, { payload: enrollment }) => {
      state.enrollments = state.enrollments.map((a) =>
        a._id === enrollment._id ? { ...a, ...enrollment } : a
      );
    },
    editEnrollment: (state, { payload: enrollmentId }) => {
      state.enrollments = state.enrollments.map((a) =>
        a._id === enrollmentId ? { ...a, editing: true } : a
      );
    },
  },
});

export const { addEnrollment, deleteEnrollment, updateEnrollment, editEnrollment } =
  enrollmentsSlice.actions;

export default enrollmentsSlice.reducer;
