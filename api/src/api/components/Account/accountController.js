const accountDataService = require('./accountDataService');
const authService = require('../../../services/authService');
const responseService = require('../../../services/responseService');
const { sendJsonResponse, sendErrorResponse } = responseService;

exports.getAccountDetails = async (req, res, next) => {
  try {
    const id = req.user._id;

    const accountDetails = await accountDataService.getAccount(id);

    sendJsonResponse(200, { data: accountDetails }, res);
  } catch (error) {
    next(sendErrorResponse(500, error));
  }
};

exports.addTag = async (req, res, next) => {};

exports.updateAccount = async (req, res, next) => {
  try {
    const id = req.user._id;
    const accountDetail = req.body;

    const updatedAccount = await accountDataService.updateAccount(
      id,
      accountDetail
    );

    sendJsonResponse(200, { data: updatedAccount }, res);
  } catch (error) {
    next(sendErrorResponse(500, error));
  }
};

exports.updatePassword = async (req, res, next) => {
  try {
    const id = req.user._id;
    const { password, requestedPassword } = req.body;

    const account = await accountDataService.getAccount(id);

    const isValidPassword = await authService.isValidPassword(
      password,
      account.password
    );

    if (!isValidPassword) {
      next(sendErrorResponse(401, 'Invalid user account'));
    }

    const hashedPassword = await authService.getHashedPassword(
      requestedPassword
    );

    const updatedAccount = await accountDataService.updatePassword(
      id,
      hashedPassword
    );

    sendJsonResponse(200, { data: updatedAccount }, res);
  } catch (error) {
    next(sendErrorResponse(500, error));
  }
};
