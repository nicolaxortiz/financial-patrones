import React from "react";
import "../app.css";
import "../layout/styles/home-styles.css";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import useValidateUser from "../hooks/useValidateUser";
import desktopImage from "../assets/image/desktop.png";
import mobileImage from "../assets/image/smartphone.png";
import macbookImage from "../assets/image/macbook.png";
import tabletImage from "../assets/image/tablet.png";
import { Button, Stack } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { useNavigate } from "react-router";

export default function Home() {
  const validation = useValidateUser();
  const navigate = useNavigate();
  return (
    <>
      <Header />
      <div className="home-header">
        <Grid container spacing={0} className="home-container">
          <Grid
            size={{ xs: 12, md: 6, lg: 5 }}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              paddingX: "40px",
              paddingY: "30px",
            }}
          >
            <div className="home-title">
              <p className="black-title">Experimenta una manera fácil de</p>
              <p className="color-title">manejar tu dinero</p>
            </div>

            <div className="home-subtitle">
              <p>
                Alcanza tus objetivos con información personalizada, cuentas con
                objetivos propios y seguimiento de gastos, todo totalmente
                gratis
              </p>
            </div>

            <Button
              variant="contained"
              color="littleBlue"
              sx={{ mt: "30px", width: "fit-content" }}
              onClick={() => {
                navigate("/register");
              }}
            >
              Regístrate gratis
            </Button>
          </Grid>
          <Grid size={{ xs: 12, md: 6, lg: 7 }}>
            <img src={desktopImage} className="home-image" alt="imagen" />
          </Grid>
        </Grid>
      </div>

      <div className="separator"></div>

      <div className="home-features">
        <p className="features-title">
          Características con las que cuentas para garantizar un buen manejo de
          tu dinero
        </p>

        <Stack
          direction={{ xs: "column-reverse", md: "row" }}
          spacing={{ xs: 2, md: 5, lg: 10 }}
          sx={{ justifyContent: "center", alignItems: "center", mt: "60px" }}
        >
          <div className="section-text">
            <p className="section-title">Categoriza tus movimientos</p>
            <p className="section-information">
              Crea hasta seis cuentas diferentes y separa tus movimientos según
              tus objetivos
            </p>
          </div>

          <img src={mobileImage} alt="" className="section-image" />
        </Stack>

        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={{ xs: 2, md: 5, lg: 10 }}
          sx={{ justifyContent: "center", alignItems: "center", mt: "60px" }}
        >
          <img src={macbookImage} alt="" className="section-image" />

          <div className="section-text">
            <p className="section-title">Obtén un balance general</p>
            <p className="section-information">
              Puedes observar el balance de cada cuenta, y asi puedes reconocer
              a donde van tus ganancias
            </p>
          </div>
        </Stack>

        <Stack
          direction={{ xs: "column-reverse", md: "row" }}
          spacing={{ xs: 2, md: 5, lg: 10 }}
          sx={{ justifyContent: "center", alignItems: "center", mt: "60px" }}
        >
          <div className="section-text">
            <p className="section-title">Filtra tus movimientos</p>
            <p className="section-information">
              Revisa tus movimientos según su tipo, ademas busca movimientos
              específicos por su nombres
            </p>
          </div>

          <img src={tabletImage} alt="" className="section-image" />
        </Stack>
      </div>
      <Footer />
    </>
  );
}
