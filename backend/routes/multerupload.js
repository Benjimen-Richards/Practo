const multer = require("multer");
const path = require("path");
const express = require("express");
const { DocumentProvider } = require("mongoose");
const multerupload = express.Router();
// console.log("pathmulter", );
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
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

multerupload.post("/file", upload.single("image"), (req, res, next) => {
  res.send(req.file.path);
});

module.exports = multerupload;
