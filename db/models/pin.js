const mongoose = require("mongoose");

module.exports = mongoose.model(
  "pin",
  new mongoose.Schema({
    number: String,
    type: String
  })
);
