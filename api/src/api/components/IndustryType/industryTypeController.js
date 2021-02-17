const responseService = require('../../../services/responseService');
const industryTypeDataService = require('./industryTypeDataService');
const { sendJsonResponse, sendErrorResponse } = responseService;

exports.getIndustryTypes = async (req, res, next) => {
  try {
    const industryTypes = await industryTypeDataService.getAll();

    sendJsonResponse(200, industryTypes, res);
  } catch (error) {
    next(sendErrorResponse(500, error));
  }
};
