import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { authApi } from "../services/api/authApi";

interface UserProfile {
  id: number;
  email: string;
  password: string;
  name: string;
  role: string;
  avatar: string;
}

interface UserState {
  accessToken: string | null;
  refreshToken: string | null;
  isLoggedIn: boolean;
  profile: UserProfile | null;
}

const initialState: UserState = {
  accessToken: null,
  refreshToken: null,
  isLoggedIn: false,
  profile: null,
};
interface UserLoginResponse {
  access_token: string;
  refresh_token: string;
}
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout: (state) => {
      state.accessToken = null;
      state.refreshToken = null;
      state.isLoggedIn = false;
      state.profile = null;
      localStorage.removeItem("token");
    },
    setProfile: (state, action: PayloadAction<UserProfile>) => {
      state.profile = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      authApi.endpoints.login.matchFulfilled,
      (state, action: PayloadAction<UserLoginResponse>) => {
        state.accessToken = action.payload.access_token;
        state.refreshToken = action.payload.refresh_token;
        state.isLoggedIn = true;
      }
    );
  },
});

export const { logout, setProfile } = userSlice.actions;

export default userSlice.reducer;
