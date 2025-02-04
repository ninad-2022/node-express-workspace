const { model } = require("mongoose");

const userModel = require("./user.model");

class UserCtrl {
  static createUser(req, res) {
    const user = req.body;

    if (!user.email)
      res.status(500).send({ message: "could not created", error: null });
    // this model provide us constructor in which we use make a object of model, often it called as document

    new userModel(user)
      .save()
      .then((result) => {
        res.status(201).send({ message: "user created", data: result }); //it gives object of respons and we need to call response.data.data  like axios.
      })
      .catch((err) => {
        console.log(err);
        res.status(500).send({ message: "could not created", error: err });
      });
  }

  static updateUser(req, res) {
    const { id } = req.params;
    const user = req.body;
    // findOneAndUpdate(filter, what-to-update,give true)
    userModel
      .findOneAndUpdate({ _id: id }, user, { new: true })
      .then((result) => {
        res.status(200).send({ message: "user updated", data: result });
      })
      .catch((err) => {
        res.status(404).send({ message: "user not updated", error: err });
      });
  }

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
