#!/usr/bin/env node

var fs = require('fs'),
  path = require('path');

// Separating flags from main path
var flags = [];
var args = process.argv.filter(each => {
  if (each.indexOf('--') === 0) {
    flags.push(each);
    return false
  }
  return true;
})

var canRun = true;
var folders = {};
var outputText = '';
var markdownText = '';
var depth = 0;
var exported = false;
var outputFileName = 'directoryList.md';
var searchPath = path.resolve(args[2] || '.');
var key = searchPath;
var startFolder = searchPath.split('/')[searchPath.split('/').length - 2];
var startDepth = searchPath.split('/').length - 1;
var currentWorkingDirectory = process.cwd();
var indentNumber = 4;
var separator = `|${'-'.repeat(indentNumber / 2)} `;
var verbose = false;

if (flags.length > 0) console.log('\n');
// Applying flags
flags.forEach(each => {
  if (each.includes('help')) {
    canRun = false;
    console.log(`
    HELP
      For detailed info and issue handling, visit source at https://github.com/JohnByrneRepo/mddir

      available flags:
        --help : this flag!
        --verbose : prints folder information
        --indent=2 : changes indentation at output file. Insert a number starting from 1.

      The script won't run with the --help flag.
    `);
  }

  // Handling indent
  if (each.includes('indent')) {
    var num = +each.split('=')[1];
    // if not number, keeps default
    if (!Number.isNaN(num) && num !== 0) {
      console.log(`Chosen indent: ${num}`)
      indentNumber = num
    } else {
      console.log('Indent error: Input a valid indent number, starting from 1')
    }
  }
  // Handling verbose
  if (each.includes('verbose')) {
    console.log(`Verbose mode`);
    verbose = true;
  }
})
if (flags.length > 0) console.log('\n');

var folderIgnoreList = [
  '.git',
  'node_modules'
];
function run() {
  console.log('Running MDDIR. For more information, run with --verbose flag')


  var getFolders = function (path) {
    fs.readdir(path, function (err, list) {
      if (err) return done(err);
      list.forEach(function (item) {
        if (fs.lstatSync(path + '/' + item).isDirectory() &&
          folderIgnoreList.indexOf(item) === -1) {
          var folderDepth = path.split('/').length;
          if (folderDepth > depth) {
            depth = folderDepth;
          }
          var uniqueKey = path + '/' + item.replace(/\//g, '');
          folders[uniqueKey] = {
            depth: folderDepth,
            parentFolder: path,
            path: path + '/' + item,
            name: item,
            folders: [],
            files: [],
            logged: false,
            parsed: false,
            marked: false
          };
          getFolders(path + '/' + item, true);
        }
      });
      getFilesInFolders();
    });
  };

  var getFiles = function (path, key) {
    fs.readdir(path, function (err, list) {
      list.forEach(function (item) {
        if (!fs.lstatSync(path + '/' + item).isDirectory()) {
          if (folders[key].files.length === 0 || folders[key].files.indexOf(item) === -1) {
            folders[key].files.push(item);
          }
        } else {
          if (folders[key].folders.indexOf(item) === -1) {
            folders[key].folders.push(item);
          }
        }
      });
      folders[key].parsed = true;
      listFolders();
    });
  };

  var getFilesInFolders = function () {
    for (var key in folders) {
      if (folders.hasOwnProperty(key)) {
        getFiles(folders[key].path, key);
      }
    }
  };

  var listFolders = function () {
    var allParsed = true;
    var numFolders = 0;
    for (var key in folders) {
      if (folders.hasOwnProperty(key)) {
        numFolders++;
        if (!folders[key].logged || !folders[key].parsed) {
          allParsed = false;
        }
        if (folders[key].parsed && !folders[key].logged) {
          folders[key].logged = true;
        }
      }
    }
    if (allParsed && !exported) {
      exported = true;
      generateMarkdown();
      if (verbose) console.log(JSON.stringify(folders, null, 2));
    }
  };

  var generateText = function () {
    outputText += 'Files and folders in ' + searchPath + '\n\n';
    for (var i = 0; i < depth + 1; i++) {
      for (var key in folders) {
        if (folders.hasOwnProperty(key)) {
          var folder = folders[key];
          if (folder.depth === i) {
            var name = folder.path.split(searchPath)[1];
            outputText += name + '\n';
            for (var j = 0; j < name.length; j++) {
              outputText += '-';
            }
            outputText += '\n';
            if (folder.files.length === 0) {
              outputText += 'No files in folder' + '\n';
            }
            for (var j = 0; j < folder.files.length; j++) {
              outputText += folder.files[j] + '\n';
            }
            outputText += '\n\n';
          }
        }
      }
    }
    fs.writeFile(outputFileName, outputText, function (err) {
      if (err) return;
    });
  };

  var addFileName = function (name, indent) {
    var indent = indent + indentNumber;
    markdownText += '';
    for (var i = 0; i < indent; i++) {
      markdownText += ' ';
    }
    markdownText += separator + name + '\n';
  };

  var addFolderName = function (name, index) {
    if (folders[name] !== undefined) {
      if (folders[name].marked) {
        return;
      }
      var indent = (folders[name].depth - startDepth) * indentNumber;
      markdownText += '';
      for (var i = 0; i < indent; i++) {
        markdownText += ' ';
        // if(folders[name].folders.length > 0){
        //   if(i % 3 === 0){
        //     markdownText += '|';
        //   } else {
        //     markdownText += ' ';
        //   }
        // } else {
        //   markdownText += ' ';
        // }
      }
      if (index === 1) {
        if (verbose) console.log('adding root folder');
        markdownText += separator + startFolder + '\n';
      } else {
        markdownText += separator + folders[name].name + '\n';
      }
      folders[name].files.forEach(function (f) {
        addFileName(f, indent);
      });
      folders[name].marked = true;
      folders[name].folders.forEach(function (f) {
        var path = name + '/' + f;
        addFolderName(path, 2);
      });
    }
  };

  var generateMarkdown = function () {
    addFolderName(key, 1);

    addSiblingfolderConnections();

    fs.writeFile(currentWorkingDirectory + '/' + outputFileName, markdownText, function (err) {
      if (err) return;
    });
  };

  String.prototype.replaceAt = function (index, character) {
    return this.substr(0, index) + character + this.substr(index + character.length);
  }

  var addSiblingfolderConnections = function () {
    var lines = markdownText.split('\n');
    for (var i = 1; i < lines.length; i++) {
      var line1 = lines[i - 1];
      var line2 = lines[i];
      for (var j = 0; j < line2.length; j++) {
        var char1 = line1.charAt(j);
        var char2 = line2.charAt(j);
        // Search for folder below to connect to
        var foundSibling = false;
        for (var k = i; k < lines.length; k++) {
          var charBelow = lines[k].charAt(j);
          if (charBelow !== '|' && charBelow !== ' ') {
            break;
          }
          if (charBelow === '|') {
            foundSibling = true;
          }
        }
        if (foundSibling && char1 === '|' && char2 === ' ') {
          line2 = line2.replaceAt(j, '|');
          lines[i] = line2;
        }
      }
    }
    if (verbose) console.log('lines');
    if (verbose) console.log(lines);
    markdownText = lines.join('\n');
  };

  folders[key] = {
    depth: searchPath.split('/').length - 1,
    parentFolder: null,
    path: searchPath,
    name: searchPath.split('/')[searchPath.split('/').length - 1],
    folders: [],
    files: [],
    logged: false,
    parsed: false,
    marked: false
  };
  fs.readdir(searchPath, function (err, list) {
    list.forEach(function (item) {
      if (!fs.lstatSync(searchPath + '/' + item).isDirectory()) {
        if (folders[key].files.indexOf(item) === -1) {
          folders[key].files.push(item);
        }
      }
    });
    folders[key].parsed = true;
  });
  getFolders(searchPath);
}

// Wrapping in function for easy script stopping, if needed
if (canRun) {
  run()
}
