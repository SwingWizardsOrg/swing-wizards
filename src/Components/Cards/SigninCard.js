import * as React from 'react';
import Card from '@mui/material/Card';
import styles from "../css/signup.module.css";
import { Regularinput } from '../Inputs/regularinput';
import { Passwordinput } from '../Inputs/passwordinput';
import Button from '@mui/material/Button';
const SignUp =()=>{
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
        <div className= {styles.signin}> 
        <Regularinput Label= "Firstname" Limit={1} Handlechange={handleChange} />
        <Regularinput Label= "Lastname" Limit={1} Handlechange={handleChange}/>        
          <Regularinput  Label="Username (minimum of 4 characters)" Limit={4} Handlechange={handleChange}/>
          <Regularinput Label= "Email" Limit={10} Handlechange={handleChange}/>
          <Passwordinput Label= "Password (minimum of 8 characters)" Limit={8} Handlechange={handleChange}/>
    <Button className={styles.MuiButton} variant="contained" sx={{ml:1.3}} disabled={false} onClick={post}>
        Sign up
      </Button>
        </div>
    </div>
    </Card>
  );
}
export {SignUp};