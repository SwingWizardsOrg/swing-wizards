import axios from "axios";
import React from "react";
import Inputphonenumber from "./Inputphonenumber";

<<<<<<< HEAD

=======
>>>>>>> b25d7c7c3e8fe12e4cc50565c9d9a5b2bfe1f172
const Postphone = (props) => {

  const UserName = props.SwingUserName

  const PostToSwingServer=(Phonenumber)=>{

    const qs = require("qs");
    console.log(UserName+"username")
    console.log(Phonenumber+"phonenumber")

    axios
<<<<<<< HEAD
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
=======
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
>>>>>>> b25d7c7c3e8fe12e4cc50565c9d9a5b2bfe1f172
  }

  return(
    <div>
      <Inputphonenumber PostToSwingServer={PostToSwingServer}/>
    </div>
  )
};

export default Postphone;
