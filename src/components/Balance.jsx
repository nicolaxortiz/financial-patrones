import React, { useEffect } from "react";
import { Button, Divider, Pagination, Skeleton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import MoveModal from "./MoveModal";
import TotalAmount from "./TotalAmount";
import SearchMoves from "./SearchMoves";
import MovesList from "./MovesList";
import { UseContext } from "../hooks/useContext";

export default function Balance() {
  const [method, setMethod] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const [page, setPage] = React.useState(1);
  const [countPages, setCountPages] = React.useState(0);
  const { selectedAccount, loadingAccounts, loadingMoves } =
    React.useContext(UseContext);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChangePage = (event, value) => {
    setPage(value);
  };

  useEffect(() => {
    setPage(1);
  }, [selectedAccount]);

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

      <SearchMoves page={page} setCountPages={setCountPages} />

      <Button
        variant="contained"
        color="indigoDye"
        sx={{ color: "#fff" }}
        startIcon={<AddIcon />}
        disabled={loadingMoves}
        onClick={() => {
          setMethod("create");
          handleOpen();
        }}
      >
        Añadir movimiento
      </Button>

      <MoveModal handleClose={handleClose} open={open} method={method} />

      <MovesList
        handleOpen={handleOpen}
        setMethod={setMethod}
        setCountPages={setCountPages}
        page={page}
      />

      <div className="pagination">
        <Pagination
          count={Math.ceil(countPages / 6)}
          color="prussianBlue"
          size="large"
          disabled={loadingMoves}
          onChange={handleChangePage}
          page={page}
        />
      </div>
    </>
  );
}
