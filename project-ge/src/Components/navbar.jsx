import React, { useState } from "react";
import { Link } from "react-router-dom";

import "../CSS/navbar.css";

import logo from "../resources/logo.png";
import SearchBox from "./searchBox";
import Button from "./Reusable-Components/button";

const NavbarMenu = ({ handleSearchByName, handleModalActivation }) => {
  return (
    <Navbar>
      <NavItem
        component={
          <Link to="/">
            <img src={logo} alt="gegold logo" className="logo" />
          </Link>
        }
      />
      <NavItem
        component={<SearchBox handleSearchByName={handleSearchByName} />}
      />
      <NavItem
        component={
          <Button
            className="profile-button"
            label={"პირადი კაბინეტი"}
            onClick={handleModalActivation}
          />
        }
      />

      <NavItem component={<i className="fa fa-bars fa-2x" />}>
        <DropDownMenu />
      </NavItem>
    </Navbar>
  );
};

function DropDownMenu() {
  function DropDownItem(props) {
    return (
      <a href="#" className="menu-item">
        <span className="icon-button"> {props.leftIcon} </span>
        {props.children}
      </a>
    );
  }
  return (
    <div className="dropdown">
      <div className="menu">
        <Link to="/accountPage">
          <DropDownItem leftIcon={<i className="fa fa-user fa-lg" />}>
            My Profile
          </DropDownItem>
        </Link>
        <DropDownItem
          leftIcon={<i className="fa fa-cog fa-lg" />}
          goToMenu="settings"
        >
          Settings
        </DropDownItem>
      </div>
    </div>
  );
}

function Navbar(props) {
  return (
    <nav className="navbar">
      <ul className="navbar-nav"> {props.children} </ul>
    </nav>
  );
}

function NavItem(props) {
  const [open, setOpen] = useState(false);

  return (
    <li className="nav-item">
      <a href="#" className="icon-button" onMouseOver={() => setOpen(!open)}>
        {props.component}
      </a>
      {open && props.children}
    </li>
  );
}

export default NavbarMenu;
