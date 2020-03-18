#!/usr/bin/env node

const standardVersion = require('standard-version');
const semver = require('semver');
const args = require('yargs')
  .option('firstRelease', {
    type: 'boolean',
    default: false,
    description: 'If it is first release ever',
  })
  .option('fixed', {
    default: null,
    type: 'string',
    description: 'Specific version to release',
  })
  .argv;

const firstRelease = args.firstRelease;
const specificVersion = semver.valid(args.fixed);

standardVersion({
  firstRelease,
  silent: true,
  noVerify: true,
  preset: 'angular',
  header: 'git-playground - Releases\n',
  infile: 'CHANGELOG.md',
  releaseAs: specificVersion,
})
  .then(() => {
    process.exit(0);
  });
