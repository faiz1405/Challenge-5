app.get("/home", function (req, res) {
  res.render("index");
});

app.get("/games", function (req, res) {
  res.render("games");
});

app.get("/login", function (req, res) {
  res.render("login");
});
