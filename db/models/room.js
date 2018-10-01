const mongoose = require("mongoose");

module.exports = mongoose.model(
  "room",
  new mongoose.Schema({
    name: String,
    light: {
      pin: Number,
      state: Boolean,
      butt: Number
    },
    led: {
      pin: String,
      state: Boolean,
      brightness: Number,
      butt: Number
    },
    log: String
  })
);
