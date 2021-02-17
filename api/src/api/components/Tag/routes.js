const express = require('express');
const tagController = require('./tagController');

const router = express.Router();

router.route('/').get(tagController.getTags);

module.exports = router;
