import React from "react";

import "./Transaction.css";

export const Transaction = ({ transaction }) => {
  const { amount, category, vendor } = transaction;

  const handleDelete = () => {};

  return (
    <div className="transaction-card">
      <div className="left">
        <div className="trans-vendor">{vendor}</div>
        <div className="trans-category">{category}</div>
      </div>

      <div className="right">
        <div className="trans-amount">{amount}</div>
        <button onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
};
