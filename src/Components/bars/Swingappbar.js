import React from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Logo from "./Swingappbarfragments/Logo";
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Profile from "./Swingappbarfragments/Profile"; 

const Swingappbar = () => {
  return (
      <Box sx={{ flexGrow: 1}}>
      <AppBar position="fixed" sx={{backgroundColor: "black"}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Logo />
          </Typography>
          <Profile />
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Swingappbar;