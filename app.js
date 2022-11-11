const https = require("https");
const fs = require("fs");
const express = require("express");

const app = express();
const port = 9999;

https.createServer(
  {
    key: fs.readFileSync("key.pem"),
    cert: fs.readFileSync("cert.pem"),
  },
  app
)
  .listen(port, () => {
    console.log("server is runing on port " + port + ".");
  });

app.use(express.static('public'));
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/public/index.html");
});