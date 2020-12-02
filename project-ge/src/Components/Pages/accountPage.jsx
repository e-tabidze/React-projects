import React from "react";
import NavbarMenu from "../navbar";
import Option from "../Reusable-Components/option";

import "../../CSS/accountPage.css";

const AccountPage = () => {
  return (
    <div className="accountpage-main-container">
      <div>აქ არის რეკლამის ადგილი</div>
      <div className="content-area">
        <div>რეკლამის ადგილია აქაც </div>
        <div className="options-container">
          <div className="option">
            <p className="label"> განცხადების დამატება </p>
          </div>
          <div className="option">
            <p className="label"> ბალანსის შევსება </p>
          </div>
          <div className="option">
            <p className="label"> განცხადების განახლება</p>
          </div>
          <div className="option">
            <p className="label"> განცხადების წაშლა </p>
          </div>
          <div className="option">
            <p className="label"> Super </p>
          </div>
          <div className="option">
            <p className="label"> VIP </p>
          </div>
        </div>
        <div> ჩემი განცხადებები </div>
        <div className="my-products-container"></div>
      </div>
      <div>აქ არის რეკლამის ადგილი</div>
    </div>
  );
};

export default AccountPage;
