const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  mobile: String,
  email: String,
  password: String,
  age: Number,
  gender: String,
  status: Number,
  avatar: String,
  address: {
    street: String,
    city: String,
    country: String,
    pincode: Number,
    landmark: String,
  },
});

module.exports = mongoose.model("user", userSchema, "customers");
