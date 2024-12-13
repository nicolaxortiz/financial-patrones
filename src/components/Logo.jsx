import React from "react";
import Stack from "@mui/material/Stack";
import logo from "../assets/logo-financial.svg";

export default function Logo() {
  return (
    <Stack
      spacing={2}
      direction="row"
      sx={{
        justifyContent: "center",
        alignItems: "center",
        margin: "20px",
      }}
    >
      <img src={logo} alt="Logo" className="header-logo" />
      <p className="header-title">App Financiera</p>
    </Stack>
  );
}
