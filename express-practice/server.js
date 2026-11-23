const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Welcome to my first backend server!");
});

app.get("/about", (req, res) => {
  res.send("This is Arman's Express server.");
});

const PORT = 4000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
