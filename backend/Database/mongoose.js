const mongoose = require("mongoose");
// const mongourl = "mongodb://localhost:27017/Practo";
const mongourl =
  "mongodb+srv://benjimen:richards@cluster0.36l95.mongodb.net/practo?retryWrites=true&w=majority";

mongoose.connect(
  process.env.MONGODB_URL || mongourl,
  {
    useNewUrlParser: true,
    useFindAndModify: true,
    useCreateIndex: true,
    useFindAndModify: true,
    useUnifiedTopology: true,
  },
  function () {
    console.log("database connected");
  }
);

module.exports = mongoose;
