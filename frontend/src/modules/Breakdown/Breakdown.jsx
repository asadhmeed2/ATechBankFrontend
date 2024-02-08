import React, { useCallback, useState } from "react";

import useSWR from "swr";

import { transactionApi } from "../api/transactionApi";

import { BreakdownList } from "./components/BreakdownList/BreakdownList";

import "./Breakdown.css";

export const Breakdown = () => {
  const handleFetchData = useCallback(async () => {
    const data = await transactionApi.getBreakdownData();

    return data;
  }, []);

  const { data, isLoading } = useSWR("byCategory/sum", handleFetchData);

  if (isLoading) {
    return <>loading...</>;
  }

  return (
    <div className="breakdown">
      <BreakdownList breakdownList={data} />
    </div>
  );
};
