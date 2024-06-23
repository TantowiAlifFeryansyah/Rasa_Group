'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const TransactionDetail = sequelize.define('TransactionDetail', {
    transactionId: DataTypes.INTEGER,
    bookId: DataTypes.INTEGER
  });
  TransactionDetail.associate = (models) => {
    TransactionDetail.belongsTo(models.Transaction, { foreignKey: 'transactionId' });
    TransactionDetail.belongsTo(models.Book, { foreignKey: 'bookId' });
  };
  return TransactionDetail;
};
