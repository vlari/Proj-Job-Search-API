const Joi = require('joi');
const errorHandler = require('../../../services/errorHandlerService');

exports.validateSignUp = (req, res, next) => {
  const schema = Joi.object({
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    email: Joi.string()
      .pattern(
        /^(\D)+(\w)*((\.(\w)+)?)+@(\D)+(\w)*((\.(\D)+(\w)*)+)?(\.)[a-z]{2,}$/
      )
      .required(),
    phone: Joi.string(),
    password: Joi.string().min(8).required(),
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

exports.validateSignIn = (req, res, next) => {
  const schema = Joi.object({
    email: Joi.string()
      .pattern(
        /^(\D)+(\w)*((\.(\w)+)?)+@(\D)+(\w)*((\.(\D)+(\w)*)+)?(\.)[a-z]{2,}$/
      )
      .required(),
    password: Joi.string().min(8).required(),
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
