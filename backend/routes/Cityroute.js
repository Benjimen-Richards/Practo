const express = require("express");
const City = require("../mongomodals/Citymodal");
const specialisation = require("../mongomodals/Specialisationmodal");
const Cityroute = express.Router();

Cityroute.get("/all", (req, res) => {
  City.find().then((r) => res.send(r));
});
Cityroute.get("/special", (req, res) => {
  specialisation.find().then((r) => res.send(r));
});

Cityroute.post("/addcity", (req, res) => {
  const data = { ...req.body };
  citydata = new City(data);
  citydata.save().then((r) => res.send(r));
});
Cityroute.post("/addspecial", (req, res) => {
  const data = { ...req.body };
  // res.send(data);
  spec = new specialisation(data);
  spec.save().then((r) => res.send(r));
});

Cityroute.post("/addspecialall", (req, res) => {
  specialisation.insertMany({ ...req.body }).then((r) => res.send(r));
});
module.exports = Cityroute;
