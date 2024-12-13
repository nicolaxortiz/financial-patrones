import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import Accounts from "../components/Accounts";
import "./styles/main-styles.css";
import Balance from "../components/Balance";

export default function Main() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={0}>
        <Grid
          size={{ xs: 12, md: 4, lg: 3 }}
          sx={{
            backgroundColor: "#EEF0EB",
            borderColor: "#B4B8AB",
            borderStyle: "solid",
            borderWidth: "2px",
            height: "fit-content",
          }}
        >
          <Accounts />
        </Grid>

        <Grid size={{ xs: 12, md: 8, lg: 9 }} sx={{ padding: "15px" }}>
          <Balance />
        </Grid>
      </Grid>
    </Box>
  );
}
