const mongoose = require("mongoose");

const devSchema = new mongoose.Schema({
  _id: String,
  type: String,
  output_id: String,
  state: Boolean,
  level: Number,
  default_level: Number,
  board: String,
  pin: String
});

module.exports = {
  Device: new mongoose.model("device", devSchema),

  Room: new mongoose.model(
    "room",
    new mongoose.Schema({
      name: String,
      devices: [String]
    })
  ),

  Log: new mongoose.model(
    "log",
    new mongoose.Schema({
      timestamp: Number,
      devices: [devSchema]
    })
  )
};
