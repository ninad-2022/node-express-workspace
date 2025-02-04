const express = require("express");
const bodyParser = require("body-parser");
require("./models/db");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 8888;

// using manual coading for avoiding CORS error
// app.use((req, res, next) => {
//   res.header("Access-Control-Allow-Origin", "*");
//   next();
// });

// npm i cors
// using middleware for avoiding CORS error
app.use(cors());
app.use(bodyParser.json());
app.use(express.static("uploads"));
app.use("/users", require("./routes/user.route"));

app.listen(port, console.log(`server is listening on port ${port}`));
