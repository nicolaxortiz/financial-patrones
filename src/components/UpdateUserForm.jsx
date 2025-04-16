import React, { useState, useContext } from "react";
import { useForm } from "react-hook-form";
import Grid from "@mui/material/Grid2";
import { TextField } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateField } from "@mui/x-date-pickers";
import { useNavigate } from "react-router";
import { Alert } from "@mui/material";
import { Collapse } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import "../layout/styles/main-styles.css";
import { UseContext } from "../hooks/useContext";
import { usersAPI } from "../API/users";

export default function UpdateUserForm() {
  const navigate = useNavigate();
  const { user, setUser } = useContext(UseContext);

  const [open, setOpen] = useState(false);
  const [alertSeverety, setAlertSeverety] = useState("");
  const [alert, setAlert] = useState("");
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setLoading(true);
    setOpen(false);
    setAlert("");
    setAlertSeverety("");

    data.id = user?.id;

    const response = await usersAPI.update(data);

    if (response.status === 404 || response.status === 500) {
      setTimeout(() => {
        setAlertSeverety("error");
        setAlert(response.message);
        setOpen(true);
        setLoading(false);
      }, 3000);
    }

    if (response.status === 200) {
      setAlertSeverety("success");
      setAlert("User updated successfully, please try to login");
      setOpen(true);

      setTimeout(() => {
        setLoading(false);
        localStorage.clear("user");
        setUser(null);
        navigate("/login");
      }, 3000);
    }
  };

  return (
    <div className="update-form">
      <p className="title-form">Actualización de datos</p>

      <Collapse in={open}>
        <Alert severity={alertSeverety} sx={{ mb: "10px" }}>
          {alert}
        </Alert>
      </Collapse>

      <form onSubmit={handleSubmit(onSubmit)}>
        {user && (
          <Grid container spacing={2}>
            <Grid size={{ xs: 12, md: 6 }}>
              <TextField
                id="filled-basic"
                label="Nombre"
                defaultValue={user?.name}
                variant="filled"
                fullWidth
                color="indigoDye"
                {...register("name", {
                  required: true,
                  pattern: /^[A-Za-zñÑáéíóúÁÉÍÓÚ ]+$/,
                })}
              />

              {errors.name?.type === "required" && (
                <p className="input-information">* El nombre es obligatorio</p>
              )}
              {errors.name?.type === "pattern" && (
                <p className="input-information">
                  * El nombre no puede contener números o caracteres especiales
                </p>
              )}
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <TextField
                id="filled-basic"
                label="Apellido"
                defaultValue={user?.lastname}
                variant="filled"
                fullWidth
                color="indigoDye"
                {...register("lastname", {
                  required: true,
                  pattern: /^[A-Za-zñÑáéíóúÁÉÍÓÚ ]+$/,
                })}
              />
              {errors.lastname?.type === "required" && (
                <p className="input-information">
                  * El apellido es obligatorio
                </p>
              )}
              {errors.lastname?.type === "pattern" && (
                <p className="input-information">
                  * El apellido no puede contener números o caracteres
                  especiales
                </p>
              )}
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <TextField
                id="filled-basic"
                label="Documento"
                defaultValue={user?.document}
                variant="filled"
                type="number"
                fullWidth
                color="indigoDye"
                {...register("document", {
                  required: true,
                  pattern: /^\d+$/,
                })}
              />
              {errors.document?.type === "required" && (
                <p className="input-information">
                  * El documento es obligatorio
                </p>
              )}
              {errors.document?.type === "pattern" && (
                <p className="input-information">
                  * El documento no puede contener letras
                </p>
              )}
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <TextField
                id="filled-basic"
                label="Celular"
                defaultValue={user?.phone}
                variant="filled"
                type="number"
                fullWidth
                color="indigoDye"
                {...register("phone", {
                  required: true,
                  pattern: /^\d+$/,
                })}
              />
              {errors.phone?.type === "required" && (
                <p className="input-information">
                  * El numero de celular es obligatorio
                </p>
              )}
              {errors.phone?.type === "pattern" && (
                <p className="input-information">
                  * El numero de celular no puede contener letras
                </p>
              )}
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <TextField
                id="filled-basic"
                label="Email"
                defaultValue={user?.email}
                variant="filled"
                fullWidth
                color="indigoDye"
                {...register("email", {
                  required: true,
                  pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
                })}
              />
              {errors.email?.type === "required" && (
                <p className="input-information">
                  * El correo electrónico es obligatorio
                </p>
              )}
              {errors.email?.type === "pattern" && (
                <p className="input-information">
                  * El texto ingresado no es un correo electrónico
                </p>
              )}
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <TextField
                id="filled-basic"
                label="Dirección"
                defaultValue={user?.address}
                variant="filled"
                fullWidth
                color="indigoDye"
                {...register("address", {
                  required: true,
                })}
              />
              {errors.address?.type === "required" && (
                <p className="input-information">
                  * La dirección es obligatoria
                </p>
              )}
            </Grid>{" "}
            <LoadingButton
              variant="contained"
              type="submit"
              color="prussianBlue"
              loading={loading}
              fullWidth
              sx={{ color: "#fff", mt: "20px", mb: "10px" }}
            >
              Registrar datos
            </LoadingButton>
          </Grid>
        )}
      </form>
    </div>
  );
}
