import React from "react";
import { isMobile } from "react-device-detect";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";

function App() {
  return (
    <div>
      {!isMobile ? (
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
      ) : (
        <div>
          This website is temporarily only available for Desktop Devices
        </div>
      )}
    </div>
  );
}

export default App;
