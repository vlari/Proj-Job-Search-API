const express = require('express');
const accountController = require('./accountController');
const auth = require('../../middleware/auth');
const accountValidator = require('../../middleware/requestSchema/accountSchema');

const router = express.Router();

router
  .route('/user')
  .get(auth.guard, accountController.getAccountDetails)
  .patch(auth.guard, accountController.updateAccount)

router
  .route('/password')
  .put(
    auth.guard,
    accountValidator.validatePassword,
    accountController.updatePassword
  );

module.exports = router;
