import React from "react";
import { BreakdownItem } from "../BreakdownItem";

import "./BreakdownList.css";

export const BreakdownList = ({ breakdownList }) => {
  return (
    <div className="breakdown-list">
      <span className="breakdown-list-title">BreakDown</span>

      {breakdownList.map((breakdown) => (
        <BreakdownItem key={breakdown._id} item={breakdown} />
      ))}
    </div>
  );
};
