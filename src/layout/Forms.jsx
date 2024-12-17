import React from "react";
import "./styles/forms-styles.css";
import LoginForm from "../components/LoginForm";
import RegisterForm from "../components/RegisterForm";

export default function Forms({ type }) {
  return (
    <div className="form-layout">
      {type === "login" && <LoginForm />}
      {type === "register" && <RegisterForm />}
    </div>
  );
}
