const express = require("express");
const app = express();
require("./config/database");

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});



rsync -avz -e "ssh -p 22" /path/to/local/server/ your_username@server_ip:/path/to/destination/
