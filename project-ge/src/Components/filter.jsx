import React from "react";

import "../CSS/filter.css";

const Filter = ({ items, onItemSelect }) => {
  return (
    <div>
      <div className="filter-main-container">
        {items &&
          items.map((item) => (
            <ul key={item._id} className="filter-container">
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
