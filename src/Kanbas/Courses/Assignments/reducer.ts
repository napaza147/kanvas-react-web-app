import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  assignments: [],
};
const assignmentsSlice = createSlice({
  name: "assignments",
  initialState,
  reducers: {
    addAssignment: (state, { payload: assignment }) => {

      const newAssignment: any = {
        _id: assignment._id,
        title: assignment.title,
        course: assignment.course,
        points: assignment.points,
        available: assignment.available,
        due: assignment.due,
      };
      state.assignments = [...state.assignments, newAssignment] as any;
    },

    updateAssignment: (state, { payload: assignment }) => {
    
      state.assignments = state.assignments.map((a: any) =>
          a._id === assignment._id ? assignment : a
      ) as any;
    },

    deleteAssignment: (state, { payload: assignmentId }) => {
              
      state.assignments = state.assignments.filter(
          (a: any) => a._id !== assignmentId);
    },

    editAssignment: (state, { payload: assignmentId }) => {
        state.assignments = state.assignments.map((m: any) =>
            m._id === assignmentId ? { ...m, editing: true } : m
        ) as any;
    },
    setAssignments: (state, action) => {
      state.assignments = action.payload;
  },
  },
});

export const { addAssignment, deleteAssignment, updateAssignment, editAssignment, setAssignments } =
    assignmentsSlice.actions;
export default assignmentsSlice.reducer;
