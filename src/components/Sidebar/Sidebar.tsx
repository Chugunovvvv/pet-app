import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Toolbar,
} from "@mui/material";
import { FC } from "react";
import { menu_links } from "../../utils/menu_links";
import { Link } from "react-router-dom";

interface SidebarProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Sidebar: FC<SidebarProps> = ({ open, setOpen }) => {
  const drawerWidth = 340;
  return (
    <Drawer
      ModalProps={{
        keepMounted: false,
      }}
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
        },
      }}
      variant="temporary"
      anchor="left"
      open={open}
      onClose={() => setOpen(false)}
    >
      <Toolbar />

      <Box sx={{ overflow: "auto" }}>
        <List>
          {menu_links.map((link) => (
            <ListItem
              key={link.id}
              component="button"
              onClick={() => setOpen(false)}
              sx={{
                backgroundColor: "transparent",

                "&:hover": {
                  backgroundColor: "#e8e8e8",
                },
              }}
            >
              <Link to={link.href}>
                <ListItemText sx={{ color: "#1976d2" }}>
                  {link.title}
                </ListItemText>
              </Link>
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
};

export default Sidebar;
