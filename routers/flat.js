const r = require("express").Router();
const models = require("../db/models");

r.post("/butt", (req, res) => {
  models.Device.findOne({ type: "button", pin: req.params.pin }, (err, dev) => {
    if (err) throw err;
    models.Device.findOne({ _id: dev.output_id }, (err, output) => {
      if (err) throw err;
      output.state = !output.state;
      output.save();
    });
  });
});

r.get("/state", (req, res) => {
  res.send(
    models.Log.findOne({}, (err, data) => {
      if (err) res.send(err);
      res.send(data);
    })
  );
});

r.get("/state/:room", (req, res) => {
  models.Room.findOne({ nam: req.params.room }, (err, data) => {
    if (err) res.send(err);
    models.Log.findOne({}, (err, entry) => {
      let arr = [];
      if (err) res.send(err);
      for (d of data.devices) {
        for (p of entry.states) {
          if (d._id === p._id) {
            arr.push(p);
          }
        }
      }
      res.send(arr);
    });
  });
});

module.exports = r;
