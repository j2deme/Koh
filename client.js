#!/usr/bin/env node

/**
 * Module dependencies.
 */

//Commander example
var program = require('commander');

program
  .version('0.0.1')
  .option('-f, --file <file>','Upload specified file')
  .option('-F, --folder <folder>', 'Upload files from the specified folder')
  .option('-h, --host <host>','Host where files will be uploaded')
  .parse(process.argv);

if(program.file){
    console.log('Uploading file %s', program.file);
} else {
    program.help();
}