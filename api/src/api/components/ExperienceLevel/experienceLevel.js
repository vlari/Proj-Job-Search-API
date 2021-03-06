const sequelize = require('../../../config/db/db');
const { DataTypes } = require('sequelize');

const ExperienceLevel = sequelize.define('ExperienceLevel', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = ExperienceLevel;
