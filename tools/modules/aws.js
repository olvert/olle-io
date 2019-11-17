const getExec = () => require('child_process').execSync;
const getExecOptions = () => ({ stdio: 'inherit', encoding: 'utf8' });

module.exports.sync = () => {
  const bucketPath = process.env.AWS_S3_BUCKET_PATH;
  const options = getExecOptions();
  const exec = getExec();

  exec(`aws s3 sync dist/ ${bucketPath}`, options);
};
