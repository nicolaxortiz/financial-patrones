import React, { useContext, useEffect } from "react";
import { Button, Stack, Skeleton, Menu, MenuItem } from "@mui/material";
import AccountModal from "./AccountModal";
import { accountsAPI } from "../API/accounts";
import AddIcon from "@mui/icons-material/Add";
import { UseContext } from "../hooks/useContext";
import { Delete, Edit } from "@mui/icons-material";

export default function Accounts() {
  const [openModal, setOpenModal] = React.useState(false);
  const [method, setMethod] = React.useState("");
  const [anchorEl, setAnchorEl] = React.useState(null);
  const {
    accounts,
    setAccounts,
    user,
    loadingAccounts,
    setLoadingAccounts,
    setSelectedAccount,
    selectedAccount,
  } = useContext(UseContext);

  const openMenu = Boolean(anchorEl);

  const handleClickMenu = (event, account) => {
    event.preventDefault();
    setAnchorEl(event.currentTarget);
    setSelectedAccount(account);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => {
    setOpenModal(false);
    setMethod("");
  };

  const handleDeleteAccount = async () => {
    const response = await accountsAPI.delete(selectedAccount.id);

    if (response.status === 200) {
      const responseGet = await accountsAPI.getByID(user.id);

      if (responseGet.status === 200) {
        localStorage.setItem("accounts", JSON.stringify(responseGet.rows));
        setAccounts(responseGet.rows);
      }
    }
  };

  useEffect(() => {
    async function fetchAccounts() {
      const response = await accountsAPI.getByID(user.id);

      if (response.status === 200) {
        localStorage.setItem("accounts", JSON.stringify(response.rows));
        setAccounts(response.rows);
      }

      if (response.status === 404) {
        setAccounts([]);
      }
    }

    if (user) {
      fetchAccounts();
    }
  }, [user]);

  useEffect(() => {
    if (accounts) {
      setTimeout(() => {
        setLoadingAccounts(false);
      }, 2000);
    }
  }, [accounts]);

  return (
    <div className="accounts-box">
      <p className="accounts-title">Mis cuentas</p>

      <Button
        variant="contained"
        color="indigoDye"
        sx={{ width: "70%", color: "#fff", mb: "20px" }}
        onClick={() => {
          setMethod("create");
          handleOpenModal();
        }}
        disabled={loadingAccounts || accounts.length >= 6}
      >
        Agregar nueva cuenta
      </Button>

      <AccountModal
        handleClose={handleCloseModal}
        open={openModal}
        method={method}
        selectedAccount={selectedAccount}
      />

      {loadingAccounts &&
        Array.from({ length: 6 }).map((_, index) => (
          <Skeleton
            variant="rounded"
            height={"50px"}
            animation="wave"
            className="account-list-skeleton"
            key={index}
          />
        ))}

      {!loadingAccounts &&
        accounts.map((account) => (
          <div
            className="account-list"
            key={account.id}
            onContextMenu={(event) => handleClickMenu(event, account)}
          >
            <p className="account-name">{account.name}</p>
            <p className="account-mount">$ {account.amount}</p>
          </div>
        ))}

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
        open={openMenu}
        onClose={handleCloseMenu}
      >
        <MenuItem
          onClick={() => {
            setMethod("update");
            handleOpenModal();
            handleCloseMenu();
          }}
          disableRipple
        >
          <Edit sx={{ mr: "10px" }} />
          Editar cuenta
        </MenuItem>
        <MenuItem
          onClick={() => {
            setLoadingAccounts(true);
            handleDeleteAccount();
            handleCloseMenu();
          }}
          disableRipple
        >
          <Delete sx={{ mr: "10px" }} />
          Eliminar cuenta
        </MenuItem>
      </Menu>

      {!loadingAccounts &&
        Array.from({ length: 6 - accounts.length }).map((_, index) => (
          <div
            className="account-list"
            onClick={() => {
              setMethod("create");
              handleOpenModal();
            }}
            key={index}
            style={{
              height: "50px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "#4d4d4d",
            }}
          >
            <AddIcon sx={{ fontSize: "30px" }} />
          </div>
        ))}
    </div>
  );
}
