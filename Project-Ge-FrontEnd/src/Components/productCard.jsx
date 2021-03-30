import React from "react";

import "../CSS/productCard.css";

const ProductCard = ({ jewel }) => {
  console.log(jewel, "<==== Jewel");
  return (
    <div className="product-card">
      <div className="jewel-description"> {jewel.name} </div>
      <img
              src={`http://localhost:3000/${jewel.productImage}`}
              className="jewel-image"
              alt="gegold production"
            />
      <div className="jewel-price"> {`${jewel.price} ლარი`} </div>
      <div className="jewel-stone"> {jewel.stone.name} </div>
    </div>
  );
};

export default ProductCard;
