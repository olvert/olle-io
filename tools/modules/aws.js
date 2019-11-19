const getExec = () => require('child_process').execSync;
const getExecOptions = () => ({ stdio: 'inherit', encoding: 'utf8' });

module.exports.sync = () => {
  const bucketPath = process.env.AWS_S3_BUCKET_PATH;
  const options = getExecOptions();
  const exec = getExec();

  exec(`aws s3 sync dist/ ${bucketPath}`, options);
};

module.exports.invalidate = () => {
  const distributionId = process.env.AWS_CLOUDFRONT_DIST_ID;
  const options = getExecOptions();
  const exec = getExec();

  exec(`aws cloudfront create-invalidation --distribution-id ${distributionId} --paths "/*"`, options);
};
