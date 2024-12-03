import { User } from "../../types/types";
import { api } from "./api";

export interface UserRegisterRequest {
  email: string;
  name: string;
  password: string;
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
    getUser: build.query<User, string>({
      query: (id) => ({
        url: `/users/${id}`,
        method: "GET",
      }),
    }),
    updateUser: build.mutation<User, { id: number; body: Partial<User> }>({
      query: ({ id, body }) => ({
        url: `/users/${id}`,
        method: "PUT",
        body,
      }),
    }),
  }),
});

export const {
  useRegisterMutation,
  useGetUsersQuery,
  useGetUserQuery,
  useUpdateUserMutation,
} = userApi;

export const {
  endpoints: { register, getUsers, getUser, updateUser },
} = userApi;
