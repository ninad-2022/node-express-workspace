const mongoose = require("mongoose");

// creating a schema
const userSchema = new mongoose.Schema({
  name: String,
  mobile: { type: String, unique: true, required: true },
  email: { type: String, unique: true, required: true },
  password: String,
  gender: String,
  age: String,
  address: {
    street: String,
    city: String,
    country: String,
    pincode: Number,
    landmark: String,
  },
  status: Boolean,
});

// creating a model
// module.exports = mongoose.model(modelname, schema, collection-name)

module.exports = mongoose.model("Users", userSchema, "customers");
