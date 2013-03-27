#!/usr/bin/env node

/**
 * Module dependencies.
 */

//Commander example
var program  = require('commander');
var chokidar = require('chokidar');
var path     = require('path');

program
  .version('0.0.1')
//  .option('-f, --file <file>','Watch specified file')
  .option('-F, --folder <folder>', 'Watch files from the specified folder')
  .option('-h, --host <host>','Host where files will be uploaded')
  .parse(process.argv);

if(program.folder){
    console.log('Watching file %s', program.folder);
    var watcher = chokidar.watch(program.folder, {ignored: /^\./, persistent: true});
    watcher
      .on('add', function(uri) {console.log('File %s has been added', uri);})
      .on('change', function(uri) {console.log('File %s has been changed', uri);})
      .on('unlink', function(uri) {console.log('File %s has been removed', uri);})
      .on('error', function(error) {console.error('Error happened', error);});

    // 'add' and 'change' events also receive stat() results as second argument.
    // http://nodejs.org/api/fs.html#fs_class_fs_stats
    watcher.on('change', function(uri, stats) {
      console.log('File', path.basename(uri), 'changed size to', stats);
    });

    watcher.on('add', function(uri, stats) {
        if(path.basename(uri) == "end.txt")
            watcher.close();
    });

//watcher.add('new-file');
//watcher.add(['new-file-2', 'new-file-3']);
// Only needed if watching is persistent.
// watcher.close();
} else {
    program.help();
}