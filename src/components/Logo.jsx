import React from "react";
import Stack from "@mui/material/Stack";
import logo from "../assets/logo-financial.svg";
import { useNavigate } from "react-router";

export default function Logo() {
  const navigate = useNavigate();
  return (
    <Stack
      spacing={2}
      direction="row"
      sx={{
        justifyContent: "center",
        alignItems: "center",
        margin: "20px",
      }}
      onClick={() => {
        navigate("/");
      }}
    >
      <img src={logo} alt="Logo" className="header-logo" />
      <p className="header-title">App Financiera</p>
    </Stack>
  );
}
