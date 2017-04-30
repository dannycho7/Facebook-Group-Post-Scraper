require('dotenv').config();

// App setup
const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const request = require('request');
const cheerio = require('cheerio');
const bodyParser = require('body-parser');
const util = require('util');

app.use(bodyParser.urlencoded({ extended: true }));

app.post("*", (req, res) => {
  let $ = cheerio.load(req.body.response);
  console.log("Response:", util.inspect(req.body.response));
  res.end();
});

app.listen(PORT, () => {
  console.log("Server listening in on port", PORT);
});
