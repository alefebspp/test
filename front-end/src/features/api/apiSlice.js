import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3333' }),
  endpoints: builder => ({
    getEmployees: builder.query({
      query: () => '/employee/all',
      providesTags: ['Employees']
    }),
    postEmployee: builder.mutation({
      query: employee => ({
        method: 'POST',
        url: '/employee/create',
        body: employee
      }),
      invalidatesTags: ['Employees']
    }),
    deleteEmployee: builder.mutation({
      query: ({ _id }) => ({
        method: 'DELETE',
        url: `/employee/delete/${_id}`
      }),
      invalidatesTags: ['Employees']
    })
  })
});

export const {
  useGetEmployeesQuery,
  usePostEmployeeMutation,
  useDeleteEmployeeMutation
} = apiSlice;
