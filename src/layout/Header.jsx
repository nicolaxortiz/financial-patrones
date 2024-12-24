import React, { useContext } from "react";
import "./styles/header-styles.css";
import Logo from "../components/Logo";
import HeaderButtons from "../components/HeaderButtons";
import HeaderUser from "../components/HeaderUser";
import Grid from "@mui/material/Grid2";
import { UseContext } from "../hooks/useContext";
import Skeleton from "@mui/material/Skeleton";
import { Stack } from "@mui/material";

export default function Header() {
  const { user } = useContext(UseContext);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, [user]);

  return (
    <div className="header-box">
      <Grid container spacing={2} sx={{ height: "100%", alignItems: "center" }}>
        <Grid size={{ xs: 3, md: 8 }} sx={{ justifyItems: "flex-start" }}>
          <Logo />
        </Grid>

        {/* Skeleton loading */}
        {loading && (
          <Grid size={{ xs: 9, md: 4 }} sx={{ justifyItems: "flex-end" }}>
            <Stack direction="row" spacing={2} sx={{ margin: "25px" }}>
              <Skeleton
                variant="rounded"
                animation="wave"
                width={210}
                height={40}
              />
              <Skeleton
                variant="circular"
                animation="wave"
                width={40}
                height={40}
              />
            </Stack>
          </Grid>
        )}

        {/* Options Buttons */}
        {!user?.name && !loading && (
          <Grid size={{ xs: 9, md: 4 }} sx={{ justifyItems: "flex-end" }}>
            <HeaderButtons />
          </Grid>
        )}

        {/* User */}
        {user?.name && !loading && (
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
