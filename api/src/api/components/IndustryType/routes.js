const express = require('express');
const industryTypeController = require('./industryTypeController');

const router = express.Router();

router.route('/').get(industryTypeController.getIndustryTypes);

module.exports = router;
