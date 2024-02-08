import React, { useState, createContext } from "react";

export const balanceContext = createContext();

export const BalanceProvider = ({ children }) => {
  const [balance, setBalance] = useState(0);

  const updateBalance = (balance) => {
    setBalance(balance);
  };

  const addToBalance = (value) => {
    setBalance((prev) => prev + Number(value));
  };

  return (
    <balanceContext.Provider value={{ balance, updateBalance, addToBalance }}>
      {children}
    </balanceContext.Provider>
  );
};
