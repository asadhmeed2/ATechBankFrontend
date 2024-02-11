import React, { useCallback, useContext, useState } from "react";
import { transactionApi } from "../../../api/transactionApi";
import { balanceContext } from "../../../shared/Layout/context/BalanceProvider";

import "./OperationsCard.css";
import { redirect, useNavigate } from "react-router-dom";
import { navLinkNames, navLinks } from "../../../../consts";

const BUTTONS = {
  Deposit: "deposit-btn",
  Withdraw: "withdraw-btn",
};

export const OperationsCard = () => {
  const { addToBalance } = useContext(balanceContext);
  const [formValues, setFormValues] = useState({});
  const [formError, setFormError] = useState("");

  const [formSuccess, setFormSuccess] = useState("");

  const navigate = useNavigate();

  const onChange = (e) => {
    setFormValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = useCallback(
    (e) => {
      if (formValues.amount && formValues.vendor && formValues.category) {
        const currentAmount =
          e.target.id === BUTTONS.Deposit
            ? formValues.amount
            : -formValues.amount;

        const createdTransaction = {
          ...formValues,
          amount: currentAmount,
        };
        const result = transactionApi.addTransaction(createdTransaction);

        if (result) {
          addToBalance(currentAmount);
          setFormValues({});

          setFormSuccess("transaction success");

          setTimeout(() => {
            setFormSuccess("");
            navigate(navLinks[navLinkNames.Transactions]);
          }, 2000);
        } else {
          setFormError("Error please try again ");

          setTimeout(() => {
            setFormError("");
          }, 2000);
        }
      }
    },
    [addToBalance, formValues, navigate]
  );

  return (
    <div className="operations-card">
      <div className="operation-title">Insert Transactions </div>
      {/* INPUT amount */}
      <input
        name="amount"
        className="ipt-amount"
        placeholder="Transaction amount"
        onChange={onChange}
        value={formValues.amount ?? ""}
      />

      {/* INPUT vendor */}
      <input
        name="vendor"
        className="ipt-vendor"
        placeholder="Transaction vendor"
        onChange={onChange}
        value={formValues.vendor ?? ""}
      />

      {/* INPUT category */}
      <input
        name="category"
        className="ipt-category"
        placeholder="Transaction category"
        onChange={onChange}
        value={formValues.category ?? ""}
      />

      {!!formError && <div className="error message">{formError}</div>}
      {!!formSuccess && <div className="success message">{formSuccess}</div>}

      <div className="operations-btns">
        {/* BUTTON Withdraw */}
        <button id={BUTTONS.Deposit} onClick={handleSubmit}>
          Deposit
        </button>

        {/* BUTTON Deposit */}
        <button id={BUTTONS.Withdraw} onClick={handleSubmit}>
          Withdraw
        </button>
      </div>
    </div>
  );
};
