const sequelize = require('../../../../config/db/db');
const { DataTypes } = require('sequelize');

const PostDetail = sequelize.define('PostDetail', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  responsabilities: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  skills: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = PostDetail;
