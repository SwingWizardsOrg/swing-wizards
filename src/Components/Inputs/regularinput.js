import React, { useState } from 'react';
import styles from "../css/Regularinput.module.css";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
const Regularinput =(props)=>{
  const handleChange=props.Handlechange

  const[approve, setapprove]= useState(false)


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
        <input className={styles.input}  name={props.Label} onChange={change}/>
        <div className={styles.tick}>{approve ? (
        <CheckCircleOutlineIcon color='primary'/>):
        null }
        </div>
        </div>
        </div>
  );
}
export {Regularinput};