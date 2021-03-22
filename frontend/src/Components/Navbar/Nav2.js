import { Component } from "react";
import { IoLocationOutline } from "react-icons/io5";
import { MdCancel } from "react-icons/md";
import { IoIosSearch } from "react-icons/io";
import { GoVerified } from "react-icons/go";
import "./Navbar.css";
import axios from "axios";
import { withRouter } from "react-router";
const allcitiesurl = "/city/all";
const specialisationurl = "/city/special";
class Nav2 extends Component {
  constructor() {
    super();
    this.state = {
      allcities: "",
      allhospitals: "",
      cities_list: false,
      hospitalList: false,
      City_inputvalue1: "",
      City_inputvalue2: sessionStorage.getItem("cityname"),
      hospital_inputvalue1: "",
      hospital_inputvalue2: sessionStorage.getItem("specs"),
    };
  }
  disable_cancel = (name) => {
    if (name === "first") {
      this.props.default("first");
      this.setState({ cities_list: false, City_inputvalue1: "" });
    } else {
      this.props.default("second");
      this.setState({ hospitalList: false, hospital_inputvalue1: "" });
    }
  };
  city_changehandler = (e) => {
    const keyword = e.target.value;
    this.setState({ cities_list: true });
    const list = this.state.allcities.filter(
      (city) => city.cityname.toLowerCase().indexOf(keyword.toLowerCase()) > -1
    );
    // console.log(list);
    this.setState({ City_inputvalue1: keyword, City_inputvalue2: list });
  };
  set_City_inputvalue2 = (cityname) => {
    sessionStorage.setItem("cityname", cityname);
    this.setState({
      City_inputvalue2: cityname,
      cities_list: false,
      City_inputvalue1: cityname,
    });
    this.props.cityname(cityname);
  };
  display_city_list = (data) => {
    if (data) {
      return data.map((city) => (
        <li
          className="citylist"
          key={city._id}
          onClick={() => this.set_City_inputvalue2(city.cityname)}
        >
          <div className="city_icon"></div> {city.cityname}
        </li>
      ));
    }
  };
  renderspecialisation = (data) => {
    if (data) {
      return data.map((specs) => (
        <li
          key={specs._id}
          onClick={() => this.set_hospital_inputvalue2(specs.specialisation)}
        >
          {specs.specialisation}
        </li>
      ));
    }
  };
  set_hospital_inputvalue2 = (hospital) => {
    this.setState({
      hospitalList: false,
      hospital_inputvalue1: hospital,
      hospital_inputvalue2: hospital,
    });
    // console.log(hospital);
    sessionStorage.setItem("specs", hospital);
    this.props.specs(hospital);
  };
  hospital_changehandler = (e) => {
    const key = e.target.value;
    this.setState({ hospitalList: true });

    const hospital = this.state.allhospitals.filter(
      (hospi) =>
        hospi.specialisation.toLowerCase().indexOf(key.toLowerCase()) > -1
    );
    // console.log(hospital);
    this.setState({
      hospital_inputvalue1: key,
      hospital_inputvalue2: hospital,
    });
  };
  routeset = () => {
    const path = this.props.location.pathname;
    if (path === "/") {
      this.props.history.push("/doctorlist");
    }
  };
  render() {
    // console.log(this.state.City_inputvalue2);
    return (
      <div className="Nav2">
        <div className="Nav_inputs">
          <div className="Nav_input_search" id="city_input">
            <input
              className="city_input"
              placeholder="Enter city name"
              onChange={this.city_changehandler}
              value={this.state.City_inputvalue1}
              onClick={this.routeset}
            />
            <IoLocationOutline className="icon_city" />
            {this.state.cities_list && (
              <MdCancel
                className="City_Inputcancel"
                onClick={() => this.disable_cancel("first")}
              />
            )}
            <div className="Nav_input_search_list">
              {this.state.cities_list &&
                this.display_city_list(this.state.City_inputvalue2)}
            </div>
          </div>
          <div className="Nav_input_search" id="hospital_input">
            <input
              placeholder="Enter specilisation to search"
              value={this.state.hospital_inputvalue1}
              onChange={this.hospital_changehandler}
            />
            <IoIosSearch className="icon_spec" />
            {this.state.hospitalList && (
              <MdCancel
                className="Hospital_Inputcancel"
                onClick={() => this.disable_cancel("second")}
              />
            )}
            <div className="Nav_input_search_list">
              {this.state.hospitalList &&
                this.renderspecialisation(this.state.hospital_inputvalue2)}
            </div>
          </div>
        </div>
        <div className="Nav2_text">
          <span>Fed up of endless wait?</span>
          <p>
            Look for clinic with <strong className="prime">Prime</strong>
            <GoVerified className="icons" style={{ margin: "5px" }} />{" "}
          </p>
        </div>
      </div>
    );
  }
  componentDidMount() {
    axios
      .get(allcitiesurl)
      .then((res) => this.setState({ allcities: res.data }));
    axios
      .get(specialisationurl)
      .then((res) => this.setState({ allhospitals: res.data }));
  }
}
export default withRouter(Nav2);
