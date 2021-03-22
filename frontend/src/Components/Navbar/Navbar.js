import React, { Component } from "react";
import "./Navbar.css";

import { BiChevronDown } from "react-icons/bi";
import { Link, withRouter } from "react-router-dom";

import Nav2 from "./Nav2";

class Navbar extends Component {
  constructor() {
    super();
    this.state = {
      profiledisplay: "none",
    };
  }
  // make login button visible
  set_profile_dropdwon = () => {
    const ans = this.state.profiledisplay === "none" ? "block" : "none";
    this.setState({ profiledisplay: ans });
  };
  logouthandler = () => {
    const ans = this.state.profiledisplay === "none" ? "block" : "none";
    this.setState({ profiledisplay: ans });
    sessionStorage.removeItem("username");
    sessionStorage.removeItem("email");
    sessionStorage.removeItem("userid");
    sessionStorage.removeItem("userimage");
    sessionStorage.removeItem("cityname");
    sessionStorage.removeItem("specs");
    this.props.history.push("/");
  };

  render() {
    return (
      <div className="Main_container">
        <div className="Nav_cntainer">
          <div>
            <Link to="/">
              <img
                src="https://i2.wp.com/www.cosmoderma.healios.co.in/wp-content/uploads/2019/04/practo.png?fit=1586%2C1057"
                alt="/"
              />
            </Link>
          </div>
          <div className="Nav_middle">
            <Link
              to="/doctorlist"
              style={{ textDecoration: "none", color: "black" }}
            >
              <div className="names">
                <p>Doctors</p>
                <small>Book an appoinment</small>
              </div>
            </Link>
            <div className="names">
              <p>consult</p>
              <small>Consult with top doctors</small>
            </div>
            <div className="names">
              <p>Pharmacy</p>
              <small>Medicines & health products</small>
            </div>
            <div className="names">
              <p>Diagonstics</p>
              <small>Book tests & checkups</small>
            </div>
          </div>
          <div className="Nav_right">
            <div className="names" id="alldoctors">
              <Link
                to="/doctorlist"
                style={{ textDecoration: "none", color: "black" }}
              >
                <p>Doctors</p>
              </Link>
            </div>
            <div className="names">
              <span>For providers</span>
              <BiChevronDown />
            </div>
            <div className="names">
              <span>Security & help</span>
              <BiChevronDown />
            </div>
            {!sessionStorage.getItem("username") && (
              <Link to="/authpage/login">
                <button>Login / Signup</button>
              </Link>
            )}

            {sessionStorage.getItem("username") && (
              <span
                onClick={this.set_profile_dropdwon}
                style={{ cursor: "pointer" }}
              >
                {sessionStorage.getItem("username")}
                <BiChevronDown />
              </span>
            )}
            <div
              className="profile_list"
              style={{ display: this.state.profiledisplay }}
            >
              <Link
                to="/appointments/appointments"
                style={{ textDecoration: "none", color: "black" }}
              >
                {" "}
                <li>Appointments</li>
              </Link>
              <Link
                style={{ textDecoration: "none", color: "black" }}
                to="/appointments/profile"
              >
                <li>Profile</li>
              </Link>
              <Link
                style={{ textDecoration: "none", color: "black" }}
                onClick={this.logouthandler}
              >
                <li>Logout</li>
              </Link>
            </div>
          </div>
        </div>
        <hr style={{ color: "grey" }} />
      </div>
    );
  }
}

export default withRouter(Navbar);
