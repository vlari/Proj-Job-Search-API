const DataService = require('../../../services/dataService');
const Tag = require('./tag');

class TagDataService extends DataService {
  constructor(model) {
    super(model);
  }
}

module.exports = new TagDataService(Tag);
