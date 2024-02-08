import React from "react";

import "./BreakdownItem.css";

export const BreakdownItem = ({ item }) => {
  return (
    <div className="Breakdown-list-item">
      <span className="">{item._id} : </span>
      <span className="">{item.count}</span>
    </div>
  );
};
