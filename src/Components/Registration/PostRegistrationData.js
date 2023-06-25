import axios from "axios";
import { toast } from 'react-toastify';

const PostRegistrationData = (Data) => {
  const qs = require("qs");
  axios
    .post(
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
      console.log(response);
      toast.success('Registration Successful')
    })
    .catch((error) => {
      if (!error?.response) {
        toast.error("No Server Response");
      } else if (error.response?.status === 401) {
        toast.error("All fields are required");
      } else if (error.response?.status === 404) {
        toast.error("Username or Email Taken");
      } else {
        toast.error("Registration Failed");
      }
      console.log(error);
      console.log(error.response);
    });
};

export default PostRegistrationData;