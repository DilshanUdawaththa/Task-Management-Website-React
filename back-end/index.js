//require express & store it in a constant
const express = require("express");

//app will represent express application
const app = express();

//create an end point
app.get("/", (req, res) => {
  res.send("Welcome to our task management API");
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
