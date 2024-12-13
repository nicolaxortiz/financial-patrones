import React from "react";
import { Button, Stack } from "@mui/material";
import { Pagination } from "@mui/material";
import AccountModal from "./AccountModal";
import { TextField } from "@mui/material";

export default function Accounts() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="accounts-box">
      <p className="accounts-title">Mis cuentas</p>

      <Button
        variant="contained"
        color="indigoDye"
        sx={{ width: "70%", color: "#fff", mb: "40px" }}
        onClick={handleOpen}
      >
        Agregar nueva cuenta
      </Button>

      <AccountModal handleClose={handleClose} open={open} />

      <TextField
        id="filled-basic"
        label="Buscar cuenta"
        variant="filled"
        color="prussianBlue"
        sx={{ width: "70%" }}
      />
      <div className="account-list">
        <p className="account-name">Nombre cuenta</p>
        <p className="account-mount">Dinero cuenta</p>
      </div>
      <div className="account-list">
        <p className="account-name">Nombre cuenta</p>
        <p className="account-mount">Dinero cuenta</p>
      </div>
      <div className="account-list">
        <p className="account-name">Nombre cuenta</p>
        <p className="account-mount">Dinero cuenta</p>
      </div>
      <div className="account-list">
        <p className="account-name">Nombre cuenta</p>
        <p className="account-mount">Dinero cuenta</p>
      </div>
      <div className="account-list">
        <p className="account-name">Nombre cuenta</p>
        <p className="account-mount">Dinero cuenta</p>
      </div>

      <Pagination
        count={4}
        color="prussianBlue"
        size="small"
        sx={{ mt: "20px" }}
      />
    </div>
  );
}
