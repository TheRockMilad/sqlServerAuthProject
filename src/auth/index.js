const express = require("express");
const authRoute = express.Router();

authRoute.get("/register", (req, res) => {
    res.json('register')
});
authRoute.get("/login", (req, res) => {
    res.json('login')
});

module.exports = authRoute;
