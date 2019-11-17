const chalk = require('chalk');

module.exports.info = message => console.info(chalk.blue('info ') + message);
module.exports.success = message => console.info(chalk.green('success ') + message);