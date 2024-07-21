const express = require("express");
const authRoute = express.Router();
const validate = require("../../middleware/validate");
const {registerValidation,loginValidation} = require("./validation");

authRoute.post("/register", validate(registerValidation), (req, res) => {
  res.json("register");
});
authRoute.post("/login", validate(loginValidation), (req, res) => {
  res.json("login");
});

module.exports = authRoute;
