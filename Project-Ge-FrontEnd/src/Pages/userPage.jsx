import React, { useState } from "react";
import NewProductModal from "../Components/newProductModal";
import Circle from "../Reusable components/circle";

import "../CSS/userPage.css";

const UserPage = ({ currentUser }) => {
  const [newProductModalActive, setNewProductModalActive] = useState(false);

  const handleNewProductModalToggle = () => {
    setNewProductModalActive(!newProductModalActive);
  };
  console.log(currentUser);

  return (
    <div className="userpage-main-container">
      <div>რეკლამა აქ </div>
      <div className="content">
        <div>რეკლამა</div>
        <div className="user-settings">
          <div className="options">
            <Circle
              label="განცხადების დამატება"
              onClick={handleNewProductModalToggle}
            />

            {newProductModalActive && (
              <>
                <div className="newProductModal">
                  <NewProductModal
                    handleNewProductModalToggle={handleNewProductModalToggle}
                    currentUser={currentUser}
                  />
                </div>
                <div
                  className="grey-overlay"
                  onClick={handleNewProductModalToggle}
                ></div>
              </>
            )}
            <Circle label="ბალანსის შევსება" />
            <Circle label="განცხადების განახლება" />
            <Circle label="განცხადების წაშლა" />
            <Circle label="Super" />
            <Circle label="VIP" />
          </div>
          <div className="title">
            <p> ჩემი განცხადებები</p>
          </div>
        </div>
      </div>
      <div>რეკლამა</div>
    </div>
  );
};

export default UserPage;
