import React from "react";

const Select = ({ htmlFor, name, options, value, onChange }) => {
    return (
        <div>
            <label htmlFor={htmlFor}>
                {name}
                <select
                    id={htmlFor}
                    name={name}
                    value={value}
                    onChange={onChange}
                >
                    {options.map((option, index) => (
                        <option key={index} value={option}>
                            {option}
                        </option>
                    ))}
                </select>
            </label>
        </div>
    );
};

export default Select;
