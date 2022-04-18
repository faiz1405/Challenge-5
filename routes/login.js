const express = require("express");
const users = require("../db/user.json");
const app = express();

app.use(express.urlencoded());

app.get("/", (req, res) => {
  res.render("login", { title: "Login Page" });
});

app.post("/", (req, res) => {
  let { name, email, password } = req.body;
  const id = users[users.length - 1].id + 1;
  const user = { id, name, email, password };

  users.push(user);
  res.render("indes");
  return res
    .status(201)
    .json({ user, message: "User added successfully cek /api for make sure" });
});

module.exports = app;
