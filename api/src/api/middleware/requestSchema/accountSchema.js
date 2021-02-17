const Joi = require('joi');
const errorHandler = require('../../../services/errorHandlerService');

exports.validatePassword = (req, res, next) => {
  const schema = Joi.object({
    password: Joi.string().min(8).required(),
    requestedPassword: Joi.string().min(8).required(),
  });

  const validationResult = schema.validate(req.body);

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
