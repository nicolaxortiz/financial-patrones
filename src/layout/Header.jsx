import React from "react";
import "./styles/header-styles.css";
import Logo from "../components/Logo";
import HeaderButtons from "../components/HeaderButtons";
import HeaderUser from "../components/HeaderUser";

export function Header() {
  return (
    <div className="header-box">
      <Logo />
      <HeaderButtons />
      {/* <HeaderUser /> */}
    </div>
  );
}
