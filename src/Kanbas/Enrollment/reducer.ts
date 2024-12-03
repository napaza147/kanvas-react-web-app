import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    enrollments: [],
};

const enrollmentSlice = createSlice({
    name: "enrollment",
    initialState,
    reducers: {
        addEnrollment: (state, { payload: enrollment }) => {
            const newEnrollment: any = {
                _id: new Date().getTime().toString(),
                user: enrollment.user,
                course: enrollment.course

            };
            state.enrollments = [...state.enrollments, newEnrollment] as any;
            console.log(newEnrollment);
        },

        deleteEnrollment: (state, { payload: enrollmentId }) => {
            state.enrollments = state.enrollments.filter(
                (a: any) => a._id !== enrollmentId);
        },
        updateEnrollment: (state, { payload: enrollment }) => {
            state.enrollments = state.enrollments.map((a: any) =>
                a._id === enrollment._id ? enrollment : a
            ) as any;
        },
        editEnrollment: (state, { payload: enrollmentId }) => {
            state.enrollments = state.enrollments.map((m: any) =>
                m._id === enrollmentId ? { ...m, editing: true } : m
            ) as any;
        },

        setEnrollments: (state, action) => {
            state.enrollments = action.payload;
        },
    }
});

export const { addEnrollment, deleteEnrollment, updateEnrollment, editEnrollment , setEnrollments} =
  enrollmentSlice.actions;

export default enrollmentSlice.reducer;