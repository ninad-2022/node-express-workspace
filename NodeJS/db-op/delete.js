require("./db");
const userModel = require("./user.model");

// userModel.findByIdAndDelete("write id here");
// findOneAndDelete internally calls findByIdAndDelete
userModel
  .findOneAndDelete({ _id: "6312e723aedbb9ab6b90b122" })
  .then((result) => {
    console.log("deleted the user", result);
  })
  .catch((err) => {
    console.log("colud not deleted", err);
  });
