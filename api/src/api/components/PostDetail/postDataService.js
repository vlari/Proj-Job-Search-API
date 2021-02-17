const DataService = require('../../../services/dataService');
const Post = require('./models/post');

class PostDataService extends DataService {
  constructor(model) {
    super(model);
  }
}

module.exports = new PostDataService(Post);
