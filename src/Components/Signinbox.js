import React, { useState } from "react";
import styles from "./css/Loginpage.module.css";
import { Icon } from "react-icons-kit";
import { eyeOff } from "react-icons-kit/feather/eyeOff";
import { eye } from "react-icons-kit/feather/eye";
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
import axios from './api'

const URL = '/tradex/user/login'

const Signinbox = () => {

  const [username,setUsername] = useState('')
  const [password,setPassword] = useState('')
  const [type, setType] = useState("password");
  const [icon, setIcon] = useState(eyeOff);
  const navigate = useNavigate()

  const handleToggle = () => {
    if (type === "password") {
      setIcon(eye);
      setType("text");
    } else {
      setIcon(eyeOff);
      setType("password");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(URL,
      JSON.stringify({ username, password }),
      {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      });
      toast.success("Login Successful");
      navigate("/");
    } catch (error) {
      console.log(error)
      toast.error("Wrong username or password")
    }
  };


  return (
    <div className={styles.main}>
      <div className={styles.subdiv}>
        <div className={styles.image_div}></div>
        <div className={styles.subdiv2}>
          <form onSubmit={handleSubmit}>
            <div className={styles.input_div}>
              <input
                type="text"
                className={styles.input1}
                placeholder="Username"
                name="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className={styles.input_div}>
              <input
                type={type}
                className={styles.input}
                placeholder="Password"
                name="password"
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <span className={styles.eyeIcon} onClick={handleToggle}>
                <Icon icon={icon} size={20} />
              </span>
            </div>
            <div className={styles.submission_div}>
              <button type="submit" className={styles.submission_button}>Sign In</button>
            </div>
            <span><a href="/login">Register Here</a></span>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signinbox;
