import React from "react";
import { useLocation } from "react-router-dom";

import NavbarItem from "./NavbarItem/NavbarItem";
import ProfileCard from "./ProfileCard/ProfileCard";

function Navbar({ data }) {
  const path = [
    { label: "Home", href: "/", active: useLocation().pathname === "/" },
    {
      label: "Employee List",
      href: "/employee-list",
      active: useLocation().pathname === "/employee-list",
    },
    {
      label: "Add Employee",
      href: "/create-employee",
      active: useLocation().pathname === "/create-employee",
    },
  ];

  return (
    <nav className="flex items-center px-6 py-4 bg-slate-300">
      <div className="w-full ">
        {path.map((item) => (
          <NavbarItem key={item.label} {...item} />
        ))}
      </div>
      <div className="">
        <ProfileCard data={data} />
      </div>
    </nav>
  );
}

export default Navbar;
