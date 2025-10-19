import { apiSlice } from "../api/apiSlice.js";

export const userApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => "/users", // GET http://localhost:5000/api/users
    }),
  }),
});

export const { useGetUsersQuery } = userApi;
