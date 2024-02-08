import React, { useCallback, useContext } from "react";

import useSWR from "swr";

import { balanceContext } from "../../context/BalanceProvider";

import { transactionApi } from "../../../../api/transactionApi";

import "./Balance.css";

export const Balance = () => {
  const { balance, updateBalance } = useContext(balanceContext);

  const getBalance = useCallback(async () => {
    const balance = await transactionApi.getBalance();
    updateBalance(balance);

    return balance;
  }, [updateBalance]);

  const { isLoading } = useSWR("/balance", getBalance);

  return (
    <div className="balance">
      {!isLoading && (
        <>
          <span>Balance : </span>
          <span className={balance >= 0 ? "balance-green" : "balance-red"}>
            {balance}
          </span>
        </>
      )}
    </div>
  );
};
