const express = require("express");
const app = express();
require("dotenv").config();
require("./config/SqlServer");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const PORT = process.env.PORT || 3000;
app.listen(3000, () => {
  console.log(`Server running on port ${PORT}`);
});
