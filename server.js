const express = require("express");
const app = express();
const fs = require("fs");
const path = require ("path");

app.use('/build', express.static(path.join(__dirname, 'build')))

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
});

console.log("listening on port 3000")
app.listen(3000);
