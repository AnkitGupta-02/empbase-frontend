import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import NavbarItem from "./NavbarItem/NavbarItem";
import Modal from "../../Modal";
import Button from "../../Button/Button";
import Loading from "../../Loading";
import useLoadingContext from "../../../hooks/use-LoadingContext";

import { logout } from "../../../Services/admin-api";

function Navbar({ data }) {
  const navigate = useNavigate();
  const { isLoading, setIsLoading } = useLoadingContext();
  const [showModal, setShowModal] = useState(false);

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

  const handleClose = () => {
    setShowModal(false);
  };

  const handleLogout = async () => {
    setIsLoading(true);
    try {
      await logout();
      toast.success("logout Successful", { autoClose: 2000 });
      navigate("/login");
    } catch (error) {
      toast.error(error?.response?.data?.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <nav className="flex items-center px-6 py-4 bg-slate-300">
      <div className="w-full ">
        {path.map((item) => (
          <NavbarItem key={item.label} {...item} />
        ))}
      </div>
      <div className="">
        <div
          className="p-4 bg-black rounded-full cursor-pointer"
          onClick={() => setShowModal(true)}
        />
        {showModal && (
          <Modal onClose={handleClose}>
            <div className="border ">
              <div>{data.name}</div>
              <div>{data.username}</div>
              <Button
                className={`${
                  isLoading ? "cursor-not-allowed" : "bg-blue-600"
                }`}
                onClick={handleLogout}
              >
                {isLoading ? <Loading /> : "logout"}
              </Button>
            </div>
          </Modal>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
