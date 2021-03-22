import axios from "axios";
import { Component } from "react";
import { Link } from "react-router-dom";
import "./Register.css";
const registerurl = "doctors/register";
const allcities = "/city/all";
const specialisationurl = "/city/special";
class Register extends Component {
  constructor() {
    super();
    this.state = {
      cities: "",
      hospitals: "",
      fullname: "",
      experience: null,
      email: "",
      city: "",
      number: null,
      gender: "",
      registered: "",
      hospitalname: "",
      password: "",
      error: "",
      role: "Doctor",
      cost: "",
      specialisation: "",
    };
  }
  changehandler = (e) => {
    console.log(e.target.value);
    this.setState({ [e.target.name]: e.target.value });
  };
  submithandler = () => {
    console.log(this.state);
    axios.post(registerurl, this.state).then((res) => {
      console.log(res.data);
      this.setState({ error: res.data.emailerror });
      // if (res.data.success) {
      //   this.props.history.push("/authpage/login");
      // }
    });
  };
  rendercities = (data) => {
    if (data) {
      return data.map((city) => (
        <option value={city.cityname}>{city.cityname}</option>
      ));
    }
  };
  renderspecs = (data) => {
    if (data) {
      return data.map((city, idx) => (
        <option value={city.specialisation} key={idx}>
          {city.specialisation}
        </option>
      ));
    }
  };
  render() {
    // console.log(this.state.cities, this.state.hospitals);
    return (
      <div className="Register_container">
        <div className="Top_header">
          <h8 style={{ fontWeight: "100", marginLeft: "-10px" }}>
            Join 125,000+ doctors
          </h8>
          <Link
            to="/authpage/register"
            style={{ textDecoration: "none", color: "black" }}
          >
            <span style={{ color: "#13bef0" }}>Are you not a doctor?</span>
          </Link>
        </div>
        <hr />
        <div className="Fullname">
          <span>Full Name</span>
          <input
            placeholder="please enter full name of yours"
            name="fullname"
            value={this.state.fullname}
            onChange={this.changehandler}
          />
        </div>
        <div className="Fullname">
          <span>Email</span>
          <input
            placeholder="please enter Email of yours"
            name="email"
            value={this.state.email}
            onChange={this.changehandler}
          />
          <div style={{ color: "red", fontSize: "24px" }}>
            {this.state.error && this.state.error}
          </div>
        </div>

        <div className="create_password">
          <span>Create Password</span>
          <input
            placeholder="please enter Password"
            name="password"
            value={this.state.password}
            onChange={this.changehandler}
          />
        </div>
        <div className="create_password">
          <span>City</span>
          <select
            name="city"
            onChange={this.changehandler}
            value={this.state.city}
          >
            <option disabled selected>
              Select your city
            </option>
            {this.rendercities(this.state.cities)}
          </select>
        </div>
        <div className="create_password">
          <span>Hospital Name</span>
          <input
            placeholder="please enter hospital name"
            value={this.state.hospitalname}
            name="hospitalname"
            onChange={this.changehandler}
          />
        </div>
        <div className="create_password">
          <span>Experience</span>
          <select
            name="experience"
            onChange={this.changehandler}
            value={this.state.value}
          >
            <option disabled selected>
              set experience
            </option>
            <option value="1">1+</option>
            <option value="5">5+</option>
            <option value="10">10+</option>
            <option value="15">15+</option>
          </select>
        </div>
        <div className="create_password">
          <span>Consultation fee</span>
          <input
            placeholder="please enter Consultation fee"
            value={this.state.cost}
            name="cost"
            type="number"
            onChange={this.changehandler}
          />
        </div>
        <div className="create_password">
          <span>specialisation</span>
          <select
            name="specialisation"
            value={this.state.specialisation}
            onChange={this.changehandler}
          >
            <option disabled selected>
              set experience
            </option>
            {this.renderspecs(this.state.hospitals)}
          </select>
        </div>
        <div className="doc_gender">
          <span>Gender</span>
          <div className="abc" onChange={this.changehandler}>
            <input type="radio" name="gender" value="Male" checked />
            <label>Male</label>
            <input type="radio" name="gender" value="Female" />
            <label>Female</label>
          </div>
        </div>

        <div className="send_otp_button">
          <button onClick={this.submithandler}>Sign up</button>
        </div>
      </div>
    );
  }
  componentDidMount() {
    axios.get(allcities).then((r) => this.setState({ cities: r.data }));
    axios
      .get(specialisationurl)
      .then((r) => this.setState({ hospitals: r.data }));
  }
}
export default Register;
