const responseService = require('../../../services/responseService');
const companyDataService = require('./companyDataService');
const { sendJsonResponse, sendErrorResponse } = responseService;

exports.getCompanies = async (req, res, next) => {
  try {
    const { page, limit, ...query } = req.query;

    const pageNumber = parseInt(page, 10) || 1;
    const pageLimit = parseInt(limit, 10) || 3;
    let response = await companyDataService.getBy(pageNumber, pageLimit, query);

    sendJsonResponse(
      200,
      response,
      res
    );
  } catch (error) {
    next(sendErrorResponse(500, error));
  }
};
