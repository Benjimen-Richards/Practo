import "./Css/Homepage.css";
import React from "react";
import Download from "./Download";
import Doctor from "./Doctor";
import Find from "./Find";
import Speciality from "./Speciality";
import Read from "./Read";
import Footer from "./Footer";
import Navbar from "../Navbar/Navbar";
import Nav2 from "../Navbar/Nav2";
const Homepage = () => {
  sessionStorage.setItem("cityname", "All cities ");
  const setroute = (path) => {
    console.log(path);
  };
  return (
    <div className="Home_container">
      <Navbar />
      <Nav2 route={(path) => setroute(path)} />
      <Doctor />
      <Find />
      <Speciality />
      <hr />
      <Read />
      <Download />
      <Footer />
    </div>
  );
};

export default Homepage;
