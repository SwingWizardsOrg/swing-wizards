import React from "react"
import Home from "./Pages/Home";
import { Routes, Route } from "react-router-dom";
import {isMobile} from 'react-device-detect';

function App() {

  return (

    <div>
     {!isMobile ? (
      <Routes>
        <Route exact path="/" element={<Home />} />

      </Routes> ) : (
        <div>
       This website is temporarily only available for Desktop Devices
        </div>
      )
}
    </div>
  );
}

export default App;
