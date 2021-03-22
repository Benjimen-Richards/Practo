const mongoose = require("mongoose");
const specialschema = new mongoose.Schema({
  specialisation: {
    type: String,
  },
});
const specialisation = mongoose.model("specialisation", specialschema);
module.exports = specialisation;
