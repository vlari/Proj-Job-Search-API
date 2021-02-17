const Account = require('./models/account');

class AccountDataService {
  constructor(model) {
    this.model = model;
  }

  async getAccount(id) {
    try {
      const account = await this.model.findAll({
        where: { id },
        attributes: { exclude: ['password'] },
      });

      return account;
    } catch (error) {
      return error;
    }
  }

  async updateAccount(id, accountDetails) {
    try {
      const account = await this.model.findByPk(id);

      const updatedAccount = await account.update(accountDetails);

      return updatedAccount;
    } catch (error) {
      return error;
    }
  }

  async updatePassword(id, password) {
    try {
      const account = await this.model.findByPk(id);

      const updatedAccount = await account.update({ password });

      return updatedAccount;
    } catch (error) {
      return error;
    }
  }
}

module.exports = new AccountDataService(Account);
