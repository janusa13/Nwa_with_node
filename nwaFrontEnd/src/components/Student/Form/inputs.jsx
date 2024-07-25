import React from "react";

const Input = ({ htmlFor, type, name, placeholder, value, onChange }) => {
    return (
        <div>
            <label htmlFor={htmlFor} className='mb-[10px] block text-base font-medium text-dark dark:text-white'>
                {placeholder}
                <input
                    className="className='w-full bg-transparent rounded-md border border-stroke dark:border-dark-3 py-[10px] px-5 text-dark-6 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2 disabled:border-gray-2'"
                    id={htmlFor}
                    type={type}
                    name={name}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                />
            </label>
        </div>
    );
};

export default Input;
