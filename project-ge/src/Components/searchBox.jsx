import React from "react";
import "../CSS/seachBox.css";

const SearchBox = ({handleSearchByName}) => {
  return (
    <div className="searchBox">
      <input className="input" placeholder="ძებნა..." onChange={e => handleSearchByName(e.target.value)}></input>
    </div>
  );
};

export default SearchBox;
