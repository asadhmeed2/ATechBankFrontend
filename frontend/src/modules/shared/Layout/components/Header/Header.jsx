import React, { useContext } from "react";

import { NavBar } from "../NavBar/NavBar";

import { Balance } from "../Balance";

import "./Header.css";
import { balanceContext } from "../../context/BalanceProvider";
import { transactionApi } from "../../../../api/transactionApi";

export const Header = () => {
  const { updateCurrencyExchange } = useContext(balanceContext);

  const onCurrencyCahnge = async () => {
    const res = transactionApi.getCurrencyExchange("il");
    updateCurrencyExchange(res);
  };

  return (
    <div className="header">
      <NavBar />
      <button onClick={onCurrencyCahnge}>change currency</button>
      <Balance />
    </div>
  );
};
