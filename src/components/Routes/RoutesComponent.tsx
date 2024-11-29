import { Route, Routes } from "react-router-dom";
import Layout from "../../layouts/Layout";
import { Main } from "../../pages/Main";
import Products from "../../pages/Products";
import Users from "../../pages/Users";
import Profile from "../../pages/Profile";
import User from "../../pages/User";
import Auth from "../../pages/Auth";
import ProtectedRoute from "./ProtectedRoute";

const RoutesComponent = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index path="/" element={<Main />} />
        <Route path="/auth" element={<Auth />}></Route>
        <Route
          path="/products"
          element={
            <ProtectedRoute>
              <Products />
            </ProtectedRoute>
          }
        />
        <Route path="/users" element={<Users />}>
          <Route path=":id" element={<User />}></Route>
        </Route>
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
      </Route>
    </Routes>
  );
};

export default RoutesComponent;
