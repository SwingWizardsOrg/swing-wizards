import React from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Logo from "./Swingappbarfragments/Logo";
import Profile from "./Swingappbarfragments/Profile";
import SwipeableTemporaryDrawer from "../Drawer/Drawer";

const Swingappbar = ({switchmode}) => {
  return (
      <Box sx={{ flexGrow: 1}}>
      <AppBar position="fixed" sx={{backgroundColor: "secondary.main",
      }}>
        <Toolbar>
            <SwipeableTemporaryDrawer switchmode={switchmode}/>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Logo />
          </Typography>
          <Profile />
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export {Swingappbar};