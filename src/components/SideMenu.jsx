import React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Logout } from "@mui/icons-material";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import useLogout from "../hooks/useLogout";
import { useNavigate } from "react-router";

export default function SideMenu() {
  const navigate = useNavigate();
  const logout = useLogout();
  const handleLogout = () => {
    logout();
  };
  return (
    <Box sx={{ width: 250 }} role="presentation">
      <Stack
        spacing={2}
        direction="row"
        sx={{ margin: "20px", alignItems: "center" }}
      >
        <Avatar alt="Nicolas" src="nada" />
        <p className="name-menu">Nicolas Ortiz</p>
      </Stack>

      <Divider />
      <List>
        <ListItem disablePadding>
          <ListItemButton
            onClick={() => {
              navigate("/financial");
            }}
          >
            <ListItemIcon>
              <AttachMoneyIcon />
            </ListItemIcon>
            <ListItemText primary={"Finanzas"} />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton onClick={handleLogout}>
            <ListItemIcon>
              <Logout />
            </ListItemIcon>
            <ListItemText primary={"Cerrar Sesión"} />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );
}
