const sequelize = require('../../../../config/db/db');
const { DataTypes } = require('sequelize');
const Company = require('../../Company/models/company');
const PostDetail = require('./postDetail');
const JobType = require('../../JobType/jobType');
const ExperienceLevel = require('../../ExperienceLevel/experienceLevel');

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

PostDetail.hasOne(Post);
Post.belongsTo(PostDetail);

JobType.hasMany(Post);
Post.belongsTo(JobType);

ExperienceLevel.hasMany(Post);
Post.belongsTo(ExperienceLevel);

module.exports = Post;
