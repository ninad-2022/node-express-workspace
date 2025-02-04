// const userModel = require("./user.model");
const userModel = require("../models/user.model");

class UserCtrl {
  // create user
  static createUser(req, res) {
    const user = req.body; //it comes from client side

    console.log("req.file", req.file);
    if (req.file) user.avatar = req.file.filename;
    if (!user.email)
      res.status(500).send({ message: "could not created", error: null });

    new userModel(user)
      .save()
      .then((result) => {
        res.status(201).send({ message: "user created", data: result });
      })
      .catch((err) => {
        console.log(err);
        res.status(500).send({ message: "could not created", error: err });
      });
  }

  // update user
  static updateUser(req, res) {
    const { id } = req.params;
    const user = req.body;
    if (req.file) user.avatar = req.file.filename;
    userModel
      .findOneAndUpdate({ _id: id }, user, { new: true })
      .then((result) => {
        res.status(200).send({ message: "user updated", data: result });
      })
      .catch((err) => {
        res.status(404).send({ message: "user not updated", error: err });
      });
  }

  // delete user
  static deleteUser(req, res) {
    const { id } = req.params;
    userModel
      .findOneAndDelete({ _id: id })
      .then((result) => {
        res.status(200).send({ message: "user deleted", data: result });
      })
      .catch((err) => {
        res.status(404).send({ message: "user not deleted", error: err });
      });
  }

  // fetch one user
  static fetchOneUser(req, res) {
    const { id } = req.params;
    userModel
      .findOne({ _id: id })
      .then((result) => {
        res.status(200).send({ message: "user deleted", data: result });
      })
      .catch((err) => {
        res.status(404).send({ message: "user not deleted", error: err });
      });
  }

  // fetch all users
  static fetchAllUser(req, res) {
    userModel
      .find()
      .then((result) => {
        res.status(200).send({ message: "user list", data: result });
      })
      .catch((err) => {
        res.status(404).send({ message: "user not created", error: err });
      });
  }
}

module.exports = UserCtrl;
