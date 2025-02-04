module.exports = (DataTypes, sequelize, Model) => {
  class User extends Model {}

  User.init(
    {
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      lastName: {
        type: DataTypes.STRING,
        default: "develpoer",
      },
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
