const Blynk = require("blynk-library");
require("dotenv").config();
const request = require("request");

const AUTH = process.env.AUTH;

const blynk = new Blynk.Blynk(AUTH, {
  connector: new Blynk.TcpClient({
    addr: "etherlab.online",
    port: 7080
  })
});

let v1 = new blynk.VirtualPin(1);
let v0 = new blynk.VirtualPin(0);
let v2 = new blynk.VirtualPin(2);
let v3 = new blynk.VirtualPin(3);
let v4 = new blynk.VirtualPin(4);

v1.on("write", par => {
  console.log(par);
});

let status = (par, pin) => {
  let job;
  switch (par) {xxx
  }

  request.get(
    "http://" +
      process.env.JCRED +
      "@xxx/job/" +
      job +
      "/lastBuild/api/json?tree=result",
    (err, res, body) => {
      console.log(job + ":\n" + JSON.parse(body).result + "\n\n");
      pin.write(job + ": " + JSON.parse(body).result);
    }
  );
};

v2.on("read", () => status("1", v2));
v3.on("read", () => status("2", v3));
v4.on("read", () => status("3", v4));
