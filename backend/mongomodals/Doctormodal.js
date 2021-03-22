const { ObjectID } = require("bson");
const mongoose = require("mongoose");

const doctorschema = new mongoose.Schema({
  fullname: {
    type: String,
  },
  password: {
    type: String,
  },
  profileimg: {
    type: String,
  },
  appointments: {
    type: [{ type: Object }],
  },
  number: {
    type: Number,
  },
  hospitalname: {
    type: String,
  },
  city: {
    type: String,
  },
  leavestatus: {
    type: Boolean,
  },
  gender: {
    type: String,
  },
  address: {
    type: String,
  },
  experience: {
    type: String,
  },
  registered: {
    type: Boolean,
  },
  cost: {
    type: Number,
  },
  specialisation: {
    type: String,
  },
  likes: {
    type: Number,
  },
  bookingvisible: {
    type: Boolean,
  },
  address: {
    type: String,
  },
  role: {
    type: String,
  },
  email: {
    type: String,
  },
});

const doctor = mongoose.model("doctorsdata", doctorschema);

module.exports = doctor;
