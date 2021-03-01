const responseService = require('../../../services/responseService');
const CompanyType = require('../CompanyType/companyType');
const IndustryType = require('../IndustryType/industryType');
const companyDataService = require('./companyDataService');
const { sendJsonResponse, sendErrorResponse } = responseService;

exports.getCompanies = async (req, res, next) => {
  try {
    const { page, limit, name = '' } = req.query;

    const pageNumber = parseInt(page, 10) || 1;
    const pageLimit = parseInt(limit, 10) || 3;

    const query = { filter: { name }, options: { include: [{ model: CompanyType }, { model: IndustryType }] } };
    
    let response = await companyDataService.getBy(pageNumber, pageLimit, query);

    sendJsonResponse(200, response, res);
  } catch (error) {
    next(sendErrorResponse(500, error));
  }
};
