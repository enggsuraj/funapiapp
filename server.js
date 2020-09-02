const express = require("express");
const path = require("path");
const helmet = require("helmet");

var app = express();
app.use(helmet());
app.disable("x-powered-by");

app.use((req, res, next) => {
  res.set({
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers":
      "Origin, X-Requested-With, Content-Type, Accept",
    "Access-Control-Allow-Methods": "GET, POST, PATCH, DELETE, OPTIONS",
    "Content-Security-Policy": "default-src *",
    "X-Content-Security-Policy": "default-src *",
    "X-WebKit-CSP": "default-src *",
  });
  next();
});

var port = process.env.PORT || 5000;
app.use(express.static(path.join(__dirname, "public")));

app.get("/", function (req, res) {
  res.render("index", {
    title: "blogtheorem",
    name: "enggsuraj",
  });
});

app.listen(port, () => {
  console.log("Server up on port " + port);
});
