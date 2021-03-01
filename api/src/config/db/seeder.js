const chalk = require('chalk');

const CompanyType = require('../../api/components/CompanyType/companyType');
const IndustryType = require('../../api/components/IndustryType/industryType');
const Company = require('../../api/components/Company/models/company');
const Location = require('../../api/components/Company/models/location');
const Specialty = require('../../api/components/Specialty/specialty');
const Tag = require('../../api/components/Tag/tag');
const CompanySpecialty = require('../../api/components/Company/models/companySpecialty');
const PostDetail = require('../../api/components/PostDetail/models/postDetail');
const Post = require('../../api/components/PostDetail/models/post');
const JobType = require('../../api/components/JobType/jobType');
const ExperienceLevel = require('../../api/components/ExperienceLevel/experienceLevel');

const companyTypes = require('./data/companyTypes.json');
const industryTypes = require('./data/industryTypes.json');
const companies = require('./data/companies.json');
const locations = require('./data/locations.json');
const specialties = require('./data/specialties.json');
const tags = require('./data/tags.json');
const companySpecialties = require('./data/companySpecialties.json');
const postDetails = require('./data/postDetails.json');
const posts = require('./data/posts.json');
const jobTypes = require('./data/jobTypes.json');
const experienceLevels = require('./data/experienceLevels.json');

const seedDatabase = async () => {
  try {
    await CompanyType.bulkCreate(companyTypes);

    await IndustryType.bulkCreate(industryTypes);

    await Specialty.bulkCreate(specialties);

    await Company.bulkCreate(companies);

    await Location.bulkCreate(locations);

    await Tag.bulkCreate(tags);

    await CompanySpecialty.bulkCreate(companySpecialties);

    await PostDetail.bulkCreate(postDetails);

    await JobType.bulkCreate(jobTypes);

    await ExperienceLevel.bulkCreate(experienceLevels);

    await Post.bulkCreate(posts);

    console.log(chalk.yellow.inverse('Database seed ended'));
  } catch (error) {
    console.log(chalk.red.inverse('Error seeding the database', error));
  }
};

module.exports = seedDatabase;
