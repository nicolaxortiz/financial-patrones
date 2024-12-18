import React from "react";
import Modal from "@mui/material/Modal";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import { Box } from "@mui/material";
import { Stack } from "@mui/material";
import { Button } from "@mui/material";
import "../app.css";

export default function FilterModal({ handleClose, open }) {
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
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <p className="title-modal">Filtro de búsqueda para movimientos</p>

        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="Todos"
          name="radio-buttons-group"
          sx={{ mb: "30px" }}
        >
          <FormControlLabel
            value="Todos"
            control={<Radio color="indigoDye" />}
            label="Todos"
          />
          <FormControlLabel
            value="Ganancias"
            control={<Radio color="indigoDye" />}
            label="Ganancias"
          />
          <FormControlLabel
            value="Gastos"
            control={<Radio color="indigoDye" />}
            label="Gastos"
          />
        </RadioGroup>

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
