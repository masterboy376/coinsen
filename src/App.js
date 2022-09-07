import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Proposal from "./pages/Proposal";
import { ConnectButton } from "web3uikit";

const App = () => {
  return (
    <>
      <div className="header">
        <span style={{fontSize: "25px", fontWeight: "bold" , color:"white"}}>DAO</span>
        <ConnectButton />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/proposal" element={<Proposal />} />
      </Routes>
    </>
  );
};

export default App;
