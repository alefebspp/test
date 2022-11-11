import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3333' }),
  endpoints: builder => ({
    getEmployees: builder.query({
      query: () => '/employee/all'
    })
  })
});

export const { useGetEmployeesQuery } = apiSlice;
