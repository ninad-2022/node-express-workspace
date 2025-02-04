// for creating multiple connection
const mongoose = require("mongoose");

const url = "mongodb://127.0.0.1:27017/tenpm";

const conn1 = mongoose.createConnection(url);
const conn2 = mongoose.createConnection(url);

// for connection 1
conn1.on("connected", () => {
  console.log("connected to db-1");
});

conn1.on("disconnected", () => {
  console.log("disconnected from db");
});

conn1.on("err", () => {
  console.log("colud not connected");
});

// for connection 2
conn2.on("connected", () => {
  console.log("connected to db-2");
});

conn2.on("disconnected", () => {
  console.log("disconnected from db");
});

conn2.on("err", () => {
  console.log("colud not connected");
});
