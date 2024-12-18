import React, { useEffect } from "react";
import "../app.css";
import Header from "../layout/Header";
import Main from "../layout/Main";
import Footer from "../layout/Footer";
import useValidateUser from "../hooks/useValidateUser";
import { useNavigate } from "react-router";

export default function Financial() {
  const navigate = useNavigate();
  const validation = useValidateUser();
  console.log(validation);

  useEffect(() => {
    if (validation) {
      navigate("/financial");
    } else {
      navigate("/");
    }
  }, [validation]);

  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}
