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

export default function ForgotPasswordForm() {
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

	const onSubmit = (data) => {
		console.log(data);
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

			<p className="title-form">Recuperar contraseña</p>

			<Collapse in={openAlert}>
				<Alert severity={alertSeverety} sx={{ mb: "10px" }}>
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

				<LoadingButton
					variant="contained"
					type="submit"
					color="prussianBlue"
					loading={loading}
					fullWidth
					sx={{ color: "#fff", mt: "20px", mb: "10px" }}
				>
					Continuar
				</LoadingButton>
			</form>
		</div>
	);
}
