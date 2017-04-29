require('dotenv').config();

// App setup
const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const request = require('request');
const cheerio = require('cheerio');


app.listen(PORT, () => {
  console.log("Server listening in on port", PORT);
});
