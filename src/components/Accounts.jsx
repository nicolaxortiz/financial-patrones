import React, { useContext, useEffect } from "react";
import { Button, Stack, Skeleton, Menu, MenuItem } from "@mui/material";
import AccountModal from "./AccountModal";
import { accountsAPI } from "../API/accounts";
import AddIcon from "@mui/icons-material/Add";
import { UseContext } from "../hooks/useContext";
import { Delete, Edit } from "@mui/icons-material";
import { set } from "react-hook-form";

export default function Accounts() {
  const [openModal, setOpenModal] = React.useState(false);
  const [accountMenu, setAccountMenu] = React.useState(null);
  const [method, setMethod] = React.useState("");
  const [anchorEl, setAnchorEl] = React.useState(null);
  const {
    accounts,
    setAccounts,
    user,
    loadingAccounts,
    setLoadingAccounts,
    selectedAccount,
    setSelectedAccount,
    setFetchAccounts,
    fetchAccounts,
    setFilterMoves,
    setFetchMoves,
    fetchMoves,
  } = useContext(UseContext);

  const openMenu = Boolean(anchorEl);

  const handleClickAccount = (account) => {
    setFilterMoves("all");
    setSelectedAccount(account);
  };

  const handleClickMenu = (event, account) => {
    event.preventDefault();
    setAnchorEl(event.currentTarget);
    setAccountMenu(account);
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
    const response = await accountsAPI.delete(accountMenu.id);

    setLoadingAccounts(true);
    if (response.status === 200) {
      setFetchAccounts(!fetchAccounts);
      setFetchMoves(!fetchMoves);
    }
  };

  useEffect(() => {
    async function fetchAccounts() {
      const response = await accountsAPI.getByID(user.id);
      setLoadingAccounts(true);

      if (response.status === 200) {
        localStorage.setItem("accounts", JSON.stringify(response.rows));
        setAccounts(response.rows);
        setSelectedAccount(response.rows[0]);
      }

      if (response.status === 404) {
        setAccounts([]);
        setSelectedAccount(null);
      }
    }

    if (user) {
      fetchAccounts();
    }
  }, [user, fetchAccounts]);

  useEffect(() => {
    if (selectedAccount === null && accounts.length > 0) {
      setSelectedAccount(accounts[0]);
    }

    if (accounts) {
      setTimeout(() => {
        setLoadingAccounts(false);
      }, 1000);
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
        selectedAccount={accountMenu}
      />

      {loadingAccounts &&
        Array.from({ length: 6 }).map((_, index) => (
          <Skeleton
            variant="rounded"
            height={"45px"}
            animation="wave"
            className="account-list-skeleton"
            key={index}
          />
        ))}

      {!loadingAccounts &&
        accounts.map((account) => (
          <div
            className={
              account.id === selectedAccount.id
                ? "account-list-selected"
                : "account-list"
            }
            key={account.id}
            onContextMenu={(event) => handleClickMenu(event, account)}
            onClick={() => handleClickAccount(account)}
          >
            <p className="account-name">{account.name}</p>
            <p className="account-amount">
              $
              {(
                parseInt(account.earnings) - parseInt(account.expenses)
              ).toLocaleString()}
            </p>
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
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "#6B6B6B",
            }}
          >
            <AddIcon sx={{ fontSize: "25px", marginY: "10px" }} />
          </div>
        ))}
    </div>
  );
}
