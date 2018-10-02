const mongoose = require("mongoose");

let devSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  type: String,
  output_id: mongoose.Schema.Types.ObjectId,
  state: Boolean,
  level: Number,
  default_level: Number,
  board: String,
  pin: String
});

module.exports = {
  Device: mongoose.model("device", devSchema),

  Room: mongoose.model(
    "room",
    new mongoose.Schema({
      name: String,
      devices: [String]
    })
  ),

  Log: mongoose.model(
    "log",
    new mongoose.Schema({
      timestamp: Number,
      states: [devSchema]
    })
  )
};
