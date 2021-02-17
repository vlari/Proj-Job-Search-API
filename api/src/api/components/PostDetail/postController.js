const responseService = require('../../../services/responseService');
const postDataService = require('./postDataService');
const { sendJsonResponse, sendErrorResponse } = responseService;

exports.getPosts = async (_req, res, next) => {
  try {
    const posts = await postDataService.getAll();

    sendJsonResponse(200, posts, res);
  } catch (error) {
    next(sendErrorResponse(500, error));
  }
};
