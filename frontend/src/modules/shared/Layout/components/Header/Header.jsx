import React from "react";

import { NavBar } from "../NavBar/NavBar";

import { Balance } from "../Balance";

import "./Header.css";

export const Header = () => {
  return (
    <div className="header">
      <NavBar />
      <Balance />
    </div>
  );
};
