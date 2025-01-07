import { LoadingButton } from "@mui/lab";
import { useForm } from "react-hook-form";
import { useState, useContext, useEffect } from "react";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { Alert } from "@mui/material";
import { Collapse } from "@mui/material";
import { useNavigate } from "react-router";
import { usersAPI } from "../API/users";
import { codesAPI } from "../API/codes";
import { UseContext } from "../hooks/useContext";

export default function LoginForm({ setOpen, setId, status }) {
  const navigate = useNavigate();
  const { setUser } = useContext(UseContext);

  const [openAlert, setOpenAlert] = useState(false);
  const [alertSeverety, setAlertSeverety] = useState("");
  const [alert, setAlert] = useState("");
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setLoading(true);
    setOpenAlert(false);
    setAlertSeverety("");
    setAlert("");
    const response = await usersAPI.getbyEmailandPassword(data);

    if (response.status === 404 || response.status === 500) {
      setTimeout(() => {
        setAlertSeverety("error");
        setAlert(response.message);
        setOpenAlert(true);
        setLoading(false);
      }, 3000);
    }

    if (response.status === 200) {
      setTimeout(() => {
        setLoading(false);
        localStorage.setItem("user", JSON.stringify(response.row));
        setUser(response.row);
        navigate("/financial");
      }, 3000);
    }

    if (response.status === 401) {
      const codeResponse = await codesAPI.create(response.id, data.email);

      if (codeResponse.status === 200) {
        setTimeout(() => {
          setLoading(false);
          setId(response.id);
          setOpen(true);
          reset();
        }, 3000);
      }
    }
  };

  useEffect(() => {
    if (status) {
      setAlert("User validated, please login again");
      setAlertSeverety("success");
      setOpenAlert(true);
    }
  }, [status]);

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

      <Collapse in={openAlert}>
        <Alert severity={alertSeverety} sx={{ mb: "10px" }}>
          {alert}
        </Alert>
      </Collapse>

      <form onSubmit={handleSubmit(onSubmit)}>
        <p className="label-form">Email</p>
        <input
          type="text"
          disabled={loading}
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
          disabled={loading}
          className={errors.password ? "input-form-wm" : "input-form"}
          {...register("password", {
            required: true,
          })}
        />
        {errors.password?.type === "required" && (
          <p className="input-information">* La contraseña es obligatoria</p>
        )}

        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <p
            className="options-form-right"
            onClick={() => {
              navigate("/forgot-password");
            }}
          >
            Olvidé mi contraseña
          </p>
        </div>

        <LoadingButton
          variant="contained"
          type="submit"
          color="prussianBlue"
          disabled={loading}
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
