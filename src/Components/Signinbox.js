import React, { useState } from "react";
import styles from "./css/Loginpage.module.css";

const Signinbox = () => {
  const [inputs, setInputs] = useState({});
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
  };

  return (
    <div className={styles.main}>
      <div className={styles.subdiv}>
        <div className={styles.image_div}></div>
        <div className={styles.subdiv2}>
          <form>
            <div className={styles.input_div}>
              <input
                type="text"
                className={styles.input}
                placeholder="Username"
                name="username"
                onChange={handleChange}
              />
            </div>
            <div className={styles.input_div}>
              <input
                type="text"
                className={styles.input}
                placeholder="Password"
                name="password"
                onChange={handleChange}
              />
            </div>
            <div className={styles.submission_div}>
              <button
                type="submit"
                className={styles.submission_button}
                onClick={handleSubmit}
              >
                Sign In
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signinbox;
