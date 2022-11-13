import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3333' }),
  endpoints: builder => ({
    getEmployees: builder.query({
      query: () => '/employee/all'
    }),
    postEmployee: builder.mutation({
      query: employee => ({
        method: 'POST',
        url: '/employee/create',
        body: employee
      })
    })
  })
});

export const { useGetEmployeesQuery, usePostEmployeeMutation } = apiSlice;
