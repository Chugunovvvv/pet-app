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
const Header: FC = () => {
  const [open, setOpen] = useState(false); // Состояние для модала
  const [sidebarOpen, setSidebarOpen] = useState(false); // Состояние для сайдбара

  // Функция для открытия/закрытия сайдбара
  const toggleSidebar = () => {
    setSidebarOpen((prev) => !prev);
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
            onClick={() => setOpen(true)}
          >
            Login
          </Button>
        </Toolbar>
      </AppBar>
      <AuthModal open={open} setOpen={setOpen} />
      {/* Сайдбар */}
      <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />
    </Box>
  );
};

export default Header;
