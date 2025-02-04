//API by using express

const express = require("express");
const bodyParser = require("body-parser");
// bodyParser is a middleware used to parse the data from the client side which is in JSON format into JS format.

// it is a high level server which internally creates a server
const app = express();
app.use(bodyParser.json()); //it makes data available in req body

// creating port
const port = process.env.PORT || 2020;

let users = [
  { id: 1, name: "aaa", mobile: 3219, city: "Pune" },
  { id: 2, name: "bbb", mobile: 987223, city: "Mumbai" },
  { id: 3, name: "ccc", mobile: 342342, city: "Raigad" },
  { id: 4, name: "ddd", mobile: 324334219, city: "Navi Mumbai" },
  { id: 5, name: "eee", mobile: 22352, city: "Nashik" },
  { id: 6, name: "fff", mobile: 555232, city: "Amravati" },
  { id: 7, name: "ggg", mobile: 32323, city: "Nagpur" },
];

// http://localhost:2020/ //endpoints comes after portnumber
// app.get(endpointd, callback); it gest two arguments
app.get("/", (req, res) => {
  // handle the request
  res.status(200).send("Welcome to express server");
  // response status code
  // response body
});

// http://localhost:2020/users
app.get("/users", (req, res) => {
  res.status(200).send(users);
});

app.get("/users/:id", (req, res) => {
  const { id } = req.params;
  const user = users.find((u) => u.id == id);
  res.status(200).send(user ? user : "Invalid user");
});

app.delete("/users/:id", (req, res) => {
  const { id } = req.params;

  users = users.filter((u) => u.id != id);
  res.status(200).send("User Deleted");
});

app.post("/users", (req, res) => {
  const user = req.body;
  users.push(user);
  res.status(201).send("User created...");
});

// check this code, put request for updating is not working
app.put("/users/:id", (req, res) => {
  const { id } = req.params;
  const user = req.body;

  const existingUser = users.find((user) => user.id == id);
  if (!user || !existingUser) {
    // return for stopping the execuation. if not assign then it will show error i.e headers are already send
    return res.status(404).send("Invalid user id");
  }
  const updatedUser = { ...existingUser, ...user };
  const index = users.findIndex((u) => u.id == id);
  users.splice(index, 1, updatedUser);
  res.status(200).send("User updated...");
});

// start the server
app.listen(port, () => console.log(`Server is listening on port ${port}`));
