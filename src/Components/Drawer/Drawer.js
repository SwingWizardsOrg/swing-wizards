import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Drawertrigger from '../bars/Swingappbarfragments/Drawertrigger';
import { DrawerOptions } from './DrawerOptions';

export default function SwipeableTemporaryDrawer({switchmode}) {
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: 300, backgroundColor: "secondary.main", color: "white", height: "100%"}}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
      
    >
      <DrawerOptions switchmode={switchmode}/>
    </Box>
  );
const anchor= "left"
  return (
    <div>
        <React.Fragment key={anchor}>
          <Drawertrigger toggleDrawer={toggleDrawer} anchor={anchor}/>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
    </div>
  );
}