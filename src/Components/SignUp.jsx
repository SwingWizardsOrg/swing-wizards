import React, { useState } from "react";
import styles from "./css/signup.module.css";
import { Icon } from "react-icons-kit";
import { eyeOff } from "react-icons-kit/feather/eyeOff";
import { eye } from "react-icons-kit/feather/eye";
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
import axios from './api.js'

const URL = '/tradex/user/register'

const SignUp = () => {

  const [firstname,setFirstName] = useState('')
  const [lastname,setLastName] = useState('')
  const [email,setEmail] = useState('')
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
      JSON.stringify({ firstname, lastname, email, username, password }),
      {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      });
      toast.success("Registration Successful");
      navigate("/login");
    } catch (error) {
      if (!error?.response) {
        toast.error("No Server Response");
      } else if (error.response?.status === 400) {
        toast.error("All fields are required");
      }  else {
        toast.error("Registration Failed");
      }
      console.log(error.response);
      console.log(error)
    }
  };

  return (
    <div className={styles.main1}>
      <div className={styles.subdiv}></div>
      <div className={styles.subdiv1}>
        <h1>Create your account</h1>
      </div>
      <div className={styles.subdiv2}>
        <form onSubmit={handleSubmit}>
          <div className={styles.input_div}>
            <input
              type="text"
              required
              className={styles.input1}
              placeholder="First Name"
              name="firstname"
              value={firstname}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className={styles.input_div}>
            <input
              type="text"
              required
              className={styles.input1}
              placeholder="Last Name"
              name="lastname"
              value={lastname}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div className={styles.input_div}>
            <input
              type="email"
              required
              className={styles.input1}
              placeholder="Email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className={styles.input_div}>
            <input
              type="text"
              required
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
              required
              className={styles.input}
              placeholder="Password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <span className={styles.eyeIcon} onClick={handleToggle}>
              <Icon icon={icon} size={20} />
            </span>
          </div>
          <div className={styles.submission_div}>
            <button  className={styles.submission_button}>Sign up</button>
          </div>
          <span>Already have an account?<a href="/login"><u>Login in</u></a></span>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
