import React, { useState } from "react";
import styles from "../css/signup.module.css";
import { Icon } from "react-icons-kit";
import { eyeOff } from "react-icons-kit/feather/eyeOff";
import { eye } from "react-icons-kit/feather/eye";
import PostSignupData from "./PostSignupData";
const SignUp = () => {
  const [inputs, setInputs] = useState({});
  const [type, setType] = useState("password");
  const [icon, setIcon] = useState(eyeOff);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
    PostSignupData(inputs);
  };
  const handleToggle = () => {
    if (type === "password") {
      setIcon(eye);
      setType("text");
    } else {
      setIcon(eyeOff);
      setType("password");
    }
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
            <input
              type="text"
              className={styles.input1}
              placeholder="Firstname"
              name="firstname"
              onChange={handleChange}
            />
          </div>
          <div className={styles.input_div}>
            <input
              type="text"
              className={styles.input1}
              placeholder="Lastname"
              name="lastname"
              onChange={handleChange}
            />
          </div>
          <div className={styles.input_div}>
            <input
              type="text"
              className={styles.input1}
              placeholder="Username"
              name="username"
              onChange={handleChange}
            />
          </div>
          <div className={styles.input_div}>
            <input
              type="text"
              className={styles.input1}
              placeholder="Email"
              name="email"
              onChange={handleChange}
            />
          </div>
          <div className={styles.input_div}>
            <input
              type={type}
              className={styles.input}
              placeholder="Password"
              name="password"
              onChange={handleChange}
            />
            <span className={styles.eyeIcon} onClick={handleToggle}>
              <Icon icon={icon} size={20} />
            </span>
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
