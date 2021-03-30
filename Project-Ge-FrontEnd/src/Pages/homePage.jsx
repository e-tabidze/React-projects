import React, { useState, useEffect } from "react";
import {
  getJewels,
  getStones,
  getMetals,
  getPieces,
} from "../Services/APIEndpoints";
import Filter from "../Reusable components/filter";
import Pagination from "../Components/pagination";

import "../CSS/homePage.css";

const HomePage = ({ jewels, setJewels }) => {
  const [pieces, setPieces] = useState(null);
  const [metals, setMetals] = useState(null);
  const [stones, setStones] = useState(null);

  useEffect(() => {
    handleGetPieces();
    handleGetMetals();
    handleGetStones();
  }, []);

  const handleGetPieces = async () => {
    let piecesData = await getPieces();
    setPieces(piecesData);
  };

  const handleGetStones = async () => {
    let stonesData = await getStones();
    setStones(stonesData);
  };

  const handleGetMetals = async () => {
    let metalsData = await getMetals();
    setMetals(metalsData);
  };

  const handlePieceSelect = async (piece) => {
    let jewelArr = await getJewels();
    let newPieceArr = jewelArr.filter((item) => {
      return item.piece._id === piece._id;
    });
    setJewels(newPieceArr);
  };

  const handleMetalSelect = async (metal) => {
    let jewelArr = await getJewels();
    let newMetalArr = jewelArr.filter((item) => {
      return item.metal._id === metal._id;
    });
    setJewels(newMetalArr);
  };

  const handleStoneSelect = async (stone) => {
    let jewelArr = await getJewels();
    let newStoneArr = jewelArr.filter((item) => {
      return item.stone._id === stone._id;
    });
    setJewels(newStoneArr);
  };

  return (
    <div className="homepage-main-container">
      <div className="filter-section">
        <Filter
          items={pieces}
          title={"ნაკეთობა"}
          onItemSelect={handlePieceSelect}
        />
        <Filter
          items={metals}
          title={"მასალა"}
          onItemSelect={handleMetalSelect}
        />
        <Filter
          items={stones}
          title={"შიგთავსი"}
          onItemSelect={handleStoneSelect}
        />
      </div>
      <div>
        <div className="advertising-component"> აქ იქნება რეკლამის ბანერი</div>
        <div> {jewels.length != 0 && <Pagination jewels={jewels} />}</div>
      </div>
      <div>აქაც რეკლამის ბანერი</div>
    </div>
  );
};

export default HomePage;
