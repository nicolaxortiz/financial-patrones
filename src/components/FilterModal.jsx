import React, { useContext } from "react";
import { useForm, Controller, set } from "react-hook-form";
import Modal from "@mui/material/Modal";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import { Box } from "@mui/material";
import { Stack } from "@mui/material";
import { Button } from "@mui/material";
import "../app.css";
import { UseContext } from "../hooks/UseContext";

export default function FilterModal({ handleClose, open }) {
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm();

  const { setFilterMoves, setFetchMoves, fetchMoves } = useContext(UseContext);

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

  const onSubmit = (data) => {
    setFilterMoves(data.filter);
    setFetchMoves(!fetchMoves);
    handleClose();
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

        <form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            render={({ field }) => (
              <RadioGroup aria-label="Filtro" {...field}>
                <FormControlLabel
                  value={"all"}
                  control={<Radio color="indigoDye" />}
                  label="Todos"
                />
                <FormControlLabel
                  value={"earnings"}
                  control={<Radio color="indigoDye" />}
                  label="Ganancias"
                />

                <FormControlLabel
                  value={"expenses"}
                  control={<Radio color="indigoDye" />}
                  label="Gastos"
                />
              </RadioGroup>
            )}
            name="filter"
            defaultValue="all"
            control={control}
          />

          <Stack
            direction="row"
            spacing={2}
            sx={{ justifyContent: "end", mt: "20px" }}
          >
            <Button
              variant="outlined"
              color="indigoDye"
              onClick={() => {
                handleClose();
                reset();
              }}
            >
              Cancelar
            </Button>
            <Button
              variant="contained"
              color="indigoDye"
              type="submit"
              sx={{ color: "#fff" }}
            >
              Guardar
            </Button>
          </Stack>
        </form>
      </Box>
    </Modal>
  );
}
