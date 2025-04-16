import React, { useEffect } from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import useValidateUser from "../hooks/useValidateUser";
import { useNavigate } from "react-router";
import UpdateUserForm from "../components/UpdateUserForm";

export default function Configuration() {
  const navigate = useNavigate();
  const validation = useValidateUser();

  useEffect(() => {
    if (validation) {
      navigate("/configuration");
    } else {
      navigate("/");
    }
  }, [validation]);

  return (
    <>
      <Header />
      <UpdateUserForm />
      <Footer />
    </>
  );
}
