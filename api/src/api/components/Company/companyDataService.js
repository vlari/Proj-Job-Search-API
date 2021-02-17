const DataService = require('../../../services/dataService');
const Company = require('./models/company');

class CompanyDataService extends DataService {
  constructor(model) {
    super(model);
  }
}

module.exports = new CompanyDataService(Company);
