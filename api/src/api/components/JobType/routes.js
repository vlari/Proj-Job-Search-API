const express = require('express');
const jobTypeController = require('./jobTypeController');

const router = express.Router();

router.route('/').get(jobTypeController.getJobTypes);

module.exports = router;
