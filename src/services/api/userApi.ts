import { User } from "../../types/types";
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
    getUsers: build.query<User[], void>({
      query: () => ({
        url: "/users",
        method: "GET",
      }),
    }),
  }),
});

export const { useRegisterMutation, useGetUsersQuery } = userApi;

export const {
  endpoints: { register, getUsers },
} = userApi;
