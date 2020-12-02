import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./homepage";
import NavbarMenu from "../navbar";

import { getJewelry, getMetals, getStones } from "../../data/production";
import AccountModal from "./accountModal";
import "../../CSS/mainPage.css";

const MainPage = () => {
  const [metals, setMetals] = useState(null);
  const [stones, setStones] = useState(null);
  const [jewelry, setJewelry] = useState(null);
  const [accountModalActive, toggleAccountModalActive] = useState(false);

  useEffect(() => {
    setMetals(getMetals);
    setStones(getStones);
    setJewelry(getJewelry);
  }, []);

  const handleMetalSelect = (metal) => {
    let jewelArr = getJewelry();
    let newMetalArr = jewelArr.filter((item) => {
      return item.metal.id === metal.id;
    });
    setJewelry(newMetalArr);
  };

  const handleStoneSelect = (stone) => {
    let jewelArr = getJewelry();
    let newStoneArr = jewelArr.filter((item) => {
      return item.stone.id === stone.id;
    });
    setJewelry(newStoneArr);
  };

  const handleSearchByName = (itemName) => {
    let jewelArr = getJewelry();

    if (itemName.length >= 3) {
      let newJewelArr = jewelArr.filter((item) => {
        return item.jewellery.toLowerCase().includes(itemName.toLowerCase());
      });
      setJewelry(newJewelArr);
    } else {
      setJewelry(jewelArr);
    }
  };

  const handleModalActivation = () => {
    toggleAccountModalActive(!accountModalActive);
  };

  return (
    <div className="main-container">
      <Switch>
        <Route exact path="/" component={MainPage} />
      </Switch>
      
      <NavbarMenu
        handleSearchByName={handleSearchByName}
        handleModalActivation={handleModalActivation}
      />
      <HomePage
        metals={metals}
        stones={stones}
        jewelry={jewelry}
        handleMetalSelect={handleMetalSelect}
        handleStoneSelect={handleStoneSelect}
      />

      {accountModalActive && (
        <>
          <div className="auth-container">
            <div className="auth-wrapper">
              <AccountModal handleModalActivation={handleModalActivation} />
            </div>
          </div>
          <div
            className="grey-overlay"
            onClick={() => handleModalActivation()}
          ></div>
        </>
      )}
    </div>
  );
};

export default MainPage;
