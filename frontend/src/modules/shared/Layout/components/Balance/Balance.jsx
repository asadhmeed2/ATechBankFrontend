import React, { useContext } from "react";

import { balanceContext } from "../../context/BalanceProvider";

import "./Balance.css";

export const Balance = () => {
  const { balance } = useContext(balanceContext);

  return (
    <div className="balance">
      <span>Balance : </span>
      <span className={balance >= 0 ? "balance-green" : "balance-red"}>
        {balance}
      </span>
    </div>
  );
};
