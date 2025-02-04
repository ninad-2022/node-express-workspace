// for creating defualt connection
const mongoose = require("mongoose");

//  const url = "mongodb://127.0.0.1:27017/databaseName"
const url = "mongodb://127.0.0.1:27017/lookup";

// creating a default connection to mongoDb
mongoose.connect(url, (err) => {
  if (err) console.log("could not connect to db", err);
  else console.log("connected to db by connection");
});

// for accessing created default connection
const conn = mongoose.connection;

conn.on("connected", () => {
  console.log("connected to db");
});

conn.on("disconnected", () => {
  console.log("disconnected from db");
});

conn.on("err", () => {
  console.log("colud not connected");
});
