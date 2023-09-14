
import Switch from '@mui/material/Switch';


const DrawerOptions=({switchmode})=>{

return(   
    <div> 
       <Switch
    //checked={checked}
    onChange={switchmode}
      inputProps={{ 'aria-label': 'controlled' }}
      defaultChecked />
</div>
)
}

export {DrawerOptions}