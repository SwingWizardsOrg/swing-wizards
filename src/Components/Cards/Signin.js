import * as React from 'react';
import Card from '@mui/material/Card';
import styles from "../css/SignUp.module.css";
import { Regularinput } from '../Inputs/regularinput';
import { Passwordinput } from '../Inputs/passwordinput';
import Button from '@mui/material/Button';
const Signin =()=>{
const [Inputs, setinputs]=React.useState({
})

const[buttonstatus, setbuttonstatus]=React.useState(0)

const handleChange = (e) => {

  const name = e.target.name;
  const value = e.target.value;
  setinputs((values) => ({ ...values, [name]: value }));
};
const post = (e)=>{
console.log(Inputs)
console.log(buttonstatus)
}

  return (
    <Card>
    <div className={styles.main}>
        <div className= {styles.signin}>         
          <Regularinput  Label="Username" Handlechange={handleChange}/>
          <Passwordinput Label= "Password" Handlechange={handleChange}/>
    <Button className={styles.MuiButton} variant="contained" sx={{ml:1.3}} disabled={buttonstatus} onClick={post}>
        Sign in
      </Button>
        </div>
    </div>
    </Card>
  );
}
export {Signin};