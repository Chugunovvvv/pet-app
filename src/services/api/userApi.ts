import { api } from "./api";

interface UserRegisterRequest {
  email: string;
  name: string;
  password: string;
  role: string;
  avatar: string;
}

export const userApi = api.injectEndpoints({
  endpoints: (build) => ({
    register: build.mutation<void, UserRegisterRequest>({
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
