class DataService {
  constructor(model) {
    this.model = model;
  }

  async getAll() {
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
      const { filter = {}, options = {} } = query;

      const dbOptions = {
        ...options,
        offset: startIndex,
        limit,
      };

      const dbQuery = getValidFileter(dbOptions, filter);

      const { rows, count } = await this.model.findAndCountAll(dbQuery);

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

function getValidFileter(options, dbFilter) {
  if (dbFilter === null || options === null) {
    return {};
  }

  const filters = {};

  for (let key in dbFilter) {
    if (dbFilter[key]) {
      filters[key] = dbFilter[key];
    }
  }

  let result;
  if (Object.keys(filters).length > 0) {
    result = { where: { ...filters }, ...options };
  } else {
    result = options;
  }

  return result;
}

module.exports = DataService;
