import * as React from 'react';
import styles from "../css/Signup_signin_switch.module.css";
import { Link } from "react-router-dom";
const Callout=(props)=>{


  return (
    <div className={styles.main}>   
    <div>
    <p className={styles.declaration}> {props.Declaration} </p>
    <Link to= {props.Link} >  <p className={styles.suggestion}> {props.Suggestion} </p> </Link>
    </div>
    </div>
  );
}
export {Callout};