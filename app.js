const app = require("express")();
app.use(require("body-parser").json());
require("dotenv").config();
require("mongoose").connect(
  process.env.MONGO_URI,
  { useNewUrlParser: true },
  err => {
    console.log(err || "mongo up");
  }
);

require("./init");

app.use((req, res, next) => {
  console.log(
    req.connection.remoteAddress,
    req.method,
    req.path,
    res.statusCode
  );
  next();
});

app.use(
  "/:key",
  (req, res, next) => {
    if (req.params.key === process.env.APIKEY) next();
    else res.send("I don't think so");
  },
  require("./routers/root")
);

const port = process.env.PORT;
app.listen(port, () => {
  console.log("on port", port);
});
