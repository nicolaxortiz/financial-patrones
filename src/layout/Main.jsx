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
          size={{ xs: 6, md: 3 }}
          sx={{
            backgroundColor: "#EEF0EB",
            borderRightColor: "#B4B8AB",
            borderRightStyle: "solid",
            borderRightWidth: "2px",
            height: "80vh",
          }}
        >
          <Accounts />
        </Grid>

        <Grid size={{ xs: 6, md: 9 }} sx={{ padding: "15px" }}>
          <Balance />
        </Grid>
      </Grid>
    </Box>
  );
}
