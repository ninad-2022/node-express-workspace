require("./db");
const UserModel = require("./user.model");

// fetch all users
// UserModel.find(filter, callback);

UserModel.find({})
  .then((result) => console.log(result))
  .catch((err) => console.log(err));

// fetch the user having phone 4444
UserModel.findOne({ name: "aaa" })
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });

UserModel.findOne({ phone: 444 }).then().catch();
