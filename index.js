const fs = require('fs');
const conventionalChangelog = require('conventional-changelog');

const changelogFile = fs.createWriteStream('CHANGELOG.md');

conventionalChangelog({
  preset: 'angular'
})
  .pipe(changelogFile);
