import React, { useState } from "react";
import styles from "../../css/signup.module.css";
import { TextField } from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import IconButton from "@mui/material/IconButton";

const SignUp = ({ PostRegistrationData }) => {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const [error, setError] = useState({
    firstnameError: null,
    lastnameError: null,
    usernameError: null,
    emailError: null,
    passwordError: null,
  });
  const [inputs, setInputs] = useState({
    firstname: {
      Value: null,
      errorState: true,
    },
    lastname: {
      Value: null,
      errorState: true,
    },
    username: {
      Value: null,
      errorState: true,
    },
    email: {
      Value: null,
      errorState: true,
    },
    password: {
      Value: null,
      errorState: true,
    },
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
    if (
      inputs.firstname.errorState ||
      inputs.lastname.errorState ||
      inputs.username.errorState ||
      inputs.email.errorState ||
      inputs.password.errorState === true
    ) {
      setError({
        firstnameError: inputs.firstname.errorState,
        lastnameError: inputs.lastname.errorState,
        usernameError: inputs.username.errorState,
        emailError: inputs.email.errorState,
        passwordError: inputs.password.errorState,
      });
    } else {
      setError({
        firstnameError: false,
        lastnameError: false,
        usernameError: false,
        emailError: false,
        passwordError: false,
      });
      console.log("we are here");
      PostRegistrationData(inputs);
      console.log("we are done");
    }
  };

  return (
    <div className={styles.main1}>
      <div>
        <div className={styles.subdiv}></div>
        <div className={styles.subdiv1}>
          <h1>Create your account</h1>
        </div>
        <div className={styles.subdiv2}>
          <form>
            <div className={styles.input_div}>
              <TextField
                error={error.firstnameError}
                helperText="Please fill out this field"
                id="standard-fname"
                label="Firstname"
                variant="standard"
                sx={{ label: { color: "#1976D2" }, input: { color: "white" } }}
                name="firstname"
                onChange={(e) =>
                  setInputs(
                    Object.assign({}, inputs, {
                      firstname: {
                        Value: e.target.value,
                        errorState: !e.target.value.length,
                      },
                    })
                  )
                }
              />
            </div>
            <div className={styles.input_div}>
              <TextField
                error={error.lastnameError}
                helperText="Please fill out this field"
                id="standard-lname"
                label="Lastname"
                variant="standard"
                sx={{ label: { color: "#1976D2" }, input: { color: "white" } }}
                name="lastname"
                onChange={(e) =>
                  setInputs(
                    Object.assign({}, inputs, {
                      lastname: {
                        Value: e.target.value,
                        errorState: !e.target.value.length,
                      },
                    })
                  )
                }
              />
            </div>
            <div className={styles.usernameinput_div}>
              <TextField
                error={error.usernameError}
                helperText="Username must be atleast 4 characters"
                id="standard-username"
                label="Username"
                variant="standard"
                sx={{ label: { color: "#1976D2" }, input: { color: "white" } }}
                name="username"
                onChange={(e) =>
                  setInputs(
                    Object.assign({}, inputs, {
                      username: {
                        Value: e.target.value,
                        errorState:
                          e.target.value.length > 3
                            ? !e.target.value.length
                            : !0,
                      },
                    })
                  )
                }
              />
            </div>
            <div className={styles.input_div}>
              <TextField
                error={error.emailError}
                helperText="Please fill out this field"
                id="standard-email"
                label="Email"
                variant="standard"
                sx={{ label: { color: "#1976D2" }, input: { color: "white" } }}
                name="email"
                onChange={(e) =>
                  setInputs(
                    Object.assign({}, inputs, {
                      email: {
                        Value: e.target.value,
                        errorState: !e.target.value.length,
                      },
                    })
                  )
                }
              />
            </div>
            <div className={styles.input_div}>
              <div className={styles.input_div_1}>
                <div className={styles.input_div_1_1}>
                  <TextField
                    error={error.passwordError}
                    helperText="Password must be atleast 8 characters"
                    id="standard-password-input"
                    label="Password"
                    type={showPassword ? "text" : "password"}
                    autoComplete="current-password"
                    variant="standard"
                    sx={{
                      label: { color: "#1976D2" },
                      input: { color: "white" },
                    }}
                    name="password"
                    onChange={(e) =>
                      setInputs(
                        Object.assign({}, inputs, {
                          password: {
                            Value: e.target.value,
                            errorState:
                              e.target.value.length > 7
                                ? !e.target.value.length
                                : !0,
                          },
                        })
                      )
                    }
                  />
                </div>
                <div className={styles.input_div_1_2}>
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                    sx={{ color: "white", mt: 2, mr: 2 }}
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </div>
              </div>
            </div>

            <div className={styles.submission_div}>
              <button
                type="submit"
                className={styles.submission_button}
                onClick={handleSubmit}
              >
                Sign up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
