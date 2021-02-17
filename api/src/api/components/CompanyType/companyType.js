const sequelize = require('../../../config/db/db');
const { DataTypes } = require('sequelize');

const CompanyType = sequelize.define('CompanyType', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  companyTypeName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  companyTypeDescription: {
    type: DataTypes.STRING,
    allowNull: true,
  }
});

module.exports = CompanyType;