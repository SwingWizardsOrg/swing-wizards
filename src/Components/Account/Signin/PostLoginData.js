import axios from "axios";
import { toast } from 'react-toastify';
// import { useNavigation } from 'react-router-dom'

const PostLogininData = (Data) => {

  // const navigate = useNavigation()

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
      if (response?.status === 201) {
        // navigate('/')
        toast.success('Login Successful')
        console.log(response);
      }
    })
    .catch((error) => {
      if (!error?.response) {
        toast.error("No Server Response");
      } else if (error.response?.status === 401) {
        toast.error("Invalid Username of Password");
      } else if (error.response?.status === 404) {
        toast.error("Record not found");
      } else {
        toast.error("Login Failed");
      }
      console.log(error.response);
      console.log(error);
    });
};

export default PostLogininData;
