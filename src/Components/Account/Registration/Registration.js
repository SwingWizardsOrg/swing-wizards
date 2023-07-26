import axios from "axios";
import { toast } from 'react-toastify';
import SignUp from "./SignUp";
import React, { useState } from "react";
import Postphone from "./Postphone";


const Registration = () =>{

const [isRegistered,setRegistered]= useState(false)

const [SwingUserName, setSwingUserName]=useState(null)

const PostRegistrationData = (Data) => {
  
  const qs = require("qs");

    axios.post(
      "https://swingwizards.onrender.com/tradex/user/register",
      qs.stringify({
        firstname: Data.firstname,
        lastname: Data.lastname,
        username: Data.username,
        email: Data.email,
        password: Data.password,
      })
    )

    .then((response) => {
      if (response?.status === 201) {
        toast.success('Registration Successful')
        setSwingUserName(response.data.user.Username);
        console.log(SwingUserName);
        setRegistered(!isRegistered);
      }
    })
    .catch((error) => {
      if (!error?.response) {
        toast.error("No Server Response");
      } else if (error.response?.status === 404) {
        toast.error("All fields are required");
      } else if (error.response?.status === 500) {
        toast.error("Username or Email Taken");
      } else {
        toast.error("Registration Failed");
      }
      console.log(error);
      console.log(error.response);
    });
    console.log(isRegistered)
};

return(
  <div>
       {!isRegistered ? (
    <SignUp PostRegistrationData={PostRegistrationData}/>
  ) : (
    <Postphone SwingUserName={SwingUserName}/>
  )}
  
  </div>
)

}
export default Registration;
