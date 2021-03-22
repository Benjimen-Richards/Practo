const mongoose = require("mongoose");
const cityschema = new mongoose.Schema({
  cityname: {
    type: String,
  },
  statename: {
    type: String,
  },
});

const City = mongoose.model("cities", cityschema);

module.exports = City;
