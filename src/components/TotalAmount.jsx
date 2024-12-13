import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";

export default function TotalAmount() {
  return (
    <Box sx={{ flexGrow: 1, mb: "20px" }}>
      <Grid container spacing={2}>
        <Grid size={{ xs: 6, md: 4 }}>
          <div className="total-box">
            <p className="total-name">Ganancias</p>
            <p className="total-price">$500.000</p>
          </div>
        </Grid>

        <Grid size={{ xs: 6, md: 4 }}>
          <div className="total-box">
            <p className="total-name">Gastos</p>
            <p className="total-price">$500.000</p>
          </div>
        </Grid>

        <Grid size={{ xs: 6, md: 4 }}>
          <div className="total-box">
            <p className="total-name">Total</p>
            <p className="total-price">$500.000</p>
          </div>
        </Grid>
      </Grid>
    </Box>
  );
}
