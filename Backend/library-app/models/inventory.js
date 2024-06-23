'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const Inventory = sequelize.define('Inventory', {
    bookId: DataTypes.INTEGER,
    location: DataTypes.STRING
  });
  Inventory.associate = (models) => {
    Inventory.belongsTo(models.Book, { foreignKey: 'bookId' });
  };
  return Inventory;
};
