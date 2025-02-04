require("./db");
const userModel = require("./user.model");

const filter = { name: "Toppper Skills-10" };
const data = { gender: "female" };
const options = { new: true };

// userModel
//   .findOneAndUpdate(filter, data, options)
//   .then((result) => {
//     console.log("update user", result);
//   })
//   .catch((err) => {
//     console.log("error", err);
//   });

// userModel
//   .updateMany({ "address.city": /pune/i }, { "address.city": "Mumbai" })
//   .then((result) => {
//     console.log("Updated", result);
//   })
//   .catch((err) => {
//     console.log("Error", err);
//   });

userModel
  .updateMany(
    { "address.city": /mumbai/i },
    {
      "address.city": "Mumbai",
      "address.landmark": "Navle IT park",
      $unset: { age: 40 },
    }
  )
  .then((result) => {
    console.log("Updated", result);
  })
  .catch((err) => {
    console.log("Error", err);
  });
