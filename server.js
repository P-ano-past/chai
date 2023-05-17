require("dotenv").config();
const fetch = require("node-fetch");
const PORT = process.env.PORT || 3001;
const express = require("express");
const cors = require("cors");
const path = require("path");
const app = express();
app.use(express.json());
app.use(cors());

const APIKEY = process.env.GPTKEY;
console.log(`APIKEY: `, APIKEY);
app.get("/ping", function (req, res) {
  return res.send("pong");
});

//   app.use(routes);
app.post(`/completions`, async (req, res) => {
  const options = {
    method: "POST",
    headers: {
      Authorization: `Bearer ${APIKEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: "Hello!" }],
      max_tokens: 100,
    }),
  };
  try {
    const response = await fetch(
      `https://api.openai.com/v1/chat/completions`,
      options
    );
    const data = await response.json();
    res.send(data);
  } catch (error) {
    console.error(error);
  }
});

app.get("/*", cors(), (req, res) => {
  res.sendFile(path.resolve(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
