const r = require("express").Router();

r.get("/", (req, res) => {
  res.send("fine");
});

module.exports = r;
