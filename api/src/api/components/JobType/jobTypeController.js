const jobTypeDataService = require('./jobTypeDataService');
const responseService = require('../../../services/responseService');
const { sendJsonResponse, sendErrorResponse } = responseService;

exports.getJobTypes = async (req, res, next) => {
  try {
    const jobTypes = await jobTypeDataService.getAll();

    sendJsonResponse(200, jobTypes, res);
  } catch (error) {
    next(sendErrorResponse(500, error));
  }
};