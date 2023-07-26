import React, { useState } from "react";
import styles from "../../css/signup.module.css";
import { TextField } from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import IconButton from "@mui/material/IconButton";
const SignUp = ({PostRegistrationData}) => {


  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const [inputs, setInputs] = useState({});

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
    PostRegistrationData(inputs);
  };

  return (
    <div className={styles.main1}>
      <div className={styles.subdiv}></div>
      <div className={styles.subdiv1}>
        <h1>Create your account</h1>
      </div>
      <div className={styles.subdiv2}>
        <form>
          <div className={styles.input_div}>
            <TextField
              id="standard-basic"
              label="Firstname"
              variant="standard"
              sx={{ label: { color: "#1976D2" }, input: { color: "white" } }}
              name="firstname"
              onChange={handleChange}
            />
          </div>
          <div className={styles.input_div}>
            <TextField
              id="standard-basic"
              label="Lastname"
              variant="standard"
              sx={{ label: { color: "#1976D2" }, input: { color: "white" } }}
              name="lastname"
              onChange={handleChange}
            />
          </div>
          <div className={styles.input_div}>
            <TextField
              id="standard-basic"
              label="Username"
              variant="standard"
              sx={{ label: { color: "#1976D2" }, input: { color: "white" } }}
              name="username"
              onChange={handleChange}
            />
          </div>
          <div className={styles.input_div}>
            <TextField
              id="standard-basic"
              label="Email"
              variant="standard"
              sx={{ label: { color: "#1976D2" }, input: { color: "white" } }}
              name="email"
              onChange={handleChange}
            />
          </div>
          <div className={styles.input_div}>
            <div className={styles.input_div_1}>
              <div className={styles.input_div_1_1}>
                <TextField
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
                  onChange={handleChange}
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
  );
};

export default SignUp;
