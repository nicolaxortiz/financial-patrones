import React, { useContext } from "react";
import { useNavigate } from "react-router";
import { UseContext } from "./useContext";

export default function useLogin() {
  const navigate = useNavigate();
  const { setUser } = useContext(UseContext);

  return (data) => {
    localStorage.setItem("user", JSON.stringify(data));
    setUser(data);
    navigate("/financial");
  };
}
