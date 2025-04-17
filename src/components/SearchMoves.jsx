import React, { useContext } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import { IconButton, TextField } from "@mui/material";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import FilterModal from "./FilterModal";
import { UseContext } from "../hooks/UseContext";
import { movesAPI } from "../API/moves";

export default function SearchMoves({ page, setCountPages }) {
  const [name, setName] = React.useState("");
  const { loadingMoves, selectedAccount, setMoves, setFetchMoves, fetchMoves } =
    useContext(UseContext);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSearchName = async (data) => {
    setName(data);

    if (data != "") {
      const response = await movesAPI.getByName(
        selectedAccount.id,
        data,
        (page - 1) * 6
      );

      if (response.status === 200) {
        setMoves(response.rows);
        setCountPages(response.count);
      }

      if (response.status === 404) {
        setMoves([]);
        setCountPages(0);
      }
    } else {
      setFetchMoves(!fetchMoves);
    }
  };
  return (
    <Box sx={{ mb: "20px", mt: "20px" }}>
      <Grid
        container
        spacing={3}
        sx={{
          alignItems: "center",
          justifyItems: "center",
        }}
      >
        <Grid size={{ xs: 10, md: 11 }}>
          <TextField
            id="filled-basic"
            label="Buscar movimiento"
            variant="filled"
            color="prussianBlue"
            disabled={loadingMoves || selectedAccount === null}
            value={name}
            onChange={(event) => {
              handleSearchName(event.target.value);
            }}
            size="small"
            fullWidth
          />
        </Grid>

        <Grid size={{ xs: 2, md: 1 }}>
          <IconButton
            aria-label="filter"
            onClick={handleOpen}
            disabled={loadingMoves || selectedAccount === null}
          >
            <FilterAltIcon />
          </IconButton>
        </Grid>

        <FilterModal handleClose={handleClose} open={open} />
      </Grid>
    </Box>
  );
}
