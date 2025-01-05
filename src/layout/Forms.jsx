import React, { useState } from "react";
import "./styles/forms-styles.css";
import LoginForm from "../components/LoginForm";
import RegisterForm from "../components/RegisterForm";
import ValidateModal from "../components/ValidateModal";
import ForgotPasswordForm from "../components/ForgotPasswordForm";

export default function Forms({ type }) {
	const [open, setOpen] = useState(false);
	const [id, setId] = useState();
	const [status, setStatus] = useState(false);

	return (
		<div
			className={
				type === "register" ? "form-layout-register" : "form-layout-login"
			}
		>
			{type === "login" && (
				<LoginForm setOpen={setOpen} setId={setId} status={status} />
			)}
			{type === "register" && <RegisterForm />}
			{type === "password" && <ForgotPasswordForm />}
			<ValidateModal
				setOpen={setOpen}
				open={open}
				id={id}
				setStatus={setStatus}
			/>
		</div>
	);
}
