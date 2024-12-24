import React from "react";

export default function useDataStates() {
  const [user, setUser] = React.useState(null);
  const [accounts, setAccounts] = React.useState([]);
  const [loadingAccounts, setLoadingAccounts] = React.useState(true);
  const [selectedAccount, setSelectedAccount] = React.useState(null);
  return {
    user,
    setUser,
    accounts,
    setAccounts,
    loadingAccounts,
    setLoadingAccounts,
    selectedAccount,
    setSelectedAccount,
  };
}
