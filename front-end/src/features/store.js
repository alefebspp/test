import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from './api/apiSlice';
import employeeReducer from './Employee/employeeSlice';
export const store = configureStore({
  reducer: {
    employee: employeeReducer,
    [apiSlice.reducerPath]: apiSlice.reducer
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(apiSlice.middleware)
});
