import React from "react";
import { Button, Divider, Pagination } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import MoveModal from "./MoveModal";
import TotalAmount from "./TotalAmount";
import SearchMoves from "./SearchMoves";
import MovesList from "./MovesList";
import { UseContext } from "../hooks/useContext";

export default function Balance() {
  const [open, setOpen] = React.useState(false);
  const { selectedAccount, accounts } = React.useContext(UseContext);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <p className="accounts-title">
        {selectedAccount?.name || accounts[0]?.name}
      </p>
      <Divider />
      {/* Conteo del dinero */}
      <TotalAmount />

      <Divider />

      <SearchMoves />

      <Button
        variant="contained"
        color="indigoDye"
        sx={{ color: "#fff" }}
        startIcon={<AddIcon />}
        onClick={handleOpen}
      >
        Añadir movimiento
      </Button>

      <MoveModal handleClose={handleClose} open={open} />

      <MovesList />

      <Pagination
        count={4}
        color="prussianBlue"
        size="large"
        sx={{ mt: "30px", mb: "30px", justifySelf: "center" }}
      />
    </>
  );
}
