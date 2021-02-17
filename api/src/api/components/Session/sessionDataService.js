const Account = require('../Account/models/account');
const authService = require('../../../services/authService');

class SessionDataService {
  constructor(model) {
    this.model = model;
  }

  async getByEmail(email) {
    try {
      const account = await this.model.findOne({ email });

      return account;
    } catch (error) {
      return error;
    }
  }

  async getById(id) {
    try {
      const account = await this.model.findOne({
        where: {
          id,
        },
      });

      return account;
    } catch (error) {
      return error;
    }
  }

  async addAccount(account) {
    try {
      const hashedPassword = await authService.getHashedPassword(
        account.password
      );

      account.password = hashedPassword;

      const registeredAccount = await this.model.create(account);

      return registeredAccount.populate('-_id', '-__v');
    } catch (error) {
      return error;
    }
  }

}

module.exports = new SessionDataService(Account)
