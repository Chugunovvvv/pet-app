import { api } from "./api";

interface UserLoginRequest {
  email: string;
  password: string;
}
interface UserLoginResponse {
  access_token: string;
  refresh_token: string;
}
interface UserCurrentProfile {
  id: number;
  email: string;
  password: string;
  name: string;
  role: string;
  avatar: string;
}

export const authApi = api.injectEndpoints({
  endpoints: (build) => ({
    login: build.mutation<UserLoginResponse, UserLoginRequest>({
      query: (userData) => ({
        url: "/auth/login",
        method: "POST",
        body: userData,
      }),
    }),
    getCurrentProfile: build.query<UserCurrentProfile, void>({
      query: () => ({
        url: "/auth/profile",
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }),
    }),
  }),
});

export const { useLoginMutation, useGetCurrentProfileQuery } = authApi;

export const {
  endpoints: { login, getCurrentProfile },
} = authApi;
