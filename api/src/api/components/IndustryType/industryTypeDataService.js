const DataService = require('../../../services/dataService');
const IndustryType = require('./industryType');

class IndustryTypeDataService extends DataService {
  constructor(model) {
    super(model);
  }
}

module.exports = new IndustryTypeDataService(IndustryType);
