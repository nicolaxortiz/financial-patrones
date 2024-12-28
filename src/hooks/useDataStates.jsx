import React from "react";

export default function useDataStates() {
  const [user, setUser] = React.useState(null);
  const [accounts, setAccounts] = React.useState([]);
  const [loadingAccounts, setLoadingAccounts] = React.useState(true);
  const [selectedAccount, setSelectedAccount] = React.useState(null);
  const [fetchAccounts, setFetchAccounts] = React.useState(false);
  const [moves, setMoves] = React.useState([]);
  const [loadingMoves, setLoadingMoves] = React.useState(true);
  const [fetchMoves, setFetchMoves] = React.useState(false);
  const [filterMoves, setFilterMoves] = React.useState("all");
  return {
    user,
    setUser,
    accounts,
    setAccounts,
    loadingAccounts,
    setLoadingAccounts,
    selectedAccount,
    setSelectedAccount,
    fetchAccounts,
    setFetchAccounts,
    moves,
    setMoves,
    loadingMoves,
    setLoadingMoves,
    fetchMoves,
    setFetchMoves,
    filterMoves,
    setFilterMoves,
  };
}
