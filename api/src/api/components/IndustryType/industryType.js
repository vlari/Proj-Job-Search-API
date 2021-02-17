const sequelize = require('../../../config/db/db');
const { DataTypes } = require('sequelize');

const IndustryType = sequelize.define('IndustryType', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  industryTypeName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  industryTypeDescription: {
    type: DataTypes.STRING,
    allowNull: true,
  }
});

module.exports = IndustryType;