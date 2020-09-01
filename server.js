const express = require("express");
const path = require("path");
const helmet = require("helmet");

var app = express();
app.use(helmet());
app.disable("x-powered-by");

let sources = {
  "default-src": ["'self'"],
  "script-src-elem": [
    "'self'",
    "https://unpkg.com/ionicons@5.1.2/dist/ionicons.js",
    "unsafe-inline",
    "unsafe-eval",
  ],
  "connect-src": ["'self'", "https://sv443.net"],
};

let csp = Object.keys(sources).map(function (key) {
  return `${key} ${sources[key].join(" ")};`;
});

app.use(function (req, res, next) {
  res.setHeader("Content-Security-Policy", csp.join(" "));
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
