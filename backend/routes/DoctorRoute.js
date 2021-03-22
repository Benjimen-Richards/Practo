const { ObjectId } = require("bson");
const { ObjectID } = require("bson");
const express = require("express");
const mongodb = require("mongodb");

const { rawListeners } = require("../mongomodals/Doctormodal");
const doctor = require("../mongomodals/Doctormodal");
const Doctorroute = express.Router();

Doctorroute.get("/all", async (req, res) => {
  const result = await doctor.find({});
  res.send({
    count: result.length,
    result,
  });
});
Doctorroute.get("/", async (req, res) => {
  const email = req.query.email ? req.query.email : "";
  const doctors = await doctor.find({ role: "Doctor" });
  const ans = doctors.filter((item) => item.email !== email);
  res.send(ans);
});

Doctorroute.post("/register", (req, res) => {
  const data = {
    ...req.body,
    email: req.body.email,
    leavestatus: req.body.leavestatus ? req.body.leavestatus : false,
    gender: req.body.gender ? req.body.gender : "M",
    cost: req.body.cost ? req.body.cost : null,
    specialisation: req.body.specialisation ? req.body.specialisation : null,
    profileimg: req.body.profileimg
      ? req.body.profileimg
      : "https://image.freepik.com/free-vector/man-profile-cartoon_18591-58482.jpg",
    likes: req.body.likes ? req.body.likes : 0,
    slot: req.body.slot ? req.body.slot : "",
    bookingvisible: false,
    experience: req.body.experience ? req.body.experience : 0,
    role: req.body.role,
    registered: req.body.registered ? req.body.registered : false,
  };
  // console.log(data.email)
  doctor.findOne({ email: data.email }).then((result) => {
    // console.log(result)
    if (result) {
      return res.send({
        emailerror: "Exisiting Email address",
        success: "",
      });
    } else {
      const doctordata = new doctor(data);
      doctordata.save().then((e) =>
        res.send({
          emailerror: "",
          success: e,
        })
      );
      // console.log("no")
    }
  });
});

Doctorroute.put("/editlike/:id", (req, res) => {
  doctor.findById(req.params.id).then((result) => {
    doctor
      .findByIdAndUpdate(req.params.id, { likes: result.likes + 1 })
      .then(() => res.send("done"));
  });
});

Doctorroute.post("/login", (req, res) => {
  const data = { ...req.body };
  doctor.findOne({ email: data.email }).then((r) => {
    if (r) {
      doctor.findOne({ _id: r._id, password: data.password }).then((re) => {
        if (re) {
          res.send({ emailerror: "", passworderror: "", result: re });
        } else {
          res.send({
            emailerror: "",
            passworderror: "password doesnot match",
            result: "",
          });
        }
      });
    } else {
      res.send({
        emailerror: "Email doesnt exists",
        passworderror: "",
        result: "",
      });
    }
  });
});

Doctorroute.get("/docdata/:id", async (req, res) => {
  const docdata = await doctor.findById(req.params.id);
  res.send(docdata);
});

Doctorroute.put("/doctorbooking/:id", (req, res) => {
  doctor.findById(req.params.id).then((r) => {
    doctor
      .findByIdAndUpdate(r.id, { bookingvisible: !r.bookingvisible })
      .then((re) => res.send(re));
  });
});

module.exports = Doctorroute;
