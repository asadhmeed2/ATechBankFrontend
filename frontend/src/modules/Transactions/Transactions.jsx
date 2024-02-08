import React, { useCallback, useState } from "react";
import { Transaction } from "./components";
import useSWR from "swr";
import { transactionApi } from "../api/transactionApi";

import "./Transactions.css";

export const Transactions = () => {
  const [transactions, setTransactions] = useState([]);

  const getTransactions = useCallback(async () => {
    const transactions = await transactionApi.getTransactions();

    setTransactions(transactions);
    return transactions;
  }, []);

  const { isLoading } = useSWR("api/transactions", getTransactions);

  if (isLoading) {
    return "loading..";
  }

  return (
    <div className="transactions">
      {transactions.map((transaction) => (
        <Transaction key={transaction._id} transaction={transaction} />
      ))}
    </div>
  );
};
