import React from "react";

import { Link } from "react-router-dom";

import { navLinkNames, navLinks } from "../../../../../consts";

import "./NavBar.css";

export const NavBar = () => {
  return (
    <ul className="nav-ul">
      <li>
        <Link className="nav-link" to={navLinks[navLinkNames.Transactions]}>
          {navLinkNames.Transactions}
        </Link>
      </li>
      <li>
        <Link className="nav-link" to={navLinks[navLinkNames.Operations]}>
          {navLinkNames.Operations}
        </Link>
      </li>
      <li>
        <Link className="nav-link" to={navLinks[navLinkNames.Breakdown]}>
          {navLinkNames.Breakdown}
        </Link>
      </li>
    </ul>
  );
};
