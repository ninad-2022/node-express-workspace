const { Sequelize, DataTypes, Model } = require("sequelize");

const sequelize = new Sequelize("employeedb", "root", "India@123", {
  host: "localhost",
  dialect: "mysql",
  logging: false,
});

try {
  sequelize.authenticate();
  console.log("Connection has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.contact = require("./contact")(DataTypes, sequelize);
db.user = require("./user")(DataTypes, sequelize, Model);
db.sequelize.sync({ force: true });

module.exports = db;
