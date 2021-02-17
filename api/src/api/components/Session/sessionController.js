const sessionDataService = require('./sessionDataService');
const authService = require('../../../services/authService');
const env = require('../../../config/env');
const responseService = require('../../../services/responseService');
const { sendJsonResponse, sendErrorResponse } = responseService;

exports.signUp = async (req, res, next) => {
  try {
    const email = req.body.email;
    const registeredAccount = await sessionDataService.getByEmail(email);

    if (registeredAccount) {
      return next(sendErrorResponse(400, 'Account already registered'));
    }

    const account = req.body;
    const newAccount = await sessionDataService.addAccount(account);

    sendJsonResponse(
      200,
      { message: 'Account created', account: newAccount },
      res
    );
  } catch (error) {}
};

exports.signIn = async (req, res, next) => {
  try {
    const email = req.body.email;
    const registeredAccount = await sessionDataService.getByEmail(email);

    if (!registeredAccount) {
      return next(sendErrorResponse(404, 'Invalid user account'));
    }

    const password = req.body.password;
    const registeredPassword = registeredAccount.password;
    const isValidPassword = await authService.isValidPassword(
      password,
      registeredPassword
    );

    if (!isValidPassword) {
      return next(sendErrorResponse(401, 'Invalid user account'));
    }

    const accountId = registeredAccount._id;
    const token = authService.getSignedToken({ id: accountId }, env.SECRET_KEY);

    sendJsonResponse(200, { accountToken: token }, res);
  } catch (error) {
    next(error);
  }
};
