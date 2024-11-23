import { FC } from "react";
import Header from "../components/Header/Header";
import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";

const Layout: FC = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <Header />
      <Box component="main" sx={{ flexGrow: 1, padding: 3 }}>
        <Outlet />
      </Box>
    </Box>
  );
};

export default Layout;
