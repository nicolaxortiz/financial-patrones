import React, { useContext } from "react";
import { UseContext } from "./useContext";
import { useNavigate } from "react-router";

export default function useLogout() {
  const navigate = useNavigate();
  const { setUser } = useContext(UseContext);

  return () => {
    localStorage.removeItem("user");
    setUser({});
    navigate("/");
  };
}
