const cookieParser = require("cookie-parser");
const apiRouter = require("./routes/api");
const gamesRouter = require("./routes/games");
const indexRouter = require("./routes/index");
const loginRouter = require("./routes/login");
const express = require("express");
const app = express();
const port = 5000;

app.set("view engine", "ejs");
app.use(express.static("views"));
app.use(express.json());
app.use(cookieParser());

app.use("/api", apiRouter);
app.use("/games", gamesRouter);
app.use("/", indexRouter);
app.use("/login", loginRouter);

app.listen(port, () => {
  console.log(`server runing on port ${port}`);
});
