const express = require("express");
const User = require("../mongomodals/Usermodal");
const Userroute = express.Router();
const doctor = require("../mongomodals/Doctormodal");
const mongoose = require("mongoose");
const multer = require("multer");
const { ObjectID } = require("bson");
const path = require("path");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});
const filetype = (req, file, cb) => {
  if (file.mimetype === "image/jpeg" || file.mimetype === "image/PNG") {
    cb(null, true);
  } else {
    cb(null, false);
  }
};
const upload = multer({
  storage: storage,
  limits: 1024 * 1024 * 5,
  fileFilter: filetype,
});

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

Userroute.post("/file", upload.single("image"), (req, res, next) => {
  res.send(`${req.file.path}`);
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

module.exports = Userroute;
