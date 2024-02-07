import React from "react";
import { Header } from "./components";
import { BalanceProvider } from "./context/BalanceProvider";

export const Layout = ({ children }) => {
  return (
    <div>
      <BalanceProvider>
        <>
          <Header />

          <>{children}</>
        </>
      </BalanceProvider>
    </div>
  );
};
