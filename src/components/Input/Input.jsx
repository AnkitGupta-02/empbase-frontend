import React from 'react';
import classNames from 'classnames';

function Input({ type, name, value, onChange, placeholder, className,disabled }) {

  const finalclassName = classNames("px-4 py-2 border border-gray-300 w-full rounded-md focus:outline-none",className)
  return (
    <div className='flex justify-center px-3 py-2'>
        <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={finalclassName}
        disabled={disabled}
      />
    </div>
  )
}

export default Input;