import axios from "axios";
import { Component } from "react";
import { Link } from "react-router-dom";
import "./Register.css";
const registerurl = "http://localhost:1111/doctors/register";
class Register extends Component {
  constructor() {
    super();
    this.state = {
      fullname: "",
      email: "",
      password: "",
      city: "",
      emailerror: "",
      role: "User",
    };
  }
  changehandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  submithandler = () => {
    axios.post(registerurl, this.state).then((res) => {
      this.setState({ emailerror: res.data.emailerror });
      if (res.data.success) {
        this.props.history.push("/authpage/login");
      }
    });
  };
  render() {
    return (
      <div className="Register_container">
        <div className="Top_header">
          <h5 style={{ fontWeight: "400", marginLeft: "-10px" }}>
            Join Practo
          </h5>
          <span style={{ marginTop: "5px" }}>
            Are you a doctor?
            <Link
              to="/authpage/doctor"
              style={{ textDecoration: "none", color: "black" }}
            >
              <span style={{ color: "#ed982d" }}>Register Here</span>
            </Link>
          </span>
        </div>
        <hr />
        <div className="Fullname">
          <span>Full Name</span>
          <input
            placeholder="Full Name"
            name="fullname"
            value={this.state.name}
            onChange={this.changehandler}
          />
        </div>
        <div className="Mobile_Number">
          <span>Email</span>
          <input
            placeholder="Enter your email"
            value={this.state.email}
            name="email"
            onChange={this.changehandler}
          />
          <div style={{ color: "red", fontSize: "24px" }}>
            {this.state.emailerror && this.state.emailerror}
          </div>
        </div>
        <div className="create_password">
          <span>Create Password</span>
          <input
            placeholder="Password"
            value={this.state.password}
            name="password"
            onChange={this.changehandler}
          />
        </div>
        <div className="create_password">
          <span>City</span>
          <input
            placeholder="City"
            name="city"
            value={this.state.city}
            onChange={this.changehandler}
          />
        </div>
        <div className="Term">
          <input type="checkbox" />
          <div>
            <span>
              Receive relevant offers and promotional communication from Practo
            </span>
          </div>
        </div>
        <div className="send_otp_button">
          <button onClick={this.submithandler}> Sign up</button>
        </div>
      </div>
    );
  }
}
export default Register;
