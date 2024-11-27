import {
  AppBar,
  Box,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import { FC, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import AuthModal from "../AuthModal/AuthModal";
import Sidebar from "../Sidebar/Sidebar";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { useAppDispatch } from "../../store/hooks";
import { logout } from "../../features/authSlice";
const Header: FC = () => {
  const [open, setOpen] = useState<boolean>(false); // Состояние для модала
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false); // Состояние для сайдбара
  const { isLoggedIn } = useSelector((state: RootState) => state.user);
  const dispatch = useAppDispatch();
  const handleCloseAuthModal = () => {
    setOpen(false);
  };
  const handleOpenAuthModal = () => {
    setOpen(true);
  };
  const handleLogout = () => {
    dispatch(logout());
  };
  // Функция для открытия/закрытия сайдбара
  const toggleSidebar = () => {
    setSidebarOpen((prev) => !prev);
  };
  const handleCloseSidebar = () => {
    setSidebarOpen(false);
  };
  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            onClick={toggleSidebar}
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            PET-APP
          </Typography>
          <Button
            color="inherit"
            sx={{ fontSize: "1.2rem" }}
            onClick={isLoggedIn ? handleLogout : handleOpenAuthModal}
          >
            {isLoggedIn ? "Logout" : "Login"}
          </Button>
        </Toolbar>
      </AppBar>
      <AuthModal open={open} closeModal={handleCloseAuthModal} />
      {/* Сайдбар */}
      <Sidebar open={sidebarOpen} closeModal={handleCloseSidebar} />
    </Box>
  );
};

export default Header;
