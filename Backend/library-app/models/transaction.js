'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const Transaction = sequelize.define('Transaction', {
    studentId: DataTypes.INTEGER,
    borrowDate: DataTypes.DATE,
    returnDate: DataTypes.DATE
  });
  Transaction.associate = (models) => {
    Transaction.belongsTo(models.Student, { foreignKey: 'studentId' });
    Transaction.hasMany(models.TransactionDetail, { foreignKey: 'transactionId' });
  };
  return Transaction;
};
