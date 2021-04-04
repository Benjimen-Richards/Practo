import axios from "axios";

import React, { useState } from "react";
import "./Forget.scss";
import { TextField, Grid, Button, InputLabel } from "@material-ui/core";

import { AccountCircle } from "@material-ui/icons";
const Forgetpassword = (props) => {
  const [img, setimg] = useState("none");
  const [inputvalue, setinputvalue] = useState("");
  const [otpvalue, setotpvalue] = useState("");
  const [err, seterr] = useState("");
  const [emailerr, setemailerr] = useState("");
  const [otp, setotp] = useState("none");
  const submithandler = () => {
    setimg("block");
    axios.post("/mail", { input: inputvalue }).then((res) => {
      if (res.data) {
        console.log("res", res.data);
        setimg("none");
        setotp("flex");
        setemailerr("")
        sessionStorage.setItem("passwordreset", res.data);
      }
      else
      {
        setimg("none");
        setotp("flex");
        setemailerr("Email doesnt exists")
      }
    });
  };
  const chnagehandler = (e) => {
    setinputvalue(e.target.value);
  };
  const otphandler = (e) => {
    setotpvalue(e.target.value);
  };
  const verifyhandler = () => {
    axios.post("/mail/verify", { otp: otpvalue }).then((res) => {
      if (res.data) {
        setotp("none");
        props.history.push(`/setpassword`);
      } else {
        seterr("Otp Entered is not valid");
      }
    });
  };
  return (
    <div className="Forget_container">
      <h1>Welcome!</h1>
      <div>
        <Grid container spacing={1} alignItems="flex-end">
          <Grid item>
            <AccountCircle />
          </Grid>
          <Grid item>
            <TextField
              id="input-with-icon-grid"
              label="Enter your email"
              onChange={chnagehandler}
              required
            />
          </Grid>
        </Grid>
      </div>
      <Button variant="contained" color="primary" onClick={submithandler}>
        Submit
      </Button>
      {emailerr && <h1>{emailerr}</h1>}
      <img
        style={{ display: img }}
        src="https://static.impression.co.uk/2014/05/loading1.gif"
        alt="/"
      />
      <div
        style={{
          display: otp,
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
         
        <TextField
          id="standard-basic"
          label="Enter otp"
          onChange={otphandler}
        />
        <Button variant="contained" color="primary" onClick={verifyhandler}>
          Verify otp
        </Button>
        {err && <h1>{err}</h1>}
      </div>
    </div>
  );
};

export default Forgetpassword;
