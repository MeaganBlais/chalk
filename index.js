const chalk = require('chalk');

var message = 'Hello ' + chalk.yellow('World');
var nextMessage = chalk.magenta('Look ') + chalk.cyan('so ') + chalk.red('colours ') + chalk.green('!');
console.log(message);
console.log(nextMessage);