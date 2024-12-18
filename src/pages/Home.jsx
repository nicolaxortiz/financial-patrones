import React from "react";
import "../app.css";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import useValidateUser from "../hooks/useValidateUser";

export default function Home() {
  const validation = useValidateUser();
  return (
    <>
      <Header />
      <h1>Bienvenido al gestor de tus finanzas</h1>
      <Footer />
    </>
  );
}
