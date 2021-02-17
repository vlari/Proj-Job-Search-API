const chalk = require('chalk');

const CompanyType = require('../../api/components/CompanyType/companyType');
const IndustryType = require('../../api/components/IndustryType/industryType');
const Company = require('../../api/components/Company/models/company');
const Location = require('../../api/components/Company/models/location');
const Specialty = require('../../api/components/Specialty/specialty');
const Tag = require('../../api/components/Tag/tag');

const companyTypes = require('./data/companyTypes.json');
const industryTypes = require('./data/industryTypes.json');
const companies = require('./data/companies.json');
const locations = require('./data/locations.json');
const specialties = require('./data/specialties.json');
const tags = require('./data/tags.json');

const seedDatabase = async () => {
  try {
    await CompanyType.bulkCreate(companyTypes);

    await IndustryType.bulkCreate(industryTypes);

    await Specialty.bulkCreate(specialties);

    await Company.bulkCreate(companies);

    await Location.bulkCreate(locations);

    await Tag.bulkCreate(tags);

    console.log(chalk.yellow.inverse('Database seed ended'));
  } catch (error) {
    console.log(chalk.red.inverse('Error seeding the database', error));
  }
};

module.exports = seedDatabase;
