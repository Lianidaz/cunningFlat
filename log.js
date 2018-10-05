const models = require("./db/models");

setInterval(() => {
  let states = [];
  models.Device.find({ type: { $ne: "button" } }, (err, devs) => {
    for (let dev of devs) states.push(dev.toObject());
    models.Log.insertMany({ timestamp: Date.now(), states });
  });
}, 60000);
