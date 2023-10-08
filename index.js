const express = require("express");
const app = express();

const mongoose = require("mongoose");
const debug = require("debug")("app:main");
const config = require("config");
const router = require("./src/routes");
const cors_proxy = require("cors-anywhere");

require("./startup/config")(app, express);
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
require("./startup/db")();

require("./startup/logging")();

app.use("/api", router);

const Port = process.env.PORT || 5000;
app.listen(Port, () => console.log(`listening on ${Port}`));

const host = process.env.HOST || "0.0.0.0";
// Listen on a specific port via the PORT environment variable
const port = process.env.PORT || 8080;

cors_proxy
  .createServer({
    originWhitelist: [], // Allow all origins
    requireHeader: ["origin", "x-requested-with"],
    removeHeaders: ["cookie", "cookie2"],
  })
  .listen(port, host, function () {
    console.log("Running CORS Anywhere on " + host + ":" + port);
  });
