import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { RxCross2 } from "react-icons/rx";

export default function Modal({ children, onClose }) {
  useEffect(() => {
    document.body.classList.add("overflow-hidden");

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, []);
  return ReactDOM.createPortal(
    <div>
      <div
        className="fixed inset-0 bg-gray-300 opacity-80"
        onClick={onClose}
      ></div>
      <div className="fixed p-4 bg-white inset-x-1/3 inset-y-1/3 rounded-xl">
        <div className="w-full h-full border">
          <div className="flex justify-end w-full">
            <RxCross2 size={25} onClick={onClose} />
          </div>
          <div className="">{children}</div>
        </div>
      </div>
    </div>,
    document.querySelector(".modal-container")
  );
}
