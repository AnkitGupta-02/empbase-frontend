import React, { useState } from "react";
import { GoChevronDown } from "react-icons/go";

export default function Accordion({ list }) {
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState();

  const handleSelect = (item) => {
    setIsOpen(false);
    setValue(item);
  };

  function AccordionItem({ label, onClick }) {
    return <div  className="px-3 py-2 cursor-pointer hover:bg-neutral-200" onClick={onClick}>{label}</div>;
  }

  const renderList = list.map((item) => {
    return (
      <AccordionItem
        onClick={() => handleSelect(item)}
        key={item.label}
        {...item}
      />
    );
  });

  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="relative select-none ">
      <div onClick={handleClick} className="flex items-center w-full px-3 py-1 text-lg border rounded-md ">
        <div className="w-full pr-2 ">{value?.label || "Select..."}</div>
        <GoChevronDown />
      </div>
      {isOpen && <div className="absolute z-10 w-full bg-white border ">{renderList}</div>}
    </div>
  );
}
