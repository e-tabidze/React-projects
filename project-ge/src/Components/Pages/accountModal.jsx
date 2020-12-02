import React from "react";

import LoginForm from "../loginForm";
import RegisterForm from "../registerForm";
import Divider from "../divider";

import "../../CSS/accountModal.css";

const AccountModal = ({ handleModalActivation }) => {
  return (
    <div className="accountmodal">
      <div className="decline" onClick={() => handleModalActivation()}>
        <i className="fa fa-times fa-2x" />
      </div>
      <div className="login">
        <LoginForm />
      </div>
      <div>
        <Divider />
      </div>
      <div className="register">
        <RegisterForm />
      </div>
    </div>
  );
};

export default AccountModal;
