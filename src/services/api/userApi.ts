import { api } from "./api";

export const userApi = api.injectEndpoints({
  endpoints: (build) => ({
    register: build.mutation({
      query: (body) => ({
        url: "/users/",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useRegisterMutation } = userApi;

export const {
  endpoints: { register },
} = userApi;
