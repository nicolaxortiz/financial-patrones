import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Delete, Edit } from "@mui/icons-material";

export default function MovesList() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid size={{ xs: 12, md: 6 }} onClick={handleClick}>
          <div className="move-list">
            <div className="first-line-move">
              <p className="move-price">$200.000</p>
              <p className="move-date">12/12/2024</p>
            </div>

            <div className="second-line-move">
              <p className="move-name">Gasto en bobadas</p>
            </div>

            <div className="third-line-move">
              <p className="move-type">Gasto</p>
              <p className="move-account">Cuenta: General</p>
            </div>
          </div>
        </Grid>

        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem onClick={handleClose} disableRipple>
            <Edit sx={{ mr: "10px" }} />
            Editar movimiento
          </MenuItem>
          <MenuItem onClick={handleClose} disableRipple>
            <Delete sx={{ mr: "10px" }} />
            Eliminar movimiento
          </MenuItem>
        </Menu>

        <Grid size={{ xs: 12, md: 6 }}>
          <div className="move-list">
            <div className="first-line-move">
              <p className="move-price">$200.000</p>
              <p className="move-date">12/12/2024</p>
            </div>

            <div className="second-line-move">
              <p className="move-name">Gasto en bobadas</p>
            </div>

            <div className="third-line-move">
              <p className="move-type">Gasto</p>
              <p className="move-account">Cuenta: General</p>
            </div>
          </div>
        </Grid>
      </Grid>
    </Box>
  );
}
