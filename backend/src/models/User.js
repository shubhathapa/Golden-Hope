const { DataTypes } = require('sequelize')
const sequelize = require('../db')

const User = sequelize.define('User', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,           // no two users can have the same email
    validate: {
      isEmail: true,        // makes sure it's a valid email format
    },
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,       // we store a hashed version, never plain text
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: true,        // optional
  },
  address: {
    type: DataTypes.TEXT,
    allowNull: true,        // optional
  },
})

module.exports = User