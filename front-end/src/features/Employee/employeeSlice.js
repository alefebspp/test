import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  ids: []
};

export const employeeSlice = createSlice({
  name: 'employee',
  initialState,
  reducers: {
    removeEmployees: (state, action) => {
      ids.push(action.payload);
    }
  }
});

export default employeeSlice.reducer;

export const { removeEmployees } = employeeSlice.actions;
