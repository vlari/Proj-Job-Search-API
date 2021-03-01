const Joi = require('joi');
const errorHandler = require('../../../services/errorHandlerService');

exports.validatePostQuery = (req, res, next) => {
  const schema = Joi.object({
    JobTypeId: Joi.number().positive(),
    ExperienceLevelId: Joi.number().positive(),
  });

  const validationResult = schema.validate(req.query);

  if (validationResult.error) {
    next(
      new errorHandler.ErrorHandler(
        400,
        validationResult.error.details[0].message
      )
    );
  } else {
    next();
  }
};
