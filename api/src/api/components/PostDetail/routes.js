const express = require('express');
const postController = require('./postController');
const postQueryValidator = require('../../middleware/requestSchema/postSchema');

const router = express.Router();

router.route('/').get(postQueryValidator, postController.getPosts);

module.exports = router;
