const log = require('../modules/log');
const aws = require('../modules/aws');

aws.sync();
log.success('completed sync to s3 bucket');