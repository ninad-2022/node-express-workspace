require("./db");
const userModel = require("./user.model");

const users = [
  {
    name: "Toppper Skills-2",
    mobile: 37632478342,
    email: "topperskills-2@gmail.com",
    age: 5,
    gender: "other",
    address: {
      street: "vadgaon",
      city: "pune",
      country: "India",
      pincode: 411041,
    },
  },
  {
    name: "Toppper Skills-3",
    mobile: 37632478342,
    email: "topperskills-3@gmail.com",
    age: 5,
    gender: "other",
    address: {
      street: "vadgaon",
      city: "pune",
      country: "India",
      pincode: 411041,
    },
  },
  {
    name: "Toppper Skills-4",
    mobile: 37632478342,
    email: "topperskills-4@gmail.com",
    age: 5,
    gender: "other",
    address: {
      street: "vadgaon",
      city: "pune",
      country: "India",
      pincode: 411041,
    },
  },
  {
    name: "Toppper Skills-5",
    mobile: 37632478342,
    email: "topperskills-5@gmail.com",
    age: 5,
    gender: "other",
    address: {
      street: "vadgaon",
      city: "pune",
      country: "India",
      pincode: 411041,
    },
  },
  {
    name: "Toppper Skills-6",
    mobile: 37632478342,
    email: "topperskills-@gmail.com",
    age: 5,
    gender: "other",
    address: {
      street: "vadgaon",
      city: "pune",
      country: "India",
      pincode: 411041,
    },
  },
  {
    name: "Toppper Skills-7",
    mobile: 37632478342,
    email: "topperskills-7@gmail.com",
    age: 5,
    gender: "other",
    address: {
      street: "vadgaon",
      city: "pune",
      country: "India",
      pincode: 411041,
    },
  },
  {
    name: "Toppper Skills-8",
    mobile: 37632478342,
    email: "topperskills-8@gmail.com",
    age: 5,
    gender: "other",
    address: {
      street: "vadgaon",
      city: "pune",
      country: "India",
      pincode: 411041,
    },
  },
  {
    name: "Toppper Skills-9",
    mobile: 37632478342,
    email: "topperskills-9@gmail.com",
    age: 5,
    gender: "other",
    address: {
      street: "vadgaon",
      city: "pune",
      country: "India",
      pincode: 411041,
    },
  },
  {
    name: "Toppper Skills-10",
    mobile: 37632478342,
    email: "topperskills-10@gmail.com",
    age: 5,
    gender: "other",
    address: {
      street: "vadgaon",
      city: "pune",
      country: "India",
      pincode: 411041,
    },
  },
  {
    name: "Toppper Skills-11",
    mobile: 37632478342,
    email: "topperskills-11@gmail.com",
    age: 5,
    gender: "other",
    address: {
      street: "vadgaon",
      city: "pune",
      country: "India",
      pincode: 411041,
    },
  },
];

// const userDoc = new userModel(user);
// userDoc
//   .save()
//   .then((result) => {
//     console.log("user created-", result);
//   })
//   .catch((err) => {
//     console.log("could not created", err);
//   });

userModel
  .insertMany(users)
  .then((result) => {
    console.log("user created", result);
  })
  .catch((err) => {
    console.log("could not created", err);
  });
