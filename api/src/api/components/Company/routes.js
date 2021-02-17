const express = require('express');
const companyController = require('./companyController');

const router = express.Router();

router.route('/').get(companyController.getCompanies);

module.exports = router;
