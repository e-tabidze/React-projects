import React from "react";

import "../../CSS/input.css";

const Input = ({
  name,
  value,
  onChange,
  type,
  placeholder,
  error,
  autoFocus,
  className,
}) => {
  return (
    <div>
      <input
        className="input-form"
        className={className}
        value={value}
        name={name}
        id={name}
        onChange={onChange}
        type={type}
        autoFocus={autoFocus}
        placeholder={placeholder}
      />
      {error && <div>{error}</div>}
    </div>
  );
};

export default Input;
