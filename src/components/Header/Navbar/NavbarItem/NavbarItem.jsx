import React from "react";
import { Link } from "react-router-dom";

function NavbarItem({ label, href, active }) {
  return (
    <Link
      key={label}
      to={href}
      className={`font-bold text-lg rounded px-3 ${
        active && "text-blue-500"
      }`}
    >
      {label}
    </Link>
  );
}

export default NavbarItem;
