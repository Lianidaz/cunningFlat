const r = require("express").Router();
const Room = require("../db/models/room");

r.post("/butt", (req, res) => {
  Room.findOneAndUpdate(
    [{ light: { butt: req.body.pin } }, { led: { butt: req.body.pin } }],
    { state: !state }
  );
});

module.exports = r;
