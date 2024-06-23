'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const Student = sequelize.define('Student', {
    nim: DataTypes.STRING,
    name: DataTypes.STRING,
    status: DataTypes.BOOLEAN
  });
  return Student;
};
