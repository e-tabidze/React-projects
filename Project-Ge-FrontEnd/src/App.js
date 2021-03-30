import React, { useState, useEffect } from "react";
import { getJewels } from "./Services/APIEndpoints";
import { ToastContainer } from "react-toastify";
import { Route } from "react-router-dom";
import jwtDecode from "jwt-decode";
import Navbar from "./Components/navbar";
import HomePage from "./Pages/homePage";
import UserPage from "./Pages/userPage";
import Terms from "./Pages/terms";
import Footer from "./Components/footer";

import "react-toastify/dist/ReactToastify.css";
import "./App.css";

function App() {
  const [jewels, setJewels] = useState([]);
  const [currentUser, setCurrentUser] = useState("");

  useEffect(() => {
    handleGetJewels();
    getCurrentUser();
  }, []);

  const getCurrentUser = () => {
    try {
      const jwt = localStorage.getItem("token");
      let currentUserData = jwtDecode(jwt);
      setCurrentUser(currentUserData);
    } catch (ex) {}
  };

  const handleGetJewels = async () => {
    let jewelData = await getJewels(setJewels);
    setJewels(jewelData);
  };

  const handleSearchByName = async (symbols) => {
    let demoJewels = await getJewels();
    console.log(demoJewels);
    let filtered = demoJewels.filter((item) => {
      return item.name.toLowerCase().includes(symbols.toLowerCase());
    });
    setJewels(filtered);
  };

  return (
    <div className="App">
      <ToastContainer />
      <Navbar
        handleSearchByName={handleSearchByName}
        currentUser={currentUser}
      />
      <Route
        exact
        path="/"
        component={() => <HomePage jewels={jewels} setJewels={setJewels} />}
      />
      <Route
        exact
        path="/my-profile"
        render={(props) => {
          if (!currentUser) return null;
          return <UserPage {...props} currentUser={currentUser} />;
        }}
      />
      <Route exact path="/terms" component={Terms} />
      <Footer currentUser={currentUser} />
    </div>
  );
}

export default App;
