const express = require("express");
const facebookroute = express.Router();
const User = require("../mongomodals/Doctormodal");
const passport = require("passport");
const FacebookStrategy = require("passport-facebook").Strategy;
let userprofile = "";
const session = require("express-session");
const { deleteOne } = require("../mongomodals/Doctormodal");
facebookroute.use(session({ secret: "benjimen" }));
facebookroute.use(passport.initialize());
facebookroute.use(passport.session());
passport.serializeUser((user, cb) => cb(null, user));
passport.deserializeUser((user, cb) => cb(null, user));
const callbackurl = "http://localhost:1111/facebook/auth/facebook/callback";
facebookroute.get("/profile", (req, res) => {
  res.send(userprofile);
  userprofile = "";
});

passport.use(
  new FacebookStrategy(
    {
      clientID: "3037414573169871",
      clientSecret: "fb7128745d26d749642c1268670520b2",
      callbackURL: callbackurl,
      profileFields: ["name", "id", "email"],
    },
    function (accessToken, refreshToken, profile, cb) {
      userprofile = profile;
      return cb(null, profile);
    }
  )
);

facebookroute.get(
  "/auth/facebook",
  passport.authenticate("facebook", { scope: "email" })
);

facebookroute.get(
  "/auth/facebook/callback",
  passport.authenticate("facebook", {
    successRedirect: "https://rocky-chamber-59030.herokuapp.com/authpage/login",
    failureRedirect: "http://localhost:3000/authpage/login",
  })
);

module.exports = facebookroute;
