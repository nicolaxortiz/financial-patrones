import React, { useContext } from "react";
import Modal from "@mui/material/Modal";
import { TextField } from "@mui/material";
import { Box } from "@mui/material";
import { Stack } from "@mui/material";
import { Button } from "@mui/material";
import { Alert } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { Collapse } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateField } from "@mui/x-date-pickers";
import MenuItem from "@mui/material/MenuItem";
import { useForm } from "react-hook-form";
import "../app.css";
import { UseContext } from "../hooks/useContext";
import { movesAPI } from "../API/moves";
import dateParser from "../functions/dateParser";
import dayjs from "dayjs";

export default function MoveModal({ handleClose, open, method }) {
  const {
    accounts,
    setFetchMoves,
    fetchMoves,
    setFetchAccounts,
    fetchAccounts,
    selectedMove,
    selectedAccount,
  } = useContext(UseContext);

  const [openAlert, setOpenAlert] = React.useState(false);
  const [alert, setAlert] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setAlert("");
    setOpenAlert(false);
    setLoading(true);

    const response =
      method === "create"
        ? await movesAPI.create(data)
        : await movesAPI.update(selectedMove.id, data);

    if (response.status === 200) {
      setFetchMoves(!fetchMoves);
      setFetchAccounts(!fetchAccounts);
      setTimeout(() => {
        setLoading(false);
        handleClose();
        reset();
      }, 2000);
    }

    if (response.status === 404) {
      setTimeout(() => {
        setAlert(response.message);
        setOpenAlert(true);
        setLoading(false);
        setLoadingAccounts(false);
      }, 2000);
    }

    if (response.status === 500) {
      setTimeout(() => {
        setAlert(response.message);
        setOpenAlert(true);
        setLoading(false);
        setLoadingAccounts(false);
      }, 2000);
    }
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box className="modal">
        <p className="title-modal">
          {method === "create"
            ? "Creación de un nuevo movimiento"
            : "Edición de un movimiento"}
        </p>

        <Collapse in={openAlert}>
          <Alert severity="error" sx={{ mb: "10px" }}>
            {alert}
          </Alert>
        </Collapse>

        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField
            id="outlined-select-account"
            select
            label="Cuenta"
            variant="filled"
            color="indigoDye"
            defaultValue={method === "update" ? selectedAccount.id : ""}
            fullWidth
            sx={errors.id_account ? { mb: "0px" } : { mb: "20px" }}
            {...register("id_account", {
              required: true,
            })}
          >
            {accounts.map((account) => (
              <MenuItem key={account.id} value={account.id}>
                {account.name}
              </MenuItem>
            ))}
          </TextField>
          {errors.id_account?.type === "required" && (
            <p className="input-information">
              * La cuenta del movimiento obligatorio
            </p>
          )}

          <TextField
            id="filled-basic"
            label="Nombre del movimiento"
            variant="filled"
            defaultValue={method === "update" ? selectedMove.name : ""}
            color="indigoDye"
            fullWidth
            sx={errors.name ? { mb: "0px" } : { mb: "20px" }}
            {...register("name", {
              required: true,
              pattern: /^[A-Za-zñÑ0-9áéíóúÁÉÍÓÚ ]+$/,
            })}
          />
          {errors.name?.type === "required" && (
            <p className="input-information">
              * El nombre del movimiento es obligatorio
            </p>
          )}
          {errors.name?.type === "pattern" && (
            <p className="input-information">
              * El nombre no puede caracteres especiales
            </p>
          )}

          <TextField
            id="filled-basic"
            label="Valor"
            type="number"
            variant="filled"
            color="indigoDye"
            defaultValue={method === "update" ? selectedMove.amount : ""}
            fullWidth
            sx={errors.amount ? { mb: "0px" } : { mb: "20px" }}
            {...register("amount", {
              required: true,
              pattern: /^\d+$/,
            })}
          />
          {errors.amount?.type === "required" && (
            <p className="input-information">
              * El valor del movimiento es obligatorio
            </p>
          )}
          {errors.amount?.type === "pattern" && (
            <p className="input-information">
              * El valor no puede contener letras
            </p>
          )}

          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateField
              id="filled-basic"
              label="Fecha"
              variant="filled"
              color="primary"
              defaultValue={
                method === "update" ? dayjs(selectedMove.date) : dayjs()
              }
              fullWidth
              timezone="system"
              format="DD/MM/YYYY"
              sx={errors.date ? { mb: "0px" } : { mb: "20px" }}
              {...register("date", {
                required: true,
              })}
            />
          </LocalizationProvider>
          {errors.date?.type === "required" && (
            <p className="input-information">
              * La fecha del movimiento es obligatoria
            </p>
          )}

          <TextField
            id="outlined-select-type"
            select
            label="Tipo"
            variant="filled"
            color="indigoDye"
            defaultValue={method === "update" ? selectedMove.type : ""}
            fullWidth
            sx={errors.type ? { mb: "0px" } : { mb: "20px" }}
            {...register("type", {
              required: true,
            })}
          >
            <MenuItem value={"Ganancia"}>Ganancia</MenuItem>
            <MenuItem value={"Gasto"}>Gasto</MenuItem>
          </TextField>
          {errors.type?.type === "required" && (
            <p className="input-information">
              * El tipo de movimiento es obligatorio
            </p>
          )}

          <Stack
            direction="row"
            spacing={2}
            sx={{ justifyContent: "end", mt: "10px" }}
          >
            <Button
              variant="outlined"
              color="indigoDye"
              disabled={loading}
              onClick={() => {
                handleClose();
                reset();
              }}
            >
              Cancelar
            </Button>
            <LoadingButton
              variant="contained"
              color="indigoDye"
              loading={loading}
              type="submit"
              sx={{ color: "#fff" }}
            >
              Guardar
            </LoadingButton>
          </Stack>
        </form>
      </Box>
    </Modal>
  );
}
