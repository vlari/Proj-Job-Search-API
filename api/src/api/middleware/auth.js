const jwt = require('jsonwebtoken');
const Account = require('../components/Account/models/account');
const errorHandler = require('../../services/errorHandlerService');
const env = require('../../config/env');

exports.guard = async (req, res, next) => {
  // let userToken = '';

  // if (
  //   req.headers.authorization &&
  //   req.headers.authorization.startsWith('Bearer')
  // ) {
  //   userToken = req.headers.authorization.split(' ')[1];
  // }

  // if (!userToken) {
  //   return next(new errorHandler.ErrorHandler(401, 'User not authorized'));
  // }

  // try {
  //   const token = jwt.verify(userToken, env.SECRET_KEY);

  //   const account = await Account.findById(token.id);

  //   if (!account) {
  //     return next(new errorHandler.ErrorHandler(401, 'User not authorized'));
  //   } else {
  //     req.user = account;
  //     next();
  //   }
  // } catch (error) {
  //   next(error);
  // }
  next();
};
