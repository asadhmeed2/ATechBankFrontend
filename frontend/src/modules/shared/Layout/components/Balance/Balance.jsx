import React, { useCallback, useContext } from "react";

import useSWR from "swr";

import { balanceContext } from "../../context/BalanceProvider";

import { transactionApi } from "../../../../api/transactionApi";

import "./Balance.css";

const DANGER_BALANCE = 500;

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
          <span className="bold balance-title">BALANCE : </span>
          <span
            className={
              balance >= DANGER_BALANCE
                ? "balance-green bold"
                : "balance-red bold"
            }
          >
            {balance}
          </span>
        </>
      )}
    </div>
  );
};
