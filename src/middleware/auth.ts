import { createListenerMiddleware } from "@reduxjs/toolkit";
import { authApi } from "../services/api/authApi";

export const listenerMiddleware = createListenerMiddleware();

listenerMiddleware.startListening({
  matcher: authApi.endpoints.login.matchFulfilled,
  effect: async (action, listenerApi) => {
    listenerApi.cancelActiveListeners();

    if (action.payload) {
      // Сохранение accessToken в localStorage

      localStorage.setItem("token", action.payload.access_token);
    }
  },
});
