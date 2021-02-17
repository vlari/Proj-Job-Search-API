const sequelize = require('../../../../config/db/db');
const { DataTypes } = require('sequelize');
const Company = require('../../Company/models/company');

const Post = sequelize.define('Post', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  jobFunctionName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

Company.hasMany(Post);
Post.belongsTo(Company);

module.exports = Post;
