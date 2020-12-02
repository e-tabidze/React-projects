import React from "react";

import "../../CSS/option.css";

const Option = ({ label }) => {
  return (
    <div className="option-main-container">
      <span className="label" >{label} </span>
    </div>
  );
};

export default Option;
