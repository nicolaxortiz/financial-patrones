import React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { useNavigate } from "react-router";

export default function HeaderButtons() {
  const navigate = useNavigate();
  return (
    <Stack spacing={3} direction="row" sx={{ margin: "20px" }}>
      <Button
        variant="outlined"
        color="alabaster"
        onClick={() => {
          navigate("/login");
        }}
      >
        Iniciar sesión
      </Button>
      <Button
        variant="contained"
        color="alabaster"
        onClick={() => {
          navigate("/register");
        }}
      >
        Registrarme
      </Button>
    </Stack>
  );
}
