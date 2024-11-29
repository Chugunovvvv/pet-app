// ProtectedRoute.tsx
import React from "react";

import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { accessToken, isLoggedIn } = useSelector(
    (state: RootState) => state.user
  );

  const token = localStorage.getItem("token") || accessToken;
  if (!isLoggedIn && !token) {
    // Если не авторизован, перенаправляем на страницу логина
    return <Navigate to="/auth" replace />;
  }

  return children || <Outlet />;
};

export default ProtectedRoute;
