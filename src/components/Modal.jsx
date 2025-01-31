import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { RxCross2 } from "react-icons/rx";
import classNames from "classnames";

export default function Modal({ children, onClose, className }) {
  useEffect(() => {
    document.body.classList.add("overflow-hidden");

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, []);

  const finalclassName = classNames(
    "fixed w-[350px] bg-white shadow-lg h-auto rounded-xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-4",
    className
  );

  return ReactDOM.createPortal(
    <>
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className={finalclassName}>
        <div className="flex justify-end">
          <span onClick={onClose} className="text-gray-500 hover:text-gray-800">
            <RxCross2 size={25} />
          </span>
        </div>
        <div>{children}</div>
      </div>
    </>,
    document.querySelector(".modal-container")
  );
}
