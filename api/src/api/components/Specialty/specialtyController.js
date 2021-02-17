const responseService = require('../../../services/responseService');
const specialtyDataService = require('./specialtyDataService');
const { sendJsonResponse, sendErrorResponse } = responseService;

exports.getSpecialties = async (req, res, next) => {
  try {
    const specialties = await specialtyDataService.getAll();

    sendJsonResponse(200, specialties, res);
  } catch (error) {
    next(sendErrorResponse(500, error));
  }
};
