import React, { useState } from 'react';
import styles from "../css/Passwordinput.module.css";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import IconButton from "@mui/material/IconButton";
const Passwordinput =(props)=>{
    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);
  
    const handleMouseDownPassword = (event) => {
      event.preventDefault();
    };
  const[approve, setapprove]= useState(false)
  const handleChange=props.Handlechange
  const change=(e)=>{
    setapprove(e.target.value.length > props.Limit-1
      ? e.target.value.length
      : 0 );
      handleChange(e);
      
  }


  return (
    <div className={styles.main}>
        <div className={styles.fieldname}> {props.Label}</div>
        <div className= {styles.container}>
        <input type={showPassword ? "text" : "password"} className={styles.input}  name={props.Label} onChange={change}/>
        <div className={styles.tick}>{approve ? (
        <CheckCircleOutlineIcon color='primary'/>):
        null }
        </div>
        <div className={styles.passwordtype}>
            <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                    sx={{ color: "white"}}
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton></div>
        </div>
        </div>
  );
}
export {Passwordinput};