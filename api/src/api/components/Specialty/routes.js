const express = require('express');
const industryTypeController = require('./specialtyController');

const router = express.Router();

router.route('/').get(industryTypeController.getSpecialties);

module.exports = router;
