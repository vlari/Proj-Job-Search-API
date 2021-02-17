const express = require('express');
const companyTypeController = require('./companyTypeController');

const router = express.Router();

router.route('/').get(companyTypeController.getCompanyTypes);

module.exports = router;
