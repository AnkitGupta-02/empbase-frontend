import React, { useCallback, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import NavbarItem from "./NavbarItem/NavbarItem";
import ProfileCard from "./ProfileCard/ProfileCard";

import { fetchAdmin } from "../../../Services/admin-api";

function Navbar({data}) {
  const [isOpen, setIsOpen] = useState(false);

  const path = [
    { label: "Home", href: "/", active: useLocation().pathname === "/" },
    {
      label: "Employee List",
      href: "/employee-list",
      active: useLocation().pathname === "/employee-list",
    },
  ];

  return (
    <nav className="flex items-center px-6 py-4 bg-slate-300">
      <div className="w-full ">
        {path.map((item) => (
          <NavbarItem key={item.label} {...item} />
        ))}
      </div>

      <div
        className="p-4 bg-black rounded-full cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      />
      {isOpen && <ProfileCard {...data} />}
    </nav>
  );
}

export default Navbar;
