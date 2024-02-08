import React, { useCallback, useState } from "react";
import { Transaction } from "./components";
import useSWR from "swr";
import { transactionApi } from "../api/transactionApi";

import "./Transactions.css";

export const Transactions = () => {
  const [transactions, setTransactions] = useState([]);

  const getTransactions = useCallback(async () => {
    const transactions = await transactionApi.getTransactions();

    setTransactions(transactions.reverse());
    return transactions;
  }, []);

  const { isLoading } = useSWR("api/transactions", getTransactions);

  const onDelete = (transaction) => {
    const transactionsClone = [...transactions];

    const idx = transactionsClone.findIndex(
      (trans) => transaction._id === trans._id
    );

    transactionsClone.splice(idx, 1);

    setTransactions(transactionsClone);
  };

  if (isLoading) {
    return "loading..";
  }

  return (
    <div className="transactions">
      {transactions.map((transaction) => (
        <Transaction
          key={transaction._id}
          transaction={transaction}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};
