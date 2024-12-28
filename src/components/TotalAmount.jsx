import React, { useContext } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import { Skeleton } from "@mui/material";
import { UseContext } from "../hooks/useContext";

export default function TotalAmount() {
  const { moves, loadingMoves } = useContext(UseContext);

  const totalEarnings = moves
    .filter((move) => move.type === "Ganancia")
    .reduce((acc, move) => acc + move.amount, 0);

  const totalExpenses = moves
    .filter((move) => move.type === "Gasto")
    .reduce((acc, move) => acc + move.amount, 0);

  return (
    <Box sx={{ mb: "20px" }}>
      <Grid container spacing={2}>
        <Grid size={{ xs: 6, md: 4 }}>
          <div className="total-box">
            <p className="total-name">Ganancias</p>
            <p className="total-price">
              {loadingMoves ? (
                <Skeleton
                  variant="text"
                  width={150}
                  animation="wave"
                  sx={{ fontSize: "22px" }}
                />
              ) : (
                `$${totalEarnings.toLocaleString()}`
              )}
            </p>
          </div>
        </Grid>

        <Grid size={{ xs: 6, md: 4 }}>
          <div className="total-box">
            <p className="total-name">Gastos</p>
            <p className="total-price">
              {loadingMoves ? (
                <Skeleton
                  variant="text"
                  width={150}
                  animation="wave"
                  sx={{ fontSize: "22px" }}
                />
              ) : (
                `$${totalExpenses.toLocaleString()}`
              )}
            </p>
          </div>
        </Grid>

        <Grid size={{ xs: 6, md: 4 }}>
          <div className="total-box">
            <p className="total-name">Total</p>
            <p className="total-price">
              {loadingMoves ? (
                <Skeleton
                  variant="text"
                  width={150}
                  animation="wave"
                  sx={{ fontSize: "22px" }}
                />
              ) : (
                `$${(totalEarnings - totalExpenses).toLocaleString()}`
              )}
            </p>
          </div>
        </Grid>
      </Grid>
    </Box>
  );
}
