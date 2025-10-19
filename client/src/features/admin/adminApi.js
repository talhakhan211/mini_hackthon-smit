import { apiSlice } from "../api/apiSlice";

export const adminApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    listUsers: builder.query({ query: () => "/admin/users" }),
    createUser: builder.mutation({ query: (body) => ({ url: "/admin/users", method: "POST", body }) }),
    getReport: builder.query({ query: () => "/admin/report" }),
    listDepartments: builder.query({ query: () => "/departments" }),
    createDepartment: builder.mutation({ query: (body) => ({ url: "/departments", method: "POST", body }) }),
  }),
});
export const { useListUsersQuery, useCreateUserMutation, useGetReportQuery, useListDepartmentsQuery, useCreateDepartmentMutation } = adminApi;