const log = require('../modules/log');
const aws = require('../modules/aws');

aws.invalidate();
log.success('created cloudfront invalidation');