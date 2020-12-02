import React from "react";

import "../CSS/productCard.css";

const ProductCard = ({jewelry}) => {
  
  return (
    <div className="product-section">
      {jewelry &&
        jewelry.map((jewel) => (
          <div className="product-card" key={jewel._id}>
            <div className="jewel-description"> {jewel.jewellery} </div>

            <img
              src={jewel.image}
              className="jewel-image"
              alt="gegold production"
            />
            <div className="jewel-price"> {`${jewel.price} ლარი`} </div>
            <div className="jewel-stone"> {jewel.stone.name} </div>
          </div>
        ))}
    </div>
  );
};

export default ProductCard;
