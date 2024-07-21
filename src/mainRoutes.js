const express = require("express");
const authRoute = require("./auth");
const mainRoute = express.Router();


mainRoute.use('/auth',authRoute)

module.exports = mainRoute;
