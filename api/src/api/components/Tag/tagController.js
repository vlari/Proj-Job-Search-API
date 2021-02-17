const responseService = require('../../../services/responseService');
const tagDataService = require('./tagDataService');
const { sendJsonResponse, sendErrorResponse } = responseService;

exports.getTags = async (_req, res, next) => {
  try {
    const tags = await tagDataService.getAll();

    sendJsonResponse(200, tags, res);
  } catch (error) {
    next(sendErrorResponse(500, error));
  }
};
