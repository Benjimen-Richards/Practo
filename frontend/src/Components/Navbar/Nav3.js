import React, { useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import { BsArrowUpShort } from "react-icons/bs";

const Nav3 = (props) => {
  const [listdisplay_1, setlistdisplay_1] = useState("none");
  const [listdisplay_2, setlistdisplay_2] = useState("none");
  const [allfilter, setallfilter] = useState("none");
  const [listdisplay_1arrow, setlistdisplay_1arrow] = useState(false);
  const [allfilterarrow, setallfilterarrow] = useState(false);
  const [listdisplay_2arrow, setlistdisplay_2arrow] = useState(false);

  const listdisplay_1handler = () => {
    setlistdisplay_1(listdisplay_1 === "block" ? "none" : "block");
    setlistdisplay_1arrow(listdisplay_1arrow === true ? false : true);
  };
  const listdisplay_2handler = () => {
    setlistdisplay_2(listdisplay_2 === "block" ? "none" : "block");
    setlistdisplay_2arrow(listdisplay_2arrow === true ? false : true);
  };
  const allfilter_2handler = () => {
    setallfilter(allfilter === "flex" ? "none" : "flex");
    setallfilterarrow(allfilterarrow === true ? false : true);
  };
  const genderfilter = (e) => {
    // setgender(e.target.value);
    props.genderfilter(e.target.value);
  };
  const setcost = (e) => {
    props.costfilter(e.target.value);
  };
  return (
    <div>
      <div className="Nav3">
        <div className="main_Nav3">
          <div className="dropdowns">
            <div className="checkbox3" style={{ marginLeft: "50px" }}>
              <input
                type="checkbox"
                style={{
                  marginRight: "0.5rem",
                  backgroundColor: "transparent",
                }}
              />
              <label>Video consult</label>
            </div>
          </div>
          <div className="dropdowns">
            <div
              className="checkbox"
              id="nav3_drop_1"
              onClick={listdisplay_1handler}
            >
              <label>Avaliablity </label>
              {!listdisplay_1arrow && <BiChevronDown />}
              <BsArrowUpShort style={{ display: listdisplay_1 }} />
              <div
                className="nav3_dropdown_1"
                style={{ display: listdisplay_1 }}
              >
                <li onClick={() => props.avaliable(false)}>Avaliable</li>
                <li onClick={() => props.avaliable(true)}>Not Avaliable</li>
              </div>
            </div>
          </div>
          <div className="dropdowns">
            <div className="checkbox2" onClick={allfilter_2handler}>
              <label style={{ marginLeft: "10px" }}>All filter </label>
              {!allfilterarrow && <BiChevronDown />}
              {allfilterarrow && <BsArrowUpShort />}
              <div className="nav3_allfilter" style={{ display: allfilter }}>
                <div className="nav3_gender" onChange={genderfilter}>
                  <span id="nav3gender">Gender</span>
                  <div className="nav3_gender_inputs">
                    <input type="radio" name="filter_gender" value="M" />
                    <label>Male Doctor</label>
                  </div>
                  <div className="nav3_gender_inputs">
                    <input type="radio" name="filter_gender" value="Female" />
                    <label>Female Doctor</label>
                  </div>
                </div>
                <div className="Nav3_fee" onChange={setcost}>
                  <span id="nav3gender">Consultation Fee</span>
                  <div className="nav3_gender_inputs">
                    <input type="radio" name="fee_filter" value="0-0" />
                    <label>Free</label>
                  </div>
                  <div className="nav3_gender_inputs">
                    <input type="radio" name="fee_filter" value="1-200" />
                    <label>1-200</label>
                  </div>
                  <div className="nav3_gender_inputs">
                    <input type="radio" name="fee_filter" value="201-500" />
                    <label>201-500</label>
                  </div>
                  <div className="nav3_gender_inputs">
                    <input type="radio" name="fee_filter" value="500" />
                    <label>500+</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="dropdowns" id="dropdown4">
            <label style={{ marginRight: "10px" }}>Sort by </label>
            <div
              className="checkbox"
              id="nav3_relevance"
              onClick={listdisplay_2handler}
            >
              <label>Relevance </label>
              {!listdisplay_2arrow && <BiChevronDown />}
              <BsArrowUpShort style={{ display: listdisplay_2 }} />
              <div
                className="nav3_dropdown_relevance"
                style={{ display: listdisplay_2 }}
              >
                <li onClick={() => props.relevance("high")}>
                  Price high to low
                </li>
                <li onClick={() => props.relevance("Low")}>
                  Price low to high
                </li>
                <li onClick={() => props.relevance("experience")}>
                  Years of experience
                </li>
              </div>
            </div>
          </div>
          <div className="clear_filter_div">
            <button className="clear_filter" onClick={() => props.default()}>
              Clear filters
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav3;
