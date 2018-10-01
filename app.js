const app = require("express")();
require("dotenv").config();
require("mongoose").connect(
  process.env.MONGO_URI,
  { useNewUrlParser: true },
  err => {
    console.log("mongo up");
  }
);

app.use((req, res, next) => {
  console.log(
    req.connection.remoteAddress,
    req.method,
    req.path,
    res.statusCode
  );
  next();
});

const Key = require("./db/models/apikey");
app.use(
  "/:key",
  (req, res, next) => {
    Key.findOne({ key: req.params.key }, (err, data) => {
      if (err) throw err;

      if (data != null) next();
      else res.send("I don't think so");
    });
  },
  require("./routers/root")
);

const port = process.env.PORT;
app.listen(port, () => {
  console.log("on port", port);
});
