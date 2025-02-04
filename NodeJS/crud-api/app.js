const express = require("express");
const bodyParser = require("body-parser");
require("./db");

const app = express(); //server creating

app.use(bodyParser.json());

// http://localhost:2020/users
const port = process.env.PORT || 2020;

const {
  createUser,
  deleteUser,
  fetchOneUser,
  fetchAllUser,
  updateUser,
} = require("./user.controller");

// create user

app.post("/users", createUser);

// update user
app.put("/users/:id", updateUser);

// delete User
app.delete("/users/:id", deleteUser);

// fetch one user
app.get("/users/:id", fetchOneUser);

// fetch all users
app.get("/users", fetchAllUser);

app.listen(port, () => {
  console.log(`server is listening on port ${port}`);
});
