import React, { Component } from "react";
import "./Doctorlist.css";
import axios from "axios";
import { withRouter } from "react-router";
import { GoVerified } from "react-icons/go";
const disable = "http://localhost:1111/user/disable";
const likeurl = "http://localhost:1111/doctors/editlike/";
const bookingvisible = "http://localhost:1111/doctors/doctorbooking/";
class Doctorlist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      doctors: "",
      position: "",
      nodata: "",
      modaldisplay: false,
    };
  }

  appointmenthandler = (value, id, docimg, idx) => {
    sessionStorage.setItem("docimg", docimg);
    sessionStorage.setItem("doctorid", id);
    const ans = this.state.modaldisplay === false ? true : false;
    this.setState({ modaldisplay: ans });
    this.props.history.push(`/confirmappointment/${id}`);
  };
  renderdoctors = (data) => {
    if (data.length > 0) {
      return data.map((doctor, idx) => (
        <div>
          <div className="Doctor_card">
            <div className="doctorimg">
              <img src={doctor.profileimg} alt=""></img>
              {doctor.registered && <GoVerified className="doctorimg_icon" />}
            </div>
            <div className="Doctor_card_info">
              <div className="Doctor_name">
                <span>{doctor.fullname}</span>
              </div>
              <div
                className="Doctor_specilisation"
                id="Doctor_specilisation_text"
              >
                <span>{doctor.specialisation}</span>
              </div>
              <div className="Doctor_experience" id="Doctor_specilisation_text">
                <span>{doctor.experience} years of experience overall</span>
              </div>
              <div
                className="Doctor_hospital_name"
                id="Doctor_specilisation_text"
              >
                <strong style={{ marginRight: "8px" }}>
                  {doctor.hospitalname} .
                </strong>
                {doctor.city}
              </div>
              <div
                className="Doctor_hospital_fee"
                id="Doctor_specilisation_text"
              >
                <span>{doctor.cost}₹ Cosultation fee at clinic</span>
              </div>
              <div
                className="Doctor_hospital_fee"
                id="Doctor_specilisation_text"
              >
                <span>
                  {doctor.specialisation}-<span>specialisation</span>
                </span>
              </div>
              <hr />
            </div>
            <div div className="Doctor_card_buttons">
              <div className="Doctor_card_button_avaliable">
                {!doctor.leavestatus && <span>Available</span>}
                {doctor.leavestatus && <span>not Available</span>}
              </div>
              <div className="Doctor_card_button_appoint">
                {doctor.leavestatus && (
                  <button
                    id="appointment"
                    style={{ backgroundColor: "skyblue" }}
                    disabled
                  >
                    Book appointment
                  </button>
                )}
                {!doctor.leavestatus && (
                  <button
                    id="appointment"
                    style={{ backgroundColor: "#14bef0" }}
                    onClick={() =>
                      this.appointmenthandler(
                        doctor.bookingvisible,
                        doctor._id,
                        doctor.profileimg,
                        idx
                      )
                    }
                  >
                    Book appointment
                  </button>
                )}

                <button id="video">Video Consult</button>
              </div>
            </div>
          </div>
        </div>
      ));
    } else {
      return (
        <div>
          <h4>No data found for the search..Please try by clearing filters</h4>
        </div>
      );
    }
  };

  render() {
    const length = this.props.data.doctorsdata.length;
    return (
      <div>
        <div className="Doctorlist_main_container">
          <div className="Doctorlist_container">
            <div className="Doctorlist_container_text">
              <div className="doctor_card_header">
                <span>
                  Book from {length} {sessionStorage.getItem("specs")}{" "}
                  {sessionStorage.getItem("gender")} doctors in{" "}
                  {sessionStorage.getItem("cityname")}
                </span>
                <p>With predicted wait-time & verified details</p>
              </div>
              {this.renderdoctors(this.props.data.doctorsdata)}
            </div>
          </div>
          <div
            className="doctor_rightside"
            style={{ position: this.state.position }}
          >
            <img
              src="https://www.practostatic.com/web-assets/images/maps/bangalore.f18ea957144c.png"
              alt="/"
            />
          </div>
        </div>
      </div>
    );
  }
  componentDidMount() {
    const windowheight = window.innerHeight;

    if (windowheight > 650) {
      window.addEventListener("scroll", () => {
        if (window.scrollY > 200) {
          this.setState({ position: "fixed" });
        } else {
          this.setState({ position: "relative" });
        }
      });
    }
  }
  componentWillUnmount() {
    axios.put(disable);
  }
}

export default withRouter(Doctorlist);
