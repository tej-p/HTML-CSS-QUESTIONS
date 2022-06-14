const express = require("express");
const mongoose = require("mongoose");
const newUrl = require("./models/newUrl");

const app = express();

mongoose.connect("mongodb://127.0.0.1:27017/url_shortener", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));

app.get("/", async (req, res) => {
  const newUrl = await newUrl.find();
  res.render("index", { newUrl: newUrl });
});

app.post("/newUrl", async (req, res) => {
  await newUrl.create({ actual: req.body.actualUrl });

  res.redirect("/");
});

app.get("/:newUrl", async (req, res) => {
  const newUrl = await newUrl.findOne({ new: req.params.newUrl });
  if (newUrl == null) return res.sendStatus(404);

  res.redirect(newUrl.actual);
});

app.listen(3800);
