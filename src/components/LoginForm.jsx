import { LoadingButton } from "@mui/lab";
import { useForm } from "react-hook-form";
import { useState } from "react";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { Alert } from "@mui/material";
import { Collapse } from "@mui/material";
import { useNavigate } from "react-router";
import { usersAPI } from "../API/users";
import useLogin from "../hooks/useLogin";

export default function LoginForm() {
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);
  const [alert, setAlert] = useState("");
  const [loading, setLoading] = useState(false);
  const login = useLogin();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setLoading(true);
    setOpen(false);
    setAlert("");
    const response = await usersAPI.getbyEmailandPassword(data);

    if (response.status === 404 || response.status === 500) {
      setTimeout(() => {
        setAlert(response.message);
        setOpen(true);
        setLoading(false);
      }, 3000);
    }

    if (response.status === 200) {
      setTimeout(() => {
        setLoading(false);
        login(response.row);
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

      <p className="title-form">Inicio de sesión</p>

      <Collapse in={open}>
        <Alert severity="error" sx={{ mb: "10px" }}>
          {alert}
        </Alert>
      </Collapse>

      <form onSubmit={handleSubmit(onSubmit)}>
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
            pattern: /^(?=.*[A-Z])(?=.*\d).{9,}$/,
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

        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <p className="options-form-right">Olvidé mi contraseña</p>
        </div>

        <LoadingButton
          variant="contained"
          type="submit"
          color="prussianBlue"
          loading={loading}
          fullWidth
          sx={{ color: "#fff", mt: "20px", mb: "10px" }}
        >
          Iniciar sesión
        </LoadingButton>

        <p
          className="options-form"
          onClick={() => {
            navigate("/register");
          }}
        >
          ¿Aún no tienes una cuenta? Regístrate
        </p>
      </form>
    </div>
  );
}
