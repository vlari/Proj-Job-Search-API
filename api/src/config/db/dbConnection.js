const sequelize = require('./db');
const chalk = require('chalk');
const seeder = require('./seeder');

const connectDb = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync({ force: true });

    seeder();

    console.log(
      chalk.inverse.yellow(
        'Database connection has been stablished successfully'
      )
    );
  } catch (error) {
    console.log(chalk.inverse.red('Unable to connect to the database', error));
  }
};

connectDb();
