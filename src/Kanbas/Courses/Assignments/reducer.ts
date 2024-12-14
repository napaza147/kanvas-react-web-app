import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  assignments: [],
};
const assignmentsSlice = createSlice({
  name: "assignments",
  initialState,
  reducers: {
    setAssignments: (state, action) => {
      state.assignments = action.payload;
    },
    addAssignment: (state, { payload: assignment }) => {
      // const newAssignment = {
      //   _id: assignment.id,
      //   title: assignment.title || '',
      //   course: assignment.course,
      //   availableFrom: assignment.availableFrom ? new Date(assignment.availableFrom).toLocaleString() :  '',
      //   due: assignment.due ?new Date(assignment.due).toLocaleString(): '',
      //   points: assignment.points || '',
      //   description: assignment.description || '',
      // };
      state.assignments = [...state.assignments, assignment] as any;
    },
    deleteAssignment: (state, { payload: assignmentId }) => {
      state.assignments = state.assignments.filter((a: any) => a._id !== assignmentId);
    },
    updateAssignment: (state, { payload: assignment }) => {
      state.assignments = state.assignments.map((m: any) =>
        m._id === assignment._id ? assignment : m
      ) as any;
    },
    editAssignment: (state, { payload: assignmentId }) => {
      state.assignments = state.assignments.map((m: any) =>
        m._id === assignmentId ? { ...m, editing: true } : m
      ) as any;
    },

  },
});

export const { addAssignment, deleteAssignment, updateAssignment, editAssignment, setAssignments } =
  assignmentsSlice.actions;

export default assignmentsSlice.reducer;
