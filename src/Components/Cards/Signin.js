import * as React from 'react';
import Card from '@mui/material/Card';
import styles from "../css/signup.module.css";
import { Regularinput } from '../Inputs/regularinput';
import { Passwordinput } from '../Inputs/passwordinput';
import Button from '@mui/material/Button';
import { Callout } from './Signup_signin_switch';
const Signin =()=>{
const [Inputs, setinputs]=React.useState({
})


const handleChange = (e) => {

  const name = e.target.name;
  const value = e.target.value;
  setinputs((values) => ({ ...values, [name]: value }));
};
const post = (e)=>{
console.log(Inputs)
}

  return (
    <Card>
    <div className={styles.main}>
    <div>
        <div className= {styles.signin}>         
          <Regularinput  Label="Username" Handlechange={handleChange}/>
          <Passwordinput Label= "Password" Handlechange={handleChange}/>
    <Button className={styles.MuiButton} variant="contained" sx={{ml:1.3}} disabled={false} onClick={post}>
        Sign in
      </Button>
        </div>
       
        <div className={styles.Callout}>
      <Callout Declaration="New to Swing Wizards?" Suggestion="Create an account" Link="/signup"/>
    </div>

        </div>
    </div>
    </Card>
  );
}
export {Signin};