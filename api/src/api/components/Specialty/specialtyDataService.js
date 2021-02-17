const DataService = require('../../../services/dataService');
const Specialty = require('./specialty');

class SpecialtyDataService extends DataService {
  constructor(model) {
    super(model);
  }
}

module.exports = new SpecialtyDataService(Specialty);
