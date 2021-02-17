const env = require('./config/env');
const chalk = require('chalk');
const app = require('./api/app');

const port = env.PORT;

app.listen(port, () => {
  console.log(chalk.green(`Server running in ${env.NODE_ENV} environment`));
  console.log(chalk.blue.inverse(`Server running on port: ${port}`));
});

process.on('unhandledRejection', (err, prom) => {
  console.log(chalk.red.bold(`Error: ${err}`));
  process.exit(1);
});