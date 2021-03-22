const path = require("path");
const dotenv = require("dotenv");
dotenv.config({ path: path.join(__dirname, "/.env") });
const port = process.env.PORT;
const express = require("express");
const app = express();
const parser = require("body-parser");
const cors = require("cors");
const Doctorroute = require("./routes/DoctorRoute");
const facebookroute = require("./routes/facebookroute");
const Userroute = require("./routes/Userroute");
const Cityroute = require("./routes/Cityroute");
const multerupload = require("./routes/multerupload");
require("./Database/mongoose");
app.use(parser.urlencoded({ extended: true }));
app.use(parser.json());
app.use(cors());
app.get("/profile", (req, res) => {
  res.send("valid user");
});
app.get("/error", (req, res) => {
  res.send("not valid");
});
// console.log("pathserver", path.join(__dirname, "../uploads"));
app.use("/uploads", express.static(path.join(__dirname, "/uploads")));
app.use("/doctors", Doctorroute);
app.use("/user", Userroute);
app.use("/facebook", facebookroute);
app.use("/city", Cityroute);
app.use("/multer", multerupload);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/build")));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend", "build", "index.html"));
  });
} else {
  app.get("/", (req, res) => {
    res.send("API runnning");
  });
}

app.listen(port, () => console.log(`Server is on ${port}`));
