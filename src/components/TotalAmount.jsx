import React, { useContext } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import { Skeleton } from "@mui/material";
import { UseContext } from "../hooks/UseContext";

export default function TotalAmount() {
  const { moves, loadingAccounts, selectedAccount } = useContext(UseContext);

  return (
    <Box sx={{ mb: "20px" }}>
      <Grid container spacing={2}>
        <Grid size={{ xs: 6, md: 4 }}>
          <div className="total-box">
            <p className="total-name">Ganancias</p>
            <p className="total-price">
              {loadingAccounts ? (
                <Skeleton
                  variant="text"
                  width={150}
                  animation="wave"
                  sx={{ fontSize: "22px" }}
                />
              ) : selectedAccount ? (
                `$${parseInt(selectedAccount?.earnings).toLocaleString()}`
              ) : (
                `$---`
              )}
            </p>
          </div>
        </Grid>

        <Grid size={{ xs: 6, md: 4 }}>
          <div className="total-box">
            <p className="total-name">Gastos</p>
            <p className="total-price">
              {loadingAccounts ? (
                <Skeleton
                  variant="text"
                  width={150}
                  animation="wave"
                  sx={{ fontSize: "22px" }}
                />
              ) : selectedAccount ? (
                `$${parseInt(selectedAccount?.expenses).toLocaleString()}`
              ) : (
                `$---`
              )}
            </p>
          </div>
        </Grid>

        <Grid size={{ xs: 6, md: 4 }}>
          <div className="total-box">
            <p className="total-name">Total</p>
            <p className="total-price">
              {loadingAccounts ? (
                <Skeleton
                  variant="text"
                  width={150}
                  animation="wave"
                  sx={{ fontSize: "22px" }}
                />
              ) : selectedAccount ? (
                `$${(
                  parseInt(selectedAccount?.earnings) -
                  parseInt(selectedAccount?.expenses)
                ).toLocaleString()}`
              ) : (
                `$---`
              )}
            </p>
          </div>
        </Grid>
      </Grid>
    </Box>
  );
}
