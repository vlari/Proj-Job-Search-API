const sequelize = require('../../../../config/db/db');
const { DataTypes } = require('sequelize');
const Account = require('./account');
const Tag = require('../../Tag/tag');

const AccountTag = sequelize.define('AccountTag', {
  AccountId: {
    type: DataTypes.INTEGER,
    references: {
      model: Company,
      key: 'id',
    },
  },
  TagId: {
    type: DataTypes.INTEGER,
    references: {
      model: Tag,
      key: 'id',
    },
  },
});

Account.belongsToMany(Tag, { through: AccountTag });
Tag.belongsToMany(Account, { through: AccountTag });

module.exports = AccountTag;
