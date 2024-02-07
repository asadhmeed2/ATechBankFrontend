import React, { useContext } from "react";
import { balanceContext } from "../../context/BalanceProvider";
import { NavBar } from "../NavBar/NavBar";

import "./Header.css";

export const Header = () => {
  const { balance } = useContext(balanceContext);

  return (
    <div className="header">
      <NavBar />
    </div>
  );
};
