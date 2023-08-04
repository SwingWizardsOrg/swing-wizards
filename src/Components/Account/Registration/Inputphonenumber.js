import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { TextField } from "@mui/material";
import { auth } from "../../Firebase/firebase";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import styles from '../../css/Inputphonenumber.module.css';
const Inputphonenumber = (PostToSwingServer) => {
  const [phone, setPhone] = useState("+254");
  const [hasFilled, setHasFilled] = useState(false);
  const [otp, setOtp] = useState("");

  
  const generateRecaptcha = () => {
    window.recaptchaVerifier = new RecaptchaVerifier(
      "recaptcha",
      {
        size: "invisible",
        callback: (response) => {
          // reCAPTCHA solved, allow signInWithPhoneNumber.
          // ...
        },
      },
      auth
    );
  };

  const handleSend = (event) => {
    event.preventDefault();
    setHasFilled(true);
    generateRecaptcha();
    let appVerifier = window.recaptchaVerifier;
    signInWithPhoneNumber(auth, phone, appVerifier)
      .then((confirmationResult) => {
        // SMS sent. Prompt user to type the code from the message, then sign the
        // user in with confirmationResult.confirm(code).
        window.confirmationResult = confirmationResult;
      })
      .catch((error) => {
        // Error; SMS not sent
        console.log(error);
      });
  };

  const verifyOtp = (event) => {
    let otp = event.target.value;
    setOtp(otp);

    if (otp.length === 6) {
      // verifu otp
      let confirmationResult = window.confirmationResult;
      confirmationResult
        .confirm(otp)
        .then((result) => {
          // User signed in successfully.
          let user = result.user;
          console.log(user);
          
          alert("User signed in successfully");
          PostToSwingServer(phone);
          // ...
        })
        .catch((error) => {
          // User couldn't sign in (bad verification code?)
          // ...
          alert("User couldn't sign in (bad verification code?)");
        });
    }
  };

  if (!hasFilled) {
    return (
      <div>
        <div className={styles.main}>
          <Card
            sx={{ minHeight: 275, backgroundColor: "#141414" }}
            variant="outlined"
          >
            <React.Fragment>
              <form onSubmit={handleSend}>
                <CardContent>
                  <Typography sx={{ mb: 1.5, mt: 5 }} color="#1976D2">
                    Enter your phone number
                  </Typography>
                  <Typography variant="body2" sx={{ mt: 5 }}>
                    <TextField
                      id="outlined-basic"
                      label="Phone Number"
                      variant="outlined"
                      sx={{ input: { color: "#1976D2" } }}
                      value={phone}
                      onChange={(event) => setPhone(event.target.value)}
                      focused
                    />
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button type="submit" variant="contained" sx={{ mt: 1 }}>
                    Send Code
                  </Button>
                </CardActions>
              </form>
            </React.Fragment>
          </Card>
        </div>
        <div id="recaptcha"></div>
      </div>
    );
  } else {
    return (
      <div>
        <div className={styles.main}>
          <Card
            sx={{ minHeight: 275, backgroundColor: "#141414" }}
            variant="outlined"
          >
            <React.Fragment>
              <CardContent>
                <Typography sx={{ mb: 1.5, mt: 5 }} color="#1976D2">
                  Enter the OTP
                </Typography>
                <Typography variant="body2" sx={{ mt: 5 }}>
                  <TextField
                    id="outlined-basic"
                    label="OTP"
                    variant="outlined"
                    sx={{ input: { color: "#1976D2" } }}
                    value={otp}
                    onChange={verifyOtp}
                    focused
                  />
                </Typography>
              </CardContent>
            </React.Fragment>
          </Card>
        </div>
        <div id="recaptcha"></div>
      </div>
    );
  }
};

export default Inputphonenumber;
