const sequelize = require('../../../../config/db/db');
const { DataTypes } = require('sequelize');
const IndustryType = require('../../IndustryType/industryType');
const CompanyType = require('../../CompanyType/companyType');

const Company = sequelize.define('Company', {
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
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  website: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  companySize: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  yearFounded: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

CompanyType.hasMany(Company);
Company.belongsTo(CompanyType);

IndustryType.hasMany(Company);
Company.belongsTo(IndustryType);

module.exports = Company;
