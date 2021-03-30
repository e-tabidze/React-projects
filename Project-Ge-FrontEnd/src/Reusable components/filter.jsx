import React from "react";

import "../CSS/filter.css";

const Filter = ({ items, title, onItemSelect }) => {
  return (
    <div>
      <span className="filterTitle"> {title} </span>
      <div className="filter-main-container">
        {items &&
          items.map((item, index) => (
            <ul key={index} className="filter-container">
              <li onClick={() => onItemSelect(item)} className="filter-option">
                {item.name}
              </li>
            </ul>
          ))}
      </div>
    </div>
  );
};

export default Filter;
