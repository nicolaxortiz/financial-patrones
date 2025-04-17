import React, { useContext, useState } from "react";
import Modal from "@mui/material/Modal";
import { useForm } from "react-hook-form";
import { Box, Stack, Button, Collapse, Alert, TextField } from "@mui/material";
import "../app.css";
import { accountsAPI } from "../API/accounts";
import { UseContext } from "../hooks/UseContext";
import MenuItem from "@mui/material/MenuItem";
import { LoadingButton } from "@mui/lab";

export default function AccountModal({
  handleClose,
  open,
  method,
  selectedAccount,
}) {
  const { user, setLoadingAccounts, setFetchAccounts, fetchAccounts } =
    useContext(UseContext);

  const [openAlert, setOpenAlert] = useState(false);
  const [alert, setAlert] = useState("");
  const [loading, setLoading] = useState(false);

  const accountTypes = [
    { id: 1, name: "Personal - ahorro" },
    { id: 2, name: "Personal - inversion" },
    { id: 3, name: "Empresarial - ahorro" },
    { id: 4, name: "Empresarial - inversion" },
  ];

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setLoadingAccounts(true);
    setOpenAlert(false);
    setAlert("");
    setLoading(true);

    const response =
      method === "create"
        ? await accountsAPI.create({
            name: data.name,
            id_user: user.id,
            id_account_type: data.id_account_type,
          })
        : await accountsAPI.update(selectedAccount.id, data);

    if (response.status === 200) {
      setFetchAccounts(!fetchAccounts);
      setTimeout(() => {
        setLoading(false);
        reset();
        handleClose();
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
            ? "Creación de una cuenta nueva"
            : "Edición de una cuenta"}
        </p>

        <Collapse in={openAlert}>
          <Alert severity="error" sx={{ mb: "10px" }}>
            {alert}
          </Alert>
        </Collapse>

        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField
            id="filled-basic"
            label="Nombre de la cuenta"
            defaultValue={method === "update" ? selectedAccount.name : ""}
            variant="filled"
            color="indigoDye"
            disabled={loading}
            fullWidth
            sx={errors.name ? { mb: "0px" } : { mb: "20px" }}
            {...register("name", {
              required: true,
              pattern: /^[A-Za-zñÑ0-9 áéíóúÁÉÍÓÚ]+$/,
            })}
          />

          {errors.name?.type === "required" && (
            <p className="input-information">
              * El nombre de la cuenta es obligatorio
            </p>
          )}
          {errors.name?.type === "pattern" && (
            <p className="input-information">
              * El nombre no puede contener caracteres especiales
            </p>
          )}

          <TextField
            id="outlined-select-account"
            select
            label="Tipo de cuenta"
            variant="filled"
            disabled={loading}
            color="indigoDye"
            defaultValue={
              method === "update" ? selectedAccount.id_account_type : ""
            }
            fullWidth
            sx={errors.id_account ? { mb: "0px" } : { mb: "20px" }}
            {...register("id_account_type", {
              required: true,
            })}
          >
            {accountTypes.map((account) => (
              <MenuItem key={account.id} value={account.id}>
                {account.name}
              </MenuItem>
            ))}
          </TextField>

          <Stack
            direction="row"
            spacing={2}
            sx={{ justifyContent: "end", mt: "30px" }}
          >
            <Button
              variant="outlined"
              disabled={loading}
              color="indigoDye"
              onClick={() => {
                handleClose();
                reset();
              }}
            >
              Cancelar
            </Button>
            <LoadingButton
              variant="contained"
              loading={loading}
              color="indigoDye"
              sx={{ color: "#fff" }}
              type="submit"
            >
              Guardar
            </LoadingButton>
          </Stack>
        </form>
      </Box>
    </Modal>
  );
}
