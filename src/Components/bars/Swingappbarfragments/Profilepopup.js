import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';

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
<MenuItem onClick={handleClose}>Login</MenuItem>
<MenuItem onClick={handleClose}>SignUp</MenuItem>
</Menu>
)
}

export default Profilepopup;