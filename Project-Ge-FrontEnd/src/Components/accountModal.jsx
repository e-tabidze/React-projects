import React from "react";
import LoginForm from "./loginForm";
import RegisterForm from "./registerForm";
import Divider from "../Reusable components/divider";
import MenuItem from "../Reusable components/menuItem";

import "../CSS/accountModal.css";

const AccountModal = ({ handleAccountModalToggle }) => {
  return (
    <div className="account-modal-container">
      <div className="account-modal-wrapper">
        <MenuItem className="fa fa-times fa-2x" onClick={handleAccountModalToggle} />
        <LoginForm handleModalToggle={handleAccountModalToggle} />
        <Divider />
        <RegisterForm handleModalToggle={handleAccountModalToggle} />
      </div>
    </div>
  );
};

export default AccountModal;
