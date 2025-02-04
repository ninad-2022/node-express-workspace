const express = require("express");
const bodyParser = require("body-parser");
const app = express();
require("./models/index");

app.use(bodyParser.json());

app.get("/", function (req, res) {
  res.send("Hello World");
});

// User.sync({ force: true }); //start db
// Contact.sync({ force: true });
// User.drop();

app.listen(3000, () => {
  console.log("server is listening on 3000");
});
