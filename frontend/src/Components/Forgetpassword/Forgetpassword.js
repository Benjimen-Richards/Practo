import axios from "axios";

import React, { useState } from "react";
import "./Forget.scss";

const Forgetpassword = (props) => {
  const [img, setimg] = useState("none");
  const [inputvalue, setinputvalue] = useState("");
  const [otpvalue, setotpvalue] = useState('')
  const [err, seterr] = useState("");
  const [otp, setotp] = useState("none");
  const submithandler = () => {
    setimg("block");
    axios.post("/mail", { input: inputvalue }).then((res) => {
      if (res.data) {
        setimg("none");
        setotp("flex");
        sessionStorage.setItem("passwordreset",res.data)
      }
    });
  };
  const chnagehandler = (e) => {
    setinputvalue(e.target.value);
  };
  const otphandler = (e) => {
    setotpvalue(e.target.value);
  };
const verifyhandler=()=>
{
    
    axios.post('/mail/verify',{otp:otpvalue}).then(res=>
        {
            if(res.data)
            {
                setotp("none");
                props.history.push(`/setpassword`)

            }
            else
            {
                seterr("Otp Entered is not valid")

            }
        })
}
  return (
    <div className="Forget_container">
      <h1>Welcome!</h1>
      <span>
        <i>Please enter your Email</i>
      </span>
      {/* <span>richardsbenjialfred@gmail.com</span> */}
      <input placeholder="Enter your email here" onChange={chnagehandler} />
      <button className="btn btn-primary" onClick={submithandler}>
        Submit
      </button>
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
        <p>Please enter otp sent to ur email</p>
        <input placeholder="Enter otp" onChange={otphandler} type='number' id="otpinput"/>
        <button onClick={verifyhandler}className='btn btn-primary'>Verify</button>
        {err && <h1>{err}</h1>}
      </div>
    </div>
  );
};

export default Forgetpassword;
