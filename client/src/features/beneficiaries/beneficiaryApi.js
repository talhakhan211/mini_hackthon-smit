import { apiSlice } from "../api/apiSlice";

export const beneficiaryApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    registerBeneficiary: builder.mutation({
      query: (data) => ({ url: "/reception", method: "POST", body: data }),
    }),
    getByToken: builder.query({
      query: (token) => ({ url: `/staff/${token}`, method: "GET" }),
    }),
    updateStatus: builder.mutation({
      query: ({ token, ...patch }) => ({ url: `/staff/${token}`, method: "PATCH", body: patch }),
    }),
    searchByCNICorToken: builder.query({
      query: ({ cnic, token }) => ({ url: `/beneficiaries?${cnic ? `cnic=${cnic}` : `token=${token}`}` }),
    }),
    listToday: builder.query({
      query: () => ({ url: `/reception/today` }), // optional endpoint if you implement
    }),
  }),
  overrideExisting: false,
});

export const {
  useRegisterBeneficiaryMutation,
  useGetByTokenQuery,
  useUpdateStatusMutation,
  useSearchByCNICorTokenQuery,
  useListTodayQuery
} = beneficiaryApi;