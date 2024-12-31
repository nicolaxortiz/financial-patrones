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
import { Button } from "@mui/material";

export default function Home() {
  const validation = useValidateUser();
  return (
    <>
      <Header />
      <div className="home-header">
        <div className="left-section">
          <div className="home-title">
            <p className="black-title">Experimenta una</p>
            <p className="black-title">manera fácil de</p>
            <p className="color-title">manejar tu dinero</p>
          </div>

          <div className="home-subtitle">
            <p>
              Alcanza tus objetivos con información personalizada, cuentas con
              objetivos propios y seguimiento de gastos, todo totalmente gratis
            </p>
          </div>

          <Button
            variant="contained"
            color="littleBlue"
            sx={{ mt: "30px", ml: "30px" }}
          >
            Regístrate gratis
          </Button>
        </div>

        <img src={desktopImage} className="home-image" alt="imagen" />
      </div>

      <div className="separator"></div>

      <div className="home-features">
        <p className="features-title">Características con las que cuentas</p>
        <p className="features-title">
          para garantizar un buen manejo de tu dinero
        </p>

        <div className="section-features">
          <div>
            <p className="section-title">Categoriza tus movimientos</p>
            <p className="section-information">
              Crea hasta seis cuentas diferentes y separa tus
            </p>
            <p className="section-information">
              movimientos según tus objetivos
            </p>
          </div>

          <img src={mobileImage} alt="" className="section-image" />
        </div>

        <div className="section-features">
          <img src={macbookImage} alt="" className="section-image" />

          <div>
            <p className="section-title" style={{ textAlign: "right" }}>
              Obtén un balance general
            </p>
            <p className="section-information" style={{ textAlign: "right" }}>
              Puedes observar el balance de cada cuenta, y
            </p>
            <p className="section-information" style={{ textAlign: "right" }}>
              asi puedes reconocer a donde van tus ganancias
            </p>
          </div>
        </div>

        <div className="section-features">
          <div>
            <p className="section-title">Filtra tus movimientos</p>
            <p className="section-information">
              Revisa tus movimientos según su tipo, ademas
            </p>
            <p className="section-information">
              busca movimientos específicos por su nombres
            </p>
          </div>

          <img src={tabletImage} alt="" className="section-image" />
        </div>
      </div>
      <Footer />
    </>
  );
}
