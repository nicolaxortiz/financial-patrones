import React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

export default function HeaderButtons() {
  return (
    <Stack spacing={3} direction="row" sx={{ margin: "20px" }}>
      <Button variant="outlined" color="alabaster">
        Iniciar sesión
      </Button>
      <Button variant="contained" color="alabaster">
        Registrarme
      </Button>
    </Stack>
  );
}
