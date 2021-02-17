const sequelize = require('../../../../config/db/db');
const { DataTypes } = require('sequelize');
const Company = require('./company');
const Specialty = require('../../Specialty/specialty');

const CompanySpecialty = sequelize.define('CompanySpecialty', {
  CompanyId: {
    type: DataTypes.INTEGER,
    references: {
      model: Company,
      key: 'id',
    },
  },
  SpecialtyId: {
    type: DataTypes.INTEGER,
    references: {
      model: Specialty,
      key: 'id',
    },
  },
});

Company.belongsToMany(Specialty, { through: CompanySpecialty });
Specialty.belongsToMany(Company, { through: CompanySpecialty });

module.exports = CompanySpecialty;
