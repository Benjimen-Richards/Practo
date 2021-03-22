import axios from "axios";
import React, { Component } from "react";
import "./Profilepage.css";
const userurl = "/user";
const editprofile = "/user/editprofile";
const fileurl = "/multer/file";
const allcities = "/city/all";
const commonurl = "http://localhost:1111/";
const specialisationurl = "/city/special";
class Profilepage extends Component {
  constructor() {
    super();
    this.state = {
      cities: "",
      hospitals: "",
      userid: "",
      user: "",
      city: "",
      cost: "",
      email: "",
      experience: "",
      fullname: "",
      gender: "",
      leavestatus: "",
      registered: "",
      profileimg: "",
      disable: true,
      specialisation: "",
    };
  }
  filehandler = (e) => {
    const file = e.target.files[0];
    this.setState({ filedata: file });
    const formdata = new FormData();
    formdata.append("image", file);
    axios.post("/multer/file", formdata).then((r) => {
      this.setState({ profileimg: `${commonurl}${r.data}` });
      // console.log(`${commonurl}${r.data}`);
    });
    sessionStorage.setItem("userimage", this.state.profileimg);
  };
  submithandler = () => {
    // console.log(this.state, "not updated");

    axios.put(`${editprofile}/${this.state.userid}`, this.state).then((r) => {
      sessionStorage.setItem("userimage", this.state.profileimg);
      this.setState({
        user: r.data,
        city: r.data.city,
        cost: r.data.cost,
        email: r.data.email,
        experience: r.data.experience,
        fullname: r.data.fullname,
        gender: r.data.gender,
        leavestatus: r.data.leavestatus,
        registered: r.data.registered,
        profileimg: r.data.profileimg,
        specialisation: r.data.specialisation,
        disable: !this.state.disable,
      });
    });
  };
  changehandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  disableinput = () => {
    this.setState({ disable: !this.state.disable });
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
      return data.map((city) => (
        <option value={city.specialisation}>{city.specialisation}</option>
      ));
    }
  };
  renderprofile = (data) => {
    if (this.state.user) {
      return (
        <div>
          {" "}
          <div className="editbutton">
            {this.state.disable && (
              <button onClick={this.disableinput}>Edit profile</button>
            )}
            {!this.state.disable && (
              <button onClick={this.submithandler}>Save changes</button>
            )}
          </div>
          <div className="Profile_box">
            <div className="Profile_img">
              <img
                src={this.state.profileimg}
                alt="/"
                disabled={this.state.disable}
              />
              <input
                type="file"
                name="file"
                onChange={this.filehandler}
                className="file_upload"
                disabled={this.state.disable}
              />
            </div>
            <div className="Profile_inputs">
              <div className="profile_name_input">
                <label>Name of user</label>
                <input
                  placeholder="Name Here"
                  name="fullname"
                  id="name_input"
                  value={this.state.fullname}
                  disabled={this.state.disable}
                  onChange={this.changehandler}
                />
              </div>
              <div className="profile_name_input">
                <span>City</span>
                <select
                  className="select_options"
                  name="city"
                  disabled={this.state.disable}
                  onChange={this.changehandler}
                  value={this.state.city}
                >
                  <option disabled selected>
                    Select your city
                  </option>
                  {this.rendercities(this.state.cities)}
                </select>
              </div>
              <div className="profile_name_select">
                <div>
                  <label>Leave status</label>
                  <div className="Status_profile">
                    <select
                      name="leavestatus"
                      className="Leave_status"
                      value={this.state.leavestatus}
                      disabled={this.state.disable}
                      onChange={this.changehandler}
                    >
                      <option value="true">True</option>
                      <option value="false">false</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label>gender</label>
                  <div className="Status_profile">
                    <select
                      name="gender"
                      className="Leave_status"
                      value={this.state.gender}
                      disabled={this.state.disable}
                      onChange={this.changehandler}
                    >
                      <option value="M">Male</option>
                      <option value="F">Female</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="profile_name_input">
                <label>Cost</label>
                <input
                  placeholder="Name Here"
                  type="number"
                  name="cost"
                  value={this.state.cost}
                  disabled={this.state.disable}
                  onChange={this.changehandler}
                />
              </div>
              <div className="profile_name_input">
                <span>specialisation</span>
                <select
                  className="select_options"
                  name="specialisation"
                  value={this.state.specialisation}
                  onChange={this.changehandler}
                  disabled={this.state.disable}
                >
                  <option disabled selected>
                    Select your specialisation
                  </option>
                  {this.renderspecs(this.state.hospitals)}
                </select>
              </div>
              <div className="profile_name_select">
                <div>
                  <label>Experienece</label>
                  <div className="Status_profile">
                    <select
                      disabled={this.state.disable}
                      name="experience"
                      className="Leave_status"
                      value={this.state.experience}
                      onChange={this.changehandler}
                    >
                      <option disabled selected>
                        Select your experience
                      </option>
                      <option value="1">1+</option>
                      <option value="5">5+</option>
                      <option value="10">10+</option>
                      <option value="15">15+</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label>Registered</label>
                  <div className="Status_profile">
                    {" "}
                    <select
                      name="registered"
                      className="Leave_status"
                      value={this.state.registered}
                      disabled={this.state.disable}
                      onChange={this.changehandler}
                    >
                      <option disabled selected>
                        Select your Registered status
                      </option>
                      <option value="true">True</option>
                      <option value="false">false</option>
                    </select>
                  </div>
                </div>
              </div>
              <div></div>
            </div>
          </div>
        </div>
      );
    } else {
      return <h1>No user</h1>;
    }
  };
  render() {
    return (
      <div className="Profile_container">
        {this.renderprofile(this.state.user)}
      </div>
    );
  }
  componentDidMount() {
    const id = sessionStorage.getItem("userid");
    axios.get(`${userurl}/${id}`).then((r) => {
      this.setState({
        userid: id,
        user: r.data,
        city: r.data.city,
        cost: r.data.cost,
        email: r.data.email,
        experience: r.data.experience,
        fullname: r.data.fullname,
        gender: r.data.gender,
        leavestatus: r.data.leavestatus,
        registered: r.data.registered,
        profileimg: r.data.profileimg,
        specialisation: r.data.specialisation,
      });
    });
    axios.get(allcities).then((r) => this.setState({ cities: r.data }));
    axios
      .get(specialisationurl)
      .then((r) => this.setState({ hospitals: r.data }));
  }
}

export default Profilepage;
