import axios from "axios";
import { toast } from 'react-toastify';

const PostLogininData = (Data) => {
  const qs = require("qs");
  axios
    .post(
      "https://swingwizards.onrender.com/tradex/user/login",
      qs.stringify({
        username: Data.username,
        password: Data.password,
      })
    )
    .then((response) => {
      console.log(response);
      toast.success('Login Successful')
    })
    .catch((error) => {
      if (!error?.response) {
        toast.error("No Server Response");
      } else if (error.response?.status === 409) {
        toast.error("Username of password required");
      }else {
        toast.error("Login Failed");
      }
      console.log(error.response);
      console.log(error);
    });
};

export default PostLogininData;
