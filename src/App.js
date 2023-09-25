import React, {useState} from "react"
import {Home} from "./Pages/Home";
import { Routes, Route } from "react-router-dom";
import {isMobile} from 'react-device-detect';
import SwipeableTemporaryDrawer from "./Components/Drawer/Drawer";
import Registration from "./Components/Account/Registration/Registration";
import {createTheme, ThemeProvider} from "@mui/material";
import { SignUp } from "./Components/Cards/SigninCard";
import { Signin } from "./Components/Cards/Signin";



function App() {

  const [Darkmode, setDarkmode]= useState(true)

  const switchmode = () => {
  setDarkmode(!Darkmode)
  }

  const theme= createTheme(
    {
      palette:{
        secondary:{
          main: Darkmode ? '#010409' : '#FFFFFF',
        },
      }
    },
  )
  //'#0d1117'
  //'#21262d'
  return (
    <ThemeProvider theme={theme}>
    <div>
     {!isMobile ? (
      <Routes>
        <Route exact path="/" element={<Home switchmode={switchmode} />} />
        <Route exact path="/drawer" element={<SwipeableTemporaryDrawer />} />
        <Route exact path="/registration" element={<Registration />} />
        <Route exact path="/signup" element={<SignUp />} />
        <Route exact path="/signin" element={<Signin />} />
      </Routes> ) : (
        <div>
          This website is temporarily only available for Desktop Devices
        </div>
      )}
    </div>
    </ThemeProvider>
  );
}

export default App;
