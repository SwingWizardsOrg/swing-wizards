import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

const Drawertrigger =({toggleDrawer, anchor})=>{

    return(
        <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
        sx={{ mr: 2 }}
        onClick={toggleDrawer(anchor, true)}
      >
        <MenuIcon />
      </IconButton>
    )
}

export default Drawertrigger;