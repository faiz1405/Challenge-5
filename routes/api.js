const express = require("express");
let users = require("../db/user.json");
const app = express();

app.use(express.Router());
app.use(express.json());

// Get user
app.get("/", (req, res) => res.json(users));
app.get("/:id", (req, res) => {
  const user = users.find((i) => i.id === +req.params.id);
  if (user) {
    res.status(200).json(user);
  }
});

// Post user
app.post("/", (req, res) => {
  const { name, email, password } = req.body;
  const id = users[users.length - 1].id + 1;
  const user = {
    id,
    name,
    email,
    password,
  };
  users.push(user);
  res.status(201).json(user);
});

// Put User
app.put("/id", (req, res) => {
  let { id } = req.params;
  let { name, email, password } = req.body;
  let user = users.find((e) => e.id == id);
  user = { ...user, name, email, password };
  users = users.map((e) => (e.id == id ? user : e));
  res.status(200).json({ msg: "Data berhasil diubah", data: user });
});

// Delete User
app.delete("/:id", (req, res) => {
  users = users.filter((a) => a.id !== +req.params.id);
  res
    .status(200)
    .json({ message: `Users id of ${req.params.id} has been deleted!` });
});

module.exports = app;
