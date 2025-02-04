const mongoose = require("mongoose");

// establishing connection
// there are two ways to esatablish connection

// 1- by using connect()
//     this is used to create a default connection to mongodb
// example:--
//  const url = "mongodb://127.0.0.1:27017/database"
const url = "mongodb://127.0.0.1:27017/praticeNodeDb";

// creating a default connection to mongoDb
mongoose.connect(url, (err) => {
  if (err) console.log("could not connected to db", err);
  else console.log("connected to db");
});

// accessing default connection
const conn = mongoose.connection;
// const conn = mongoose.createConnection();

conn.on("connected", () => {
  console.log("connected to db");
});

conn.on("disconnected", () => {
  console.log("disconnected from db");
});

conn.on("err", () => {
  console.log("colud not connected");
});
