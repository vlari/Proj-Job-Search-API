const DataService = require('../../../services/dataService');
const JobType = require('./jobType');

class JobTypeDataService extends DataService {
  constructor(model) {
    super(model);
  }
}

module.exports = new JobTypeDataService(JobType);
