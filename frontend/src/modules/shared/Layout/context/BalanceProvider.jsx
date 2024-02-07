import React, { useState, createContext } from "react";

export const balanceContext = createContext();

export const BalanceProvider = ({ children }) => {
  const [balance, setBalance] = useState(0);

  const updateBalance = (balance) => {
    setBalance(balance);
  };

  return (
    <balanceContext.Provider value={{ balance, updateBalance }}>
      {children}
    </balanceContext.Provider>
  );
};
