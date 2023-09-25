import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { Outlet, Link } from "react-router-dom";
const Profilepopup = ({anchorEl, handleClose}) =>{ 

return(    
<Menu
id="menu-appbar"
anchorEl={anchorEl}
anchorOrigin={{
  vertical: 'top',
  horizontal: 'right',
}}
keepMounted
transformOrigin={{
  vertical: 'top',
  horizontal: 'right',
}}
open={Boolean(anchorEl)}
onClose={handleClose}
>
<Link to="/signin">
<MenuItem onClick={handleClose}>Login</MenuItem>
</ Link>
<Link to= "/signup">
<MenuItem onClick={handleClose}>SignUp</MenuItem>
</Link>
</Menu>
)
}

export default Profilepopup;