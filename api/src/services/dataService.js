class DataService {
  constructor(model) {
    this.model = model;
  }

  async getAll(query = {}) {
    try {
      const result = await this.model.findAll({});

      return { resources: result, pagination: {}, count: result.length };
    } catch (error) {
      return error;
    }
  }

  async getBy(page, limit, query = {}) {
    try {
      const startIndex = (page - 1) * limit;
      const endIndex = page * limit;

      query = { ...query, offset: startIndex, limit };

      const { rows, count } = await this.model.findAndCountAll(query);

      const pagination = {};

      if (endIndex < count) {
        pagination.next = {
          page: page + 1,
          limit,
        };
      }

      if (startIndex > 0) {
        pagination.prev = {
          page: page - 1,
          limit,
        };
      }

      return { resources: rows, pagination, count };
    } catch (error) {
      return error;
    }
  }

  async getById(id) {
    try {
      const result = await this.model.findByPk(id);

      return result;
    } catch (error) {
      return error;
    }
  }

  async add(resource) {}

  async update(id, resource) {}

  async remove(id) {}
}

module.exports = DataService;
