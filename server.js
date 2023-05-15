require("dotenv").config();
const PORT = process.env.PORT || 3001;
const express = require("express");
const cors = require("cors");
const path = require("path");
const app = express();
app.use(express.json());
app.use(cors());

const APIKEY = process.env.GPTKEY;

app.get("/ping", function (req, res) {
  return res.send("pong");
});

//   app.use(routes);

app.get("/*", cors(), (req, res) => {
  res.sendFile(path.resolve(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
