const cmd = require("node-cmd");
const Pin = require("./db/models/pin");

Pin.find({ type: "button" }, (err, data) => {
  for (let pin of data) {
    let p = pin.toObject();
    let command = "python ./bits/butt.py" + p.number;
    cmd.run(command);
  }
});
