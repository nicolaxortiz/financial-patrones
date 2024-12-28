import React from "react";
import { Button, Divider, Pagination, Skeleton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import MoveModal from "./MoveModal";
import TotalAmount from "./TotalAmount";
import SearchMoves from "./SearchMoves";
import MovesList from "./MovesList";
import { UseContext } from "../hooks/useContext";

export default function Balance() {
  const [open, setOpen] = React.useState(false);
  const { selectedAccount, loadingAccounts, loadingMoves } =
    React.useContext(UseContext);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      {!loadingAccounts && (
        <p className="accounts-title">
          Balance de la cuenta: {selectedAccount?.name}
        </p>
      )}

      {loadingAccounts && (
        <Skeleton
          variant="text"
          animation="wave"
          sx={{ fontSize: "24px", marginX: "50px", marginBottom: "20px" }}
        />
      )}

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
        disabled={loadingMoves}
        onClick={handleOpen}
      >
        Añadir movimiento
      </Button>

      <MoveModal handleClose={handleClose} open={open} />

      <MovesList />

      <div className="pagination">
        {loadingMoves && (
          <Skeleton
            variant="rounded"
            animation="wave"
            width={300}
            height={40}
          />
        )}

        {!loadingMoves && (
          <Pagination
            count={4}
            color="prussianBlue"
            size="large"
            disabled={loadingMoves}
          />
        )}
      </div>
    </>
  );
}
