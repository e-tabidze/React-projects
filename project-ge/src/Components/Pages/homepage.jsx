import React from "react";
import ProductCard from "../productCard";

import Pagination from "../pagination";

import Filter from "../filter";

import "../../CSS/homepage.css";

const HomePage = ({metals, stones, jewelry, handleMetalSelect, handleStoneSelect}) => {

  return (
    <div className="homepage-main-container">
      <div className="filter-section">
        <Filter items={metals} onItemSelect={handleMetalSelect} />
        <Filter items={stones} onItemSelect={handleStoneSelect} />
      </div>
      <div>
        <div className="advertising-component"> აქ იქნება რეკლამის ბანერი</div>
        <div className="product-section">
          <ProductCard jewelry={jewelry} />
          {/* <Pagination
            numOfItems={6}
            numberOfItems={jewelry.length}
            onPageChange={handlePageChange}
          /> */}
        </div>
      </div>
      <div>აქაც რეკლამის ბანერი</div>
    </div>
  );
};

export default HomePage;
