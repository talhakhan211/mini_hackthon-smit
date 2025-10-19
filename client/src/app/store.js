import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "../features/auth/authApi";
import { apiSlice } from "../features/api/apiSlice";

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware, apiSlice.middleware),
});