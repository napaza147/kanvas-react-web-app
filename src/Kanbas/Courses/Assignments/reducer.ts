import { createSlice } from "@reduxjs/toolkit";
import { assignments } from "../../Database";
const initialState = {
  assignments: assignments,
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
    }
  },
});

export const { addAssignment, updateAssignment, deleteAssignment} 
    = assignmentsSlice.actions;
export default assignmentsSlice.reducer;
