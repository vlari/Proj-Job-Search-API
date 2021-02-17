const express = require('express');
const sessionController = require('./sessionController');
const authValidator = require('../../middleware/requestSchema/authSchema');

const router = express.Router();

router
  .route('/signup')
  .post(authValidator.validateSignUp, sessionController.signUp);
router
  .route('/signin')
  .post(authValidator.validateSignIn, sessionController.signIn);

module.exports = router;
