const fs = require('fs');
const glob = require('glob');
const md5File = require('md5-file');
const chalk = require('chalk');

const log = require('./log');

const hashFileName = (fileName, fileHash) => fileName.replace('*', '.' + fileHash);

module.exports.cacheBustFile = (filePathRegex) => {

  if (!filePathRegex.includes('*')) { throw new Error('filePathRegex does not contain \'*\' denoting where hash should be placed'); }

  const fileName = glob.sync(filePathRegex)[0];
  const fileHash = md5File.sync(fileName);
  const hashedFileName = hashFileName(filePathRegex, fileHash);

  fs.renameSync(fileName, hashedFileName);

  log.info('finished cach-busting: ' + chalk.cyan(hashedFileName));

  return hashedFileName;
}

module.exports.replaceInFile = (fileName, patterns) => {
  const data = fs.readFileSync(fileName, 'utf8');

  const reducer = (data, pattern) => data.replace(...pattern);
  const modifiedData = patterns.reduce(reducer, data);

  fs.writeFileSync(fileName, modifiedData);

  log.info('finished replacing patterns in file: ' + chalk.cyan(fileName));
} 

