const DataService = require('../../../services/dataService');
const ExperienceLevel = require('./experienceLevel');

class ExperienceLevelDataService extends DataService {
  constructor(model) {
    super(model);
  }
}

module.exports = new ExperienceLevelDataService(ExperienceLevel);
