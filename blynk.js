const Blynk = require("blynk-library");

const AUTH = "4b11ff8fb3924b2e998057bd3ea88741";

const blynk = new Blynk.Blynk(AUTH, "etherlab.online", 7080);

let v1 = new blynk.VirtualPin(1);

v1.on("write", par => {
  console.log(par);
});
