import { LoadingButton } from "@mui/lab";
import { useState } from "react";
import { useForm } from "react-hook-form";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { useNavigate } from "react-router";
import { Alert } from "@mui/material";
import { Collapse } from "@mui/material";
import { usersAPI } from "../API/users";

export default function RegisterForm() {
  const navigate = useNavigate();

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

    const response = await usersAPI.create(data);

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
      setAlert("User created successfully, please try to login");
      setOpen(true);

      setTimeout(() => {
        setLoading(false);
        navigate("/login");
      }, 3000);
    }
  };

  return (
    <div className="login-box">
      <div
        className="back-form"
        onClick={() => {
          navigate("/");
        }}
      >
        <KeyboardBackspaceIcon sx={{ fontSize: "15px" }} />
        Regresar
      </div>

      <p className="title-form">Creación de cuenta</p>

      <Collapse in={open}>
        <Alert severity={alertSeverety} sx={{ mb: "10px" }}>
          {alert}
        </Alert>
      </Collapse>

      <form onSubmit={handleSubmit(onSubmit)}>
        <p className="label-form">Nombres</p>
        <input
          type="text"
          className={errors.name ? "input-form-wm" : "input-form"}
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

        <p className="label-form">Apellidos</p>
        <input
          type="text"
          className={errors.lastname ? "input-form-wm" : "input-form"}
          {...register("lastname", {
            required: true,
            pattern: /^[A-Za-zñÑáéíóúÁÉÍÓÚ ]+$/,
          })}
        />
        {errors.lastname?.type === "required" && (
          <p className="input-information">* El apellido es obligatorio</p>
        )}
        {errors.lastname?.type === "pattern" && (
          <p className="input-information">
            * El apellido no puede contener números o caracteres especiales
          </p>
        )}

        <p className="label-form">Documento</p>
        <input
          type="number"
          className={errors.document ? "input-form-wm" : "input-form"}
          {...register("document", {
            required: true,
            pattern: /^\d+$/,
          })}
        />
        {errors.document?.type === "required" && (
          <p className="input-information">* El documento es obligatorio</p>
        )}
        {errors.document?.type === "pattern" && (
          <p className="input-information">
            * El documento no puede contener letras
          </p>
        )}

        <p className="label-form">Fecha de nacimiento</p>
        <input
          type="date"
          className={errors.birth_date ? "input-form-wm" : "input-form"}
          {...register("birth_date", {
            required: true,
          })}
        />
        {errors.birth_date?.type === "required" && (
          <p className="input-information">
            * La fecha de nacimiento es obligatoria
          </p>
        )}

        {/* <p className="label-form">Celular</p>
        <input
          type="number"
          className={errors.phone ? "input-form-wm" : "input-form"}
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
        )} */}

        <p className="label-form">Email</p>
        <input
          type="text"
          className={errors.email ? "input-form-wm" : "input-form"}
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

        <p className="label-form">Contraseña</p>
        <input
          type="password"
          className={errors.password ? "input-form-wm" : "input-form"}
          {...register("password", {
            required: true,
            pattern: /^(?=.*[A-ZáéíóúÁÉÍÓÚ])(?=.*\d).{9,}$/,
          })}
        />
        {errors.password?.type === "required" && (
          <p className="input-information">* La contraseña es obligatoria</p>
        )}
        {errors.password?.type === "pattern" && (
          <p className="input-information">
            * La contraseña debe tener mas de 8 caracteres, un numero y una
            mayúscula
          </p>
        )}

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
      </form>
    </div>
  );
}
