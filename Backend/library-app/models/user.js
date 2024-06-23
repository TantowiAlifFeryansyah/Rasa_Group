'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    nim: DataTypes.STRING,
    password: DataTypes.STRING
  });
  return User;
};
