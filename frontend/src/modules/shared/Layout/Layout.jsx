import React from "react";
import { Header } from "./components";
import { BalanceProvider } from "./context/BalanceProvider";

import "./Layout.css";

export const Layout = ({ children }) => {
  return (
    <div>
      <BalanceProvider>
        <>
          <Header />

          <div className="content">{children}</div>
        </>
      </BalanceProvider>
    </div>
  );
};
