const express = require("express");
const app = express();
const cors = require("cors");
require("./config/database");
require('dotenv').config();

app.use(express.static("public"));
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
