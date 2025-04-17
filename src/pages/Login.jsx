import React, { useContext, useEffect } from "react";
import Forms from "../layout/Forms";
import { UseContext } from "../hooks/UseContext";
import { useNavigate } from "react-router";
import useValidateUser from "../hooks/useValidateUser";

export default function Login({ type }) {
  const { user } = useContext(UseContext);
  const navigate = useNavigate();
  const validation = useValidateUser();

  useEffect(() => {
    if (validation) {
      navigate("/financial");
    }
  }, [validation]);

  return (
    <>
      <Forms type={type} />
    </>
  );
}
