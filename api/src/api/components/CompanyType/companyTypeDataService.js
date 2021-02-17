const DataService = require('../../../services/dataService');
const CompanyType = require('./companyType');

class CompanyTypeDataService extends DataService {
  constructor(model) {
    super(model);
  }
}

module.exports = new CompanyTypeDataService(CompanyType);
