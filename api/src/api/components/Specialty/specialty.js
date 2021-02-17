const sequelize = require('../../../config/db/db');
const { DataTypes } = require('sequelize');

const Specialty = sequelize.define('Specialty', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  specialtyName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  specialtyDescription: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});

module.exports = Specialty;
