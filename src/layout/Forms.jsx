import React, { useState } from "react";
import "./styles/forms-styles.css";
import LoginForm from "../components/LoginForm";
import RegisterForm from "../components/RegisterForm";
import ValidateModal from "../components/ValidateModal";

export default function Forms({ type }) {
  const [open, setOpen] = useState(false);
  const [id, setId] = useState();
  const [status, setStatus] = useState(false);

  return (
    <div className="form-layout">
      {type === "login" && (
        <LoginForm setOpen={setOpen} setId={setId} status={status} />
      )}
      {type === "register" && <RegisterForm />}
      <ValidateModal
        setOpen={setOpen}
        open={open}
        id={id}
        setStatus={setStatus}
      />
    </div>
  );
}
