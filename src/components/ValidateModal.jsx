import React, { useState, useRef } from "react";
import { Box, Modal, Stack, Button, Collapse, Alert } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { useNavigate } from "react-router";
import { codesAPI } from "../API/codes";
import { usersAPI } from "../API/users";
import "../layout/styles/validate-modal-style.css";

export default function ValidateModal({ setOpen, open, id, setStatus }) {
  const [openAlert, setOpenAlert] = useState(false);
  const [alert, setAlert] = useState("");
  const [loading, setLoading] = useState(false);
  const [code, setCode] = useState(new Array(6).fill(""));
  const inputs = useRef([]);

  const navigate = useNavigate();

  const handleChange = (value, index) => {
    const newCode = [...code];
    newCode[index] = value.slice(-1);
    setCode(newCode);

    if (value && index < 5) {
      inputs.current[index + 1].focus();
    }
  };

  const handleBackspace = (value, index) => {
    if (!value && index > 0) {
      inputs.current[index - 1].focus();
    }
  };

  const handleSubmit = async () => {
    setLoading(true);
    const finalCode = code.join("");

    const response = await codesAPI.get(finalCode, id);

    if (response.status === 200) {
      const updateResponse = await usersAPI.updateStatus(id);

      if (updateResponse.status === 200) {
        setTimeout(() => {
          setLoading(false);
          setOpen(false);
          setStatus(true);
        }, 3000);
      }

      if (updateResponse.status === 404 || updateResponse.status === 500) {
        setTimeout(() => {
          setAlert(updateResponse.message);
          setOpenAlert(true);
          setLoading(false);
        }, 3000);
      }
    }

    if (response.status === 404 || response.status === 500) {
      setTimeout(() => {
        setAlert(response.message);
        setOpenAlert(true);
        setLoading(false);
      }, 3000);
    }
  };

  return (
    <Modal
      open={open}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box className="modal">
        <p className="title-modal">
          Ingrese el código enviado a su correo electrónico para validar su
          cuenta
        </p>

        <Collapse in={openAlert}>
          <Alert severity="error" sx={{ mb: "10px" }}>
            {alert}
          </Alert>
        </Collapse>

        <div className="input-container">
          {code.map((digit, index) => (
            <input
              key={index}
              type="number"
              maxLength="1"
              value={digit}
              className="input-box"
              ref={(el) => (inputs.current[index] = el)}
              onChange={(e) => handleChange(e.target.value, index)}
              onKeyDown={(e) => {
                if (e.key === "Backspace") {
                  handleBackspace(e.target.value, index);
                }
              }}
            />
          ))}
        </div>

        <Stack
          direction="row"
          spacing={2}
          sx={{ justifyContent: "end", mt: "30px" }}
        >
          <LoadingButton
            variant="contained"
            loading={loading}
            fullWidth
            color="indigoDye"
            sx={{ color: "#fff" }}
            onClick={() => {
              setOpenAlert(false);
              setAlert("");
              handleSubmit();
            }}
          >
            Enviar
          </LoadingButton>
        </Stack>
      </Box>
    </Modal>
  );
}
