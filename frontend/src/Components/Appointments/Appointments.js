import "./Appointment.css";
import { Component } from "react";
import axios from "axios";
import Smallnav from "./Smallnav";
import Appointments1 from "./Appointments1";
import { Route } from "react-router";
import Profilepage from "./Profilepage";
import { Link } from "react-router-dom";
const allusers = "http://localhost:1111/user";
class Appointments extends Component {
  constructor() {
    super();
    this.state = {
      bottomleftdisplay: "block",
      users: "",
      profileDisplay: "",
    };
  }
  btndisplayhandler = () => {
    const ans = this.state.bottomleftdisplay === "none" ? "block" : "none";
    this.setState({ bottomleftdisplay: ans });
  };

  render() {
    // console.log(this.state.users);
    return (
      <div className="Appointments_body">
        <Smallnav />
        <div className="Appointments_container">
          <div className="Appointments_container_top">
            <div className="Profile_list">
              <div className="user_details">
                <strong>{sessionStorage.getItem("username")}</strong>
              </div>
              {this.state.users && <strong>{this.state.users.role}</strong>}
            </div>
          </div>
          <hr />
          <div className="Appointments_container_bottom">
            <div
              className="bottom_left"
              style={{ display: this.state.bottomleftdisplay }}
            >
              <Link
                to="/appointments/profile"
                style={{ textDecoration: "none", color: "black" }}
              >
                <li>Profile</li>
              </Link>
              <Link
                to="/appointments/appointments"
                style={{ textDecoration: "none", color: "black" }}
              >
                <li>Appointments</li>
              </Link>
            </div>
            <Route
              path="/appointments/appointments"
              component={Appointments1}
            />
            <Route path="/appointments/profile" component={Profilepage} />
          </div>
        </div>
      </div>
    );
  }
  componentDidMount() {
    const id = sessionStorage.getItem("userid");
    axios
      .get(`${allusers}/${id}`)
      .then((r) => this.setState({ users: r.data }));
    const path = this.props.location.pathname;
    // console.log(path);
    if (path === "/appointments") {
      this.setState({ profileDisplay: "flex" });
    } else if (path === "/appointments/profile") {
      this.setState({ profileDisplay: "none" });
    }
  }
}

export default Appointments;
