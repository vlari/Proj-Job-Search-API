const express = require('express');
const morgan = require('morgan');
const chalk = require('chalk');

const env = require('../config/env');
const errorHandler = require('../services/errorHandlerService');
require('../config/db/dbConnection');
require('../config/db/seeder');
const router = require('../api/routes');

process.on('uncaughtException', (err) => {
  console.log(chalk.red('Uncaught Exception'));
  process.exit(1);
});

const app = express();

app.use(express.json());

if (env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use('/api', router);

app.get('*', (req, res, next) => {
  const x = new errorHandler.ErrorHandler(
    404,
    `${req.originalUrl} cannot be found`
  );
  next(x);
});

app.use((error, req, res, next) => {
  errorHandler.handleError(error, res);
});

module.exports = app;
