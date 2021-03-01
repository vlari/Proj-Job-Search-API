const responseService = require('../../../services/responseService');
const ExperienceLevel = require('../ExperienceLevel/experienceLevel');
const JobType = require('../JobType/jobType');
const PostDetail = require('./models/postDetail');
const postDataService = require('./postDataService');
const { sendJsonResponse, sendErrorResponse } = responseService;

exports.getPosts = async (req, res, next) => {
  try {
    const { page, limit, ...query } = req.query;

    const pageNumber = parseInt(page, 10) || 1;
    const pageLimit = parseInt(limit, 10) || 3;

    const dbQuery = {
      filter: { ...query },
      options: {
        include: [
          { model: JobType },
          { model: PostDetail },
          { model: ExperienceLevel },
        ],
      },
    };

    const response = await postDataService.getBy(
      pageNumber,
      pageLimit,
      dbQuery
    );

    sendJsonResponse(200, response, res);
  } catch (error) {
    next(sendErrorResponse(500, error));
  }
};
