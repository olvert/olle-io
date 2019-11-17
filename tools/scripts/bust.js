const cb = require('../modules/cache-bust');
const log = require('../modules/log');

const distPath = 'dist/'

const styleRegex = 'style*.css';
const scriptRegex = 'js/main*.js';

const newStyleRef = cb.cacheBustFile(distPath + styleRegex).replace(distPath, '');
const newScriptRef = cb.cacheBustFile(distPath + scriptRegex).replace(distPath, '');

const replacePatterns = [
  [new RegExp(styleRegex, 'gi'), newStyleRef],
  [new RegExp(scriptRegex, 'gi'), newScriptRef],
];

cb.replaceInFile('dist/index.html', replacePatterns);

log.success('completed cache busting');