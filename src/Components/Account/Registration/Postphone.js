import axios from "axios";
import React from "react";
import Inputphonenumber from "./Inputphonenumber";

const Postphone = (props) => {

  const UserName = props.SwingUserName

  const PostToSwingServer=(Phonenumber)=>{

    const qs = require("qs");
    console.log(UserName+"username")
    console.log(Phonenumber+"phonenumber")

    axios
    .patch(
      "https://swingwizards.onrender.com/tradex/user/phonenumber",
      qs.stringify({
        username: UserName,
        phonenumber: Phonenumber
      })
    )
    .then((response) => {
      if (response?.status === 200) {
        
         console.log(response);
      }
    })
    .catch((error) => {
      if (!error?.response) {
        error("No Server Response");
      } else if (error.response?.status === 404) {
        error("All fields are required");
      } else if (error.response?.status === 500) {
        error("Username or Email Taken");
      } else {
        error("Registration Failed");
      }
      console.log(error);
      console.log(error.response);
    });
  }

  return(
    <div>
      <Inputphonenumber PostToSwingServer={PostToSwingServer}/>
    </div>
  )
};

export default Postphone;
