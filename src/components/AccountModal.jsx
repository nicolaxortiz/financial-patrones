import React from "react";
import Modal from "@mui/material/Modal";
import { TextField } from "@mui/material";
import { Box } from "@mui/material";
import { Stack } from "@mui/material";
import { Button } from "@mui/material";
import "../app.css";

export default function AccountModal({ handleClose, open }) {
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
        <p className="title-modal">¿Cual es el nombre de la nueva cuenta?</p>

        <TextField
          id="filled-basic"
          label="Nombre de la cuenta"
          variant="filled"
          color="indigoDye"
          fullWidth
          sx={{ mb: "30px" }}
        />

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
