import axios from "axios";
import { Component } from "react";
import "./Css/Appoint1.css";
const userurl = "/doctors/docdata/";
const deleteurl = "/user/delete/";
class Appointments1 extends Component {
  constructor() {
    super();
    this.state = {
      appointments: "",
      doctor: "",
      patient: "",
    };
  }
  user_deleteappointment = (appointid, doctorid) => {
    const userid = sessionStorage.getItem("userid");
    axios
      .put(`${deleteurl}${userid}?appointid=${appointid}&doctorid=${doctorid}`)
      .then((res) => {
        if (res.data) {
          this.setState({
            appointments: res.data.appointments,
          });
        }
      });
  };
  render_multipledata = (data) => {
    if (data) {
      return data.map((data) => (
        <div className="Appoint_container">
          <div className="appoint_img">
            <img src={data.doctorimg} alt="/" />
          </div>
          <div className="appoint_text">
            <div className="appoint_text1">
              <p>Doctor details</p>
              <label>
                <strong>Name of doctor:-</strong>
              </label>
              <span>{data.doctorname}</span>
            </div>
            <div className="appoint_text1">
              <p>Patient details</p>
              <div className="appoint_blocks">
                <label>
                  <strong>Name of patient:-</strong>
                </label>
                <span>{data.username}</span>
              </div>
              <br />
              <div className="appoint_blocks">
                <label>
                  <strong>Person who is consulting:-</strong>
                </label>
                <span>{data.consultingpatient}</span>
              </div>
              <br />
              <div className="appoint_blocks">
                <label>
                  <strong>slot time:-</strong>
                </label>
                <span>
                  {data.slottime.date} ||
                  {data.slottime.time}
                </span>
              </div>
              <br />
              <div className="appoint_blocks">
                <label>
                  <strong>Reason for visit:-</strong>
                </label>
                <span>{data.reasonofconsult}</span>
              </div>
              <br />
              <div className="appoint_blocks">
                <label>
                  <strong>Consulting fee:-</strong>
                </label>
                <span>{data.fee}</span>
              </div>

              <div className="Doctor_card_button_appoint">
                <button
                  onClick={() =>
                    this.user_deleteappointment(data.appointid, data.doctorid)
                  }
                >
                  Cancel appointment
                </button>
              </div>
            </div>
          </div>
        </div>
      ));
    }
  };

  render_singledata = (data) => {
    if (data) {
      return (
        <div className="Appoint_container2">
          <div className="appoint_img">
            <img src={data[0].doctorimg} alt="/" />
          </div>
          <div className="appoint_text">
            <div className="appoint_text1">
              <p>Doctor details</p>
              <label>
                <strong>Name of doctor:-</strong>
              </label>
              <span>{data[0].doctorname}</span>
            </div>
            <div className="appoint_text1">
              <p>Patient details</p>
              <div className="appoint_blocks">
                <label>
                  <strong>Name of patient:-</strong>
                </label>
                <span>{data[0].username}</span>
              </div>
              <br />
              <div className="appoint_blocks">
                <label>
                  <strong>Person who is consulting:-</strong>
                </label>
                <span>{data[0].consultingpatient}</span>
              </div>
              <br />
              <div className="appoint_blocks">
                <label>
                  <strong>slot time:-</strong>
                </label>
                <span>
                  {data[0].slottime.date} ||
                  {data[0].slottime.time}
                </span>
              </div>
              <br />
              <div className="appoint_blocks">
                <label>
                  <strong>Reason for visit:-</strong>
                </label>
                <span>{data[0].reasonofconsult}</span>
              </div>
              <br />
              <div className="appoint_blocks">
                <label>
                  <strong>Consulting fee:-</strong>
                </label>
                <span>{data[0].fee}</span>
              </div>

              <div className="Doctor_card_button_appoint">
                <button
                  onClick={() =>
                    this.user_deleteappointment(
                      data[0].appointid,
                      data[0].doctorid
                    )
                  }
                >
                  Cancel appointment
                </button>
              </div>
            </div>
          </div>
        </div>
      );
    }
  };

  renderuserdata = (data) => {
    if (data.length === 0) {
      return (
        <div className="no_data_img">
          <img
            src="https://drive.practo.com/images/no_record_logo.svg"
            alt="/"
          />
        </div>
      );
    } else if (data.length === 1) {
      return (
        <div className="appoints_single">
          {this.render_singledata(this.state.appointments)}
        </div>
      );
    } else {
      return (
        <div className="appoints_multiple">
          {this.render_multipledata(this.state.appointments)}
        </div>
      );
    }
  };

  render() {
    return (
      <div className="bottom_right">
        {this.renderuserdata(this.state.appointments)}
      </div>
    );
  }

  componentDidMount() {
    const id = sessionStorage.getItem("userid");
    axios.get(`${userurl}${id}`).then((res) => {
      const name = res.data.role.trim();
      if (name === "Doctor") {
        this.setState({ doctor: name });
      } else {
        this.setState({ patient: name });
      }
      this.setState({ appointments: res.data.appointments });
    });
  }
}
export default Appointments1;
