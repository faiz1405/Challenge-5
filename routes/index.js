const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.render("index", { title: "Traditional Games" });
});

module.exports = app;
