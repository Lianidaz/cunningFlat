const cmd = require("node-cmd");
const models = require("./db/models");

// require("./log");

models.Device.find({ type: "button" }, (err, data) => {
  if (err) throw err;
  for (let dev of data) {
    let command = "python ./bits/butt.py" + dev.toObject().pin;
    cmd.run(command);
  }
});
