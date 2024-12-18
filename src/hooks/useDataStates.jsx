import React from "react";

export default function useDataStates() {
  const [user, setUser] = React.useState(null);
  return { user, setUser };
}
