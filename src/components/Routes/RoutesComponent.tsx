import { Route, Routes } from "react-router-dom";
import Layout from "../../layouts/Layout";
import { Main } from "../../pages/Main";
import Products from "../../pages/Products";
import Users from "../../pages/Users";
import Profile from "../../pages/Profile";

const RoutesComponent = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index path="/" element={<Main />} />
        <Route path="/products" element={<Products />} />
        <Route path="/users" element={<Users />} />
        <Route path="/profile" element={<Profile />} />
      </Route>
    </Routes>
  );
};

export default RoutesComponent;
