const r = require("express").Router();

r.use("/flat", require("./flat"));

r.get("/", (req, res) => {
  res.send("fine");
});

module.exports = r;
