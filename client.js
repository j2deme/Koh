#!/usr/bin/env node

/**
 * Module dependencies.
 */

//Commander example
var program = require('commander');

program
  .version('0.0.1')
  .option('-f, --file','File to upload')
  .option('-p, --peppers', 'Add peppers')
  .option('-P, --pineapple', 'Add pineapple')
  .option('-b, --bbq', 'Add bbq sauce')
  .option('-c, --cheese [type]', 'Add the specified type of cheese [marble]', 'marble')
  .parse(process.argv);

console.log('Uploading file %s', program.file);
if (true) {

}