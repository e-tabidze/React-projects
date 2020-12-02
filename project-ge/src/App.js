import React, { useState, useEffect } from "react";
// import { Route, Switch } from "react-router-dom";
import "./App.css";
import AccountPage from "./Components/Pages/accountPage";
import MainPage from "./Components/Pages/mainPage";

function App() {
  return (
    <div className="App">
      <MainPage />
      {/* <Switch>
        <Route exact path="/" component={MainPage} />
      </Switch> */}
      {/* <AccountPage /> */}
    </div>
  );
} 

export default App;
