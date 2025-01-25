import React, { useEffect, useRef, useState } from "react";
import { GoChevronDown } from "react-icons/go";

export default function Accordion({ name, list, onChange, placeholder }) {
  const [isOpen, setIsOpen] = useState(false);
  const [select, setSelect] = useState("");
  const divEl = useRef();

 useEffect(()=>{
  const handler = (event) => {
    if(divEl.current && !divEl.current.contains(event.target)){
    setIsOpen(false);
    }
   };
  
   document.addEventListener("click",handler,true);
  
   return () => {
    document.removeEventListener("click",handler);
   };
 },[]);

  const onSelect = (item) => {
    setIsOpen(false);
    setSelect(item);
    onChange(name, item);
  };

  function AccordionItem({ label, onClick }) {
    return (
      <div
        className="px-3 py-2 cursor-pointer hover:bg-neutral-200"
        onClick={onClick}
      >
        {label}
      </div>
    );
  }

  const renderList = list.map((item) => {
    return (
      <AccordionItem
        onClick={() => onSelect(item)}
        key={item.label}
        {...item}
      />
    );
  });

  return (
    <div ref={divEl} className="relative select-none ">
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center w-full px-2 text-lg border border-gray-300 rounded-md"
      >
        <input placeholder={placeholder} value={select?.label || ''} readOnly className="w-full py-1.5 bg-white outline-none"/>
        <GoChevronDown size={22} />
      </div>
      {isOpen && (
        <div className="absolute z-10 w-full bg-white border ">
          {renderList}
        </div>
      )}
    </div>
  );
}
