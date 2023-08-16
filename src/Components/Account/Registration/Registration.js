import axios from "axios";
import { toast } from "react-toastify";
import SignUp from "./SignUp";
import React, { useState } from "react";
import Postphone from "./Postphone";
import Popup from "./Popup";

const Registration = () => {
  const [isRegistered, setRegistered] = useState({
    State: false,
    Submitted: {
      State: false,
      SwingError: null,
    },
  });
  const [errorstate, seterrorstate] = useState(false);
  const [SwingUserName, setSwingUserName] = useState(null);

  const RetrySwingSubmission = (event) => {
    event.preventDefault();
    setRegistered(
      Object.assign({}, isRegistered, {
        Submitted: {
          State: false,
        },
      })
    );
    seterrorstate(false);
  };

  const PostRegistrationData = (Data) => {
    setRegistered(
      Object.assign({}, isRegistered, {
        Submitted: {
          State: true,
        },
      })
    );

    const qs = require("qs");

    axios
      .post(
        "https://swingwizards.onrender.com/tradex/user/register",
        qs.stringify({
          firstname: Data.firstname.Value,
          lastname: Data.lastname.Value,
          username: Data.username.Value,
          email: Data.email.Value,
          password: Data.password.Value,
        })
      )

      .then((response) => {
        if (response?.status === 201) {
          toast.success("Registration Successful");
          setSwingUserName(response.data.user.Username);
          console.log(SwingUserName);
          setRegistered(
            Object.assign({}, isRegistered, {
              State: true,
            })
          );
        }
      })
      .catch((error) => {
        console.log(error);
        console.log(error.response);
        seterrorstate(true);
        if (!error?.response) {
          setRegistered(
            Object.assign({}, isRegistered, {
              Submitted: {
                SwingError: "No Server Response",
              },
            })
          );
        } else if (error.response?.status === 404) {
          setRegistered(
            Object.assign({}, isRegistered, {
              Submitted: {
                SwingError: "All Fields Are Required",
              },
            })
          );
        } else if (error.response?.status === 500) {
          setRegistered(
            Object.assign({}, isRegistered, {
              Submitted: {
                SwingError: "Username or Email Taken",
              },
            })
          );
        } else {
          setRegistered(
            Object.assign({}, isRegistered, {
              Submitted: {
                SwingError: "Registration Failed",
              },
            })
          );
        }
      });
    console.log(isRegistered);
  };

  return (
    <div>
      {!isRegistered.State &&
        (isRegistered.Submitted.State === false ? (
          <SignUp PostRegistrationData={PostRegistrationData} />
        ) : (
          <Popup
            SwingSubmission={isRegistered.Submitted}
            RetrySwingSubmission={RetrySwingSubmission}
            Errorstate={errorstate}
          />
        ))}
      {isRegistered.State && <Postphone SwingUserName={SwingUserName} />}
    </div>
  );
};

export default Registration;
