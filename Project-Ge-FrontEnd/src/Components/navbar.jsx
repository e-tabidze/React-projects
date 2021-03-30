import React, { useState } from "react";
import { Link } from "react-router-dom";
import SearchBar from "../Reusable components/searchBar";
import Button from "../Reusable components/button";
import DropDownMenu from "./dropdownMenu";
import AccountModal from "./accountModal";
import logo from "../Resources/images/logo.png";
import MenuItem from "../Reusable components/menuItem";

import "../CSS/navbar.css";

const Navbar = ({ handleSearchByName, currentUser }) => {
  const [dropDownActive, setDropDownActive] = useState(false);
  const [accountModalActive, setAccoutModalActive] = useState(false);

  const handleAccountModalToggle = () => {
    setAccoutModalActive(!accountModalActive);
  };

  const handleDropDownMenuToggle = () => {
    setDropDownActive(!dropDownActive);
  };

  const handleNavigation = (e) => {
    e.preventDefault();
    window.location.href = "/my-profile";
  };

  return (
    <div className="navbar-main-container">
      <Link to="/">
        <img src={logo} alt="gegold logo" className="logo" />
      </Link>

      <SearchBar onChange={handleSearchByName} />
      
      {currentUser && (
        <Link to="/my-profile">
          <span className="email-initial">{currentUser.email.charAt(0)}</span>
        </Link>
      )}

      {currentUser ? (
        <Button
          className="profile-button"
          label="პირადი კაბინეტი"
          onClick={handleNavigation}
        />
      ) : (
        <Button
          className="profile-button"
          label="პირადი კაბინეტი"
          onClick={handleAccountModalToggle}
        />
      )}

      {accountModalActive && (
        <>
          <div className="accountModal">
            <AccountModal handleAccountModalToggle={handleAccountModalToggle} />
          </div>
          <div
            className="grey-overlay"
            onClick={handleAccountModalToggle}
          ></div>
        </>
      )}

      <MenuItem
        icon={<i className="fa fa-bars fa-2x" />}
        className="fa fa-bars fa-2x"
        onClick={handleDropDownMenuToggle}
      />

      {dropDownActive && (
        <>
          <div className="dropdown">
            <DropDownMenu
              currentUser={currentUser}
              onClick={handleDropDownMenuToggle}
              handleAccountModalToggle={handleAccountModalToggle}
            />
          </div>
          <div
            className="grey-overlay"
            onClick={handleDropDownMenuToggle}
          ></div>
        </>
      )}
    </div>
  );
};

export default Navbar;
