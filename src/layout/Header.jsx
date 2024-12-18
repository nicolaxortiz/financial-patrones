import React, { useContext } from "react";
import "./styles/header-styles.css";
import Logo from "../components/Logo";
import HeaderButtons from "../components/HeaderButtons";
import HeaderUser from "../components/HeaderUser";
import Grid from "@mui/material/Grid2";
import { UseContext } from "../hooks/useContext";

export default function Header() {
  const { user } = useContext(UseContext);

  return (
    <div className="header-box">
      <Grid container spacing={2} sx={{ height: "100%", alignItems: "center" }}>
        <Grid size={{ xs: 3, md: 8 }} sx={{ justifyItems: "flex-start" }}>
          <Logo />
        </Grid>

        {!user?.name && (
          <Grid size={{ xs: 9, md: 4 }} sx={{ justifyItems: "flex-end" }}>
            <HeaderButtons />
          </Grid>
        )}

        {user?.name && (
          <Grid
            size={{ xs: 9, md: 4 }}
            sx={{ display: "flex", justifyContent: "flex-end" }}
          >
            <HeaderUser user={user} />
          </Grid>
        )}
      </Grid>
    </div>
  );
}
