const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const Sensor = sequelize.define('user', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  serial: {type: DataTypes.STRING, allowNull:false},
  name: {type: DataTypes.STRING,allowNull:false},
  temperature: {type: DataTypes.FLOAT,allowNull:false },
})

module.exports = {
  Sensor,
}