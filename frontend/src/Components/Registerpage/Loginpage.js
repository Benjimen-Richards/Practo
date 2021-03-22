import React, { Component } from "react";
import "./Loginpage.css";
import { AiFillFacebook } from "react-icons/ai";
import axios from "axios";
import { withRouter } from "react-router";
const loginurl = "/doctors/login";
// const commonurl =
// "https://rocky-chamber-59030.herokuapp.com/facebook/auth/facebook/";
// const commonurl = "/facebook/auth/facebook";
const commonurl = "http://localhost:1111/facebook/auth/facebook";
class Loginpage extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      emailerror: "",
      passworderror: "",
    };
  }
  changehandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  facebookhandler = (e) => {
    e.preventDefault();
    window.location.href = commonurl;
    // console.log("clicked");
  };
  submithandler = (e) => {
    e.preventDefault();
    const location = window.location.pathname;
    const path = location.split("/");
    if (path[1] === "confirmappointment") {
      axios.post(loginurl, this.state).then((res) => {
        console.log(res.data);
        this.setState({
          emailerror: res.data.emailerror,
          passworderror: res.data.passworderror,
        });
        sessionStorage.setItem("username", res.data.result.fullname);
        sessionStorage.setItem("email", res.data.result.email);
        sessionStorage.setItem("userid", res.data.result._id);
        sessionStorage.setItem("userimage", res.data.result.profileimg);
        if (res.data.result) {
          this.props.history.push(
            `/confirmappointment/${this.props.match.params.id}`
          );
        }
      });
    } else {
      axios.post(loginurl, this.state).then((res) => {
        console.log(res.data);

        this.setState({
          emailerror: res.data.emailerror,
          passworderror: res.data.passworderror,
        });
        sessionStorage.setItem("username", res.data.result.fullname);
        sessionStorage.setItem("email", res.data.result.email);
        sessionStorage.setItem("userid", res.data.result._id);
        sessionStorage.setItem("userimage", res.data.result.profileimg);

        if (res.data.result) {
          this.props.history.push("/");
        }
      });
    }
    // console.log(this.state)
  };
  render() {
    return (
      <form className="Login_container" onSubmit={this.submithandler}>
        <div className="Login_mobile">
          <span>Mobile Number/Email ID</span>
          <input
            placeholder="Mobile Number/Email ID"
            name="email"
            value={this.state.email}
            onChange={this.changehandler}
          />
          <div style={{ color: "red", fontSize: "24px" }}>
            {this.state.emailerror && this.state.emailerror}
          </div>
        </div>
        <div className="Login_password">
          <span>Password</span>
          <input
            placeholder="Password"
            name="password"
            value={this.state.password}
            onChange={this.changehandler}
          />
          <div style={{ color: "red", fontSize: "24px" }}>
            {this.state.passworderror && this.state.passworderror}
          </div>
        </div>
        <div className="Login_checked">
          <div>
            <input type="checkbox" />
            Remeber me for 30 days
          </div>
          <span>Forget password?</span>
        </div>
        <div className="Login_withphone">
          <input type="checkbox" />
          Login with otp instead of Password
        </div>
        <div className="loginbutton">
          <button type="submit">Login</button>
        </div>
        <hr />
        <div className="facebook_login">
          <button onClick={this.facebookhandler}>
            <AiFillFacebook style={{ height: "30px", width: "30px" }} />
            connect with facebook
          </button>
        </div>
      </form>
    );
  }
  componentDidMount() {
    axios.get("/facebook/profile").then((r) => {
      if (r.data) {
        const email = r.data.emails[0].value;
        axios
          .post("/user/verify", {
            name: email,
          })
          .then((res) => {
            if (res.data.msg === "yes") {
              sessionStorage.setItem("username", res.data.data.fullname);
              sessionStorage.setItem("email", res.data.data.email);
              sessionStorage.setItem("userid", res.data.data._id);
              sessionStorage.setItem("userimage", res.data.data.profileimg);
              this.props.history.push("/");
              // console.log(res.data.data);
            } else {
              this.props.history.push("/authpage/register");
              // console.log(res.data.data);
            }
          });
      }
    });
  }
}

export default withRouter(Loginpage);
