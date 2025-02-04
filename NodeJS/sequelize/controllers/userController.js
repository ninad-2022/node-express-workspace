const { user } = require("../models");

const addUser = async (req, res) => {
  const jane = user.build({ name: "Jane" });
  console.log(jane instanceof user);
  console.log(jane.name);
  await jane.save();
  console.log("ajANE IS CREATED");
  console.log("jane: ", jane.toJSON());
  res.status(200).json(jane.toJSON());
};
