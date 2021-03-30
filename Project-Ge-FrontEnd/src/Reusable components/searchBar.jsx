import React from "react";
import "../CSS/searchBar.css";

const SearchBar = ({ onChange }) => {
  return (
    <div className="searchBox">
      <input
        className="input"
        placeholder="ძებნა..."
        onChange={(e) => onChange(e.target.value)}
      ></input>
    </div>
  );
};

export default SearchBar;
