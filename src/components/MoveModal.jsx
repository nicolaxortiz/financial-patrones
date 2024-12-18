import React from "react";
import Modal from "@mui/material/Modal";
import { TextField } from "@mui/material";
import { Box } from "@mui/material";
import { Stack } from "@mui/material";
import { Button } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateField } from "@mui/x-date-pickers";
import MenuItem from "@mui/material/MenuItem";

import "../app.css";

export default function MoveModal({ handleClose, open }) {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    maxWidth: 400,
    minWidth: 250,
    bgcolor: "#F4F9E9",
    border: "2px solid #284b63",
    borderRadius: "5px",
    boxShadow: 24,
    p: 4,
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <p className="title-modal">Registro de un nuevo movimiento</p>

        <TextField
          id="filled-basic"
          label="Nombre del movimiento"
          variant="filled"
          color="indigoDye"
          fullWidth
          sx={{ mb: "30px" }}
        />

        <TextField
          id="filled-basic"
          label="Valor"
          variant="filled"
          color="indigoDye"
          fullWidth
          sx={{ mb: "30px" }}
        />

        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DateField
            label="Fecha"
            variant="filled"
            color="primary"
            fullWidth
            timezone="system"
            format="DD/MM/YYYY"
            sx={{ mb: "30px" }}
          />
        </LocalizationProvider>

        <TextField
          id="outlined-select-type"
          select
          label="Tipo"
          variant="filled"
          color="indigoDye"
          fullWidth
          sx={{ mb: "30px" }}
        >
          <MenuItem value={"Ganancia"}>Ganancia</MenuItem>
          <MenuItem value={"Gasto"}>Gasto</MenuItem>
        </TextField>

        <TextField
          id="outlined-select-account"
          select
          label="Cuenta"
          variant="filled"
          color="indigoDye"
          fullWidth
          sx={{ mb: "30px" }}
        >
          <MenuItem value={"Cuenta 1"}>Cuenta 1</MenuItem>
        </TextField>

        <Stack direction="row" spacing={2} sx={{ justifyContent: "end" }}>
          <Button variant="outlined" color="indigoDye" onClick={handleClose}>
            Cancelar
          </Button>
          <Button variant="contained" color="indigoDye" sx={{ color: "#fff" }}>
            Guardar
          </Button>
        </Stack>
      </Box>
    </Modal>
  );
}
