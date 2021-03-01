const experienceLevelDataService = require('./experienceLevelDataService');
const responseService = require('../../../services/responseService');
const { sendJsonResponse, sendErrorResponse } = responseService;

exports.getExperienceLevels = async (req, res, next) => {
  try {
    const experienceLevelse = await experienceLevelDataService.getAll();

    sendJsonResponse(200, experienceLevelse, res);
  } catch (error) {
    next(sendErrorResponse(500, error));
  }
};