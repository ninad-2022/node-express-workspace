const express = require("express");

// server create
const app = express();

app.listen(2011, () => {
  console.log("server is listening");
});
