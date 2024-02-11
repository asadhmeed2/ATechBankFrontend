import React from "react";

import { Link, useLocation } from "react-router-dom";

import { navLinkNames, navLinks } from "../../../../../consts";

import "./NavBar.css";

export const NavBar = () => {
  const location = useLocation();
  const { hash, pathname, search } = location;

  const isSelected = (string) => {
    return pathname === string ? "selected" : "";
  };

  return (
    <ul className="nav-ul">
      <li>
        <Link
          className={`nav-link ${isSelected(
            navLinks[navLinkNames.Transactions]
          )} `}
          to={navLinks[navLinkNames.Transactions]}
        >
          {navLinkNames.Transactions}
        </Link>
      </li>
      <li>
        <Link
          className={`nav-link ${isSelected(
            navLinks[navLinkNames.Operations]
          )} `}
          to={navLinks[navLinkNames.Operations]}
        >
          {navLinkNames.Operations}
        </Link>
      </li>
      <li>
        <Link
          className={`nav-link ${isSelected(
            navLinks[navLinkNames.Breakdown]
          )} `}
          to={navLinks[navLinkNames.Breakdown]}
        >
          {navLinkNames.Breakdown}
        </Link>
      </li>
    </ul>
  );
};
