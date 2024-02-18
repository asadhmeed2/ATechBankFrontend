import React, { useState, createContext } from "react";
import useSWR from "swr";
import { transactionApi } from "../../../api/transactionApi";

export const balanceContext = createContext();

export const BalanceProvider = ({ children }) => {
  const [balance, setBalance] = useState(0);
  const [currencyExchange, setCurrencyExchange] = useState(1);

  const onGetCurrencyExchange = async (balance) => {
    const results = await transactionApi.getCurrencyExchange("usa");

    setCurrencyExchange(results);
  };

  const { _, isLoading } = useSWR("/currency", onGetCurrencyExchange);

  const updateBalance = (balance) => {
    setBalance(balance);
  };

  const updateCurrencyExchange = (balance) => {
    setCurrencyExchange(balance);
  };

  const addToBalance = (value) => {
    setBalance((prev) => prev + Number(value));
  };

  return (
    <balanceContext.Provider
      value={{
        balance,
        updateBalance,
        addToBalance,
        currencyExchange,
        updateCurrencyExchange,
      }}
    >
      {children}
    </balanceContext.Provider>
  );
};
