const express = require('express');
const experienceLevelController = require('./experienceLevelController');

const router = express.Router();

router.route('/').get(experienceLevelController.getExperienceLevels);

module.exports = router;
