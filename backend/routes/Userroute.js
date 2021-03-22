const express = require("express");
const User = require("../mongomodals/Usermodal");
const Userroute = express.Router();
const doctor = require("../mongomodals/Doctormodal");
const mongoose = require("mongoose");
const { ObjectID } = require("bson");

Userroute.put("/addappointment/:id", async (req, res) => {
  // res.send(req.body);
  const patientdata = req.body.patient;
  const doctordata = req.body.doctor;
  const appointid = new mongoose.mongo.ObjectId();
  const date = new Date();
  // res.send(appointid);
  const result = await doctor.findByIdAndUpdate(doctordata.doctorid, {
    $push: {
      appointments: {
        appointid,
        userid: patientdata.userid,
        username: patientdata.username,
        consultingpatient: patientdata.consultingpatient,
        userImg: patientdata.userImg,
        doctorid: patientdata.doctorid,
        doctorname: patientdata.doctorname,
        doctorimg: patientdata.doctorimg,
        slottime: patientdata.slottime,
        city: patientdata.city,
        hospitalname: patientdata.hospitalname,
        reasonofconsult: patientdata.reasonofconsult,
        fee: patientdata.fee,
        createdat: date,
      },
    },
  });
  const ans = await doctor.findByIdAndUpdate(patientdata.userid, {
    $push: {
      appointments: {
        appointid,
        userid: doctordata.userid,
        username: doctordata.username,
        consultingpatient: doctordata.consultingpatient,
        userImg: doctordata.userImg,
        doctorid: doctordata.doctorid,
        doctorname: doctordata.doctorname,
        doctorimg: doctordata.doctorimg,
        slottime: doctordata.slottime,
        city: doctordata.city,
        hospitalname: doctordata.hospitalname,
        reasonofconsult: doctordata.reasonofconsult,
        fee: doctordata.fee,
        createdat: date,
      },
    },
  });
  res.send({ result, ans, confirmationmsg: "success" });
});
Userroute.get("/:id", (req, res) => {
  doctor.findById(req.params.id).then((r) => res.send(r));
});

Userroute.put("/disable", (req, res) => {
  doctor
    .updateMany({ bookingvisible: false })
    .then((r) => res.send("disabled"));
});

Userroute.put("/delete/:id", async (req, res) => {
  const appoint = req.query.appointid;
  const doctorid = req.query.doctorid;
  const userid = req.params.id;
  const user = await doctor.findByIdAndUpdate(userid, {
    $pull: {
      appointments: {
        appointid: ObjectID(appoint),
      },
    },
  });
  const doctorop = await doctor.findByIdAndUpdate(doctorid, {
    $pull: {
      appointments: {
        appointid: ObjectID(appoint),
      },
    },
  });
  doctor.findById(userid).then((r) => res.send(r));
});

Userroute.put("/editprofile/:id", async (req, res) => {
  const data = { ...req.body };

  const updated = await doctor.findByIdAndUpdate(req.params.id, {
    city: data.city,
    cost: data.cost,
    email: data.email,
    experience: data.experience,
    fullname: data.fullname,
    gender: data.gender,
    leavestatus: data.leavestatus,
    registered: data.registered,
    profileimg: data.profileimg,
    specialisation: data.specialisation,
  });
  doctor.findById(req.params.id).then((r) => res.send(r));
});
Userroute.post("/verify", (req, res) => {
  doctor.findOne({ email: req.body.name }).then((r) => {
    if (r) {
      res.send({ msg: "yes", data: r });
    } else {
      res.send({ msg: "no", data: "" });
    }
  });
  // console.log(req.body);
});

Userroute.put("/edit", (req, res) => {
  doctor
    .updateMany({ experience: "10+" }, { experience: 10 })
    .then((r) => res.send(r));
});
module.exports = Userroute;
