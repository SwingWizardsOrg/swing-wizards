import axios from "axios";

const PostSignupData = (Data) => {
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
    })
    .catch((error) => {
      console.log(error);
    });
};

export default PostSignupData;
