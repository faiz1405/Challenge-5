const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.render("games", { title: "Try Out The Games" });
});

module.exports = app;
