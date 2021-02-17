const responseService = require('../../../services/responseService');
const companyTypeDataService = require('./companyTypeDataService');
const { sendJsonResponse, sendErrorResponse } = responseService;

exports.getCompanyTypes = async (req, res, next) => {
  try {
    const companyTypes = await companyTypeDataService.getAll();

    sendJsonResponse(200, companyTypes, res);
  } catch (error) {
    next(sendErrorResponse(500, error));
  }
};
