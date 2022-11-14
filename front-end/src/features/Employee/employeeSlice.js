import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  ids: []
};

export const employeeSlice = createSlice({
  name: 'employee',
  initialState,
  reducers: {
    selectEmployee: (state, action) => {
      state.ids.push(action.payload);
    }
  }
});

export default employeeSlice.reducer;

export const { selectEmployee } = employeeSlice.actions;
