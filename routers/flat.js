const r = require("express").Router();
const models = require("../db/models");

r.post("/butt", (req, res) => {
  models.Device.findOne({ type: "button", pin: req.params.pin }, (err, dev) => {
    if (err) throw err;
    models.Device.findOne({ _id: dev.output_id }, (err, output) => {
      if (err) throw err;
      output.state = !output.state;
      output.save()
    });
  });
});

module.exports = r;
