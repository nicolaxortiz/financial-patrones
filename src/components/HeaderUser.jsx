import React from "react";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import Drawer from "@mui/material/Drawer";
import SideMenu from "./SideMenu";

export default function HeaderUser({ user }) {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  return (
    <>
      <Tooltip title={`${user?.name} ${user.lastname}`} arrow>
        <IconButton
          onClick={toggleDrawer(true)}
          size="small"
          sx={{
            margin: "20px",
          }}
          aria-controls={open ? "account-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
        >
          <Avatar alt={user.name} src={user.name} />
        </IconButton>
      </Tooltip>

      <Drawer open={open} onClose={toggleDrawer(false)} anchor="right">
        <SideMenu />
      </Drawer>
    </>
  );
}
