const { DataTypes } = require('sequelize')
const sequelize = require('../db')
const Product = require('./Product')

const CartItem = sequelize.define('CartItem', {
  productId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 1
  }
})

CartItem.belongsTo(Product, { foreignKey: 'productId' })

module.exports = CartItem