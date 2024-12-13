import React from "react";
import Box from "@mui/material/Box";
import { Stack } from "@mui/material";
import Grid from "@mui/material/Grid2";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import "./styles/footer-styles.css";

export default function Footer() {
  return (
    <>
      <div className="footer-box">
        <Box sx={{ flexGrow: 1 }}>
          <Grid
            container
            spacing={0}
            sx={{
              justifyItems: "center",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <Grid size={{ xs: 6, md: 4 }}>
              Desarrollado por: Nicolas Santiago Ortiz Pedraza.
            </Grid>
            <Grid size={{ xs: 6, md: 4 }}>
              Sistema desarrollado para la gestión de gastos y ganancias
              personales o empresariales.
            </Grid>
            <Grid size={{ xs: 6, md: 4 }}>
              <Stack
                spacing={3}
                direction="row"
                sx={{ margin: "20px", justifyContent: "center" }}
              >
                <a href="https://github.com/nicolaxortiz">
                  <GitHubIcon color="alabaster" fontSize="large" />
                </a>

                <a href="https://www.instagram.com/nicolaxortiz">
                  <InstagramIcon color="alabaster" fontSize="large" />
                </a>

                <a href="https://x.com/nicolaxortiz01">
                  <XIcon color="alabaster" fontSize="large" />
                </a>
              </Stack>
            </Grid>
          </Grid>
        </Box>
      </div>

      <div className="footer-divider">Todos los derechos reservados - 2024</div>
    </>
  );
}
