import React, { useContext } from "react";

import "./Transaction.css";
import { balanceContext } from "../../../shared/Layout/context/BalanceProvider";
import { transactionApi } from "../../../api/transactionApi";

export const Transaction = ({ transaction, onDelete }) => {
  const { amount, category, vendor } = transaction;

  const { addToBalance } = useContext(balanceContext);

  const handleDelete = async () => {
    const result = await transactionApi.deleteTransaction(transaction._id);

    if (result === true) {
      addToBalance(-transaction.amount);
      onDelete(transaction);
    }
  };

  return (
    <div className="transaction-card">
      <div className="left trans-section">
        <div className="trans-vendor">{vendor}</div>

        <div className="trans-category">{category}</div>
      </div>

      <div className="right trans-section">
        <div className="trans-amount">{amount}</div>

        <div className="">
          <button className="trans-btn" onClick={handleDelete}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};
