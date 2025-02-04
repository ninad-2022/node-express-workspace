module.exports = (DataTypes, sequelize) => {
  const Contact = sequelize.define("contact", {
    permanent_address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    current_address: {
      type: DataTypes.STRING,
    },
  });
  return Contact;
};
