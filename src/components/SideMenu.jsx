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

export default function SideMenu({ toggleDrawer }) {
  return (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={() =>
        logout({ logoutParams: { returnTo: window.location.origin } })
      }
    >
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
          <ListItemButton>
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
