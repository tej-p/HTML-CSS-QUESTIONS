const express = require("express");
const start = require("./puppet");
// console.log(start);

var cors = require("cors");

var app = express();

app.use(cors());

app.use(express.json());

app.post("/findjobs", async (req, res) => {
  try {
    let data = await start();
    res.send(data);
  } catch (err) {
    res.send(err);
  }
});

app.listen(3890, async () => {
  try {
    console.log("listening on port 3890");
  } catch (err) {
    console.log(err);
  }
});
