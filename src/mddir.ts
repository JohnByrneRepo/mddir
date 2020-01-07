#!/usr/bin/env node

import * as fs from "graceful-fs"

const path = require('path');

const folders = {};
let outputText = '';
let markdownText = '';
let depth = 0;
let exported = false;
const outputFileName = 'directoryList.md';
const searchPath = path.resolve(process.argv[2] || '.');
const key = searchPath;// .replace(/\//g,'');
const startFolder = searchPath.split('/')[searchPath.split('/').length - 2];
const startDepth = searchPath.split('/').length - 1;
const currentWorkingDirectory = process.cwd();

const folderIgnoreList = [
  '.git',
  'node_modules',
];

var getFolders = function (path) {
  fs.readdir(path, (err, list) => {
    if (err) return done(err);
    list.forEach((item) => {
      if (fs.lstatSync(`${path}/${item}`).isDirectory()
        && folderIgnoreList.indexOf(item) === -1) {
        const folderDepth = path.split('/').length;
        if (folderDepth > depth) {
          depth = folderDepth;
        }
        const uniqueKey = `${path}/${item.replace(/\//g, '')}`;
        folders[uniqueKey] = {
          depth: folderDepth,
          parentFolder: path,
          path: `${path}/${item}`,
          name: item,
          folders: [],
          files: [],
          logged: false,
          parsed: false,
          marked: false,
        };
        getFolders(`${path}/${item}`, true);
      }
    });
    getFilesInFolders();
  });
};

const getFiles = function (path, key) {
  fs.readdir(path, (err, list) => {
    list.forEach((item) => {
      if (!fs.lstatSync(`${path}/${item}`).isDirectory()) {
        if (folders[key].files.length === 0 || folders[key].files.indexOf(item) === -1) {
          folders[key].files.push(item);
        }
      } else if (folders[key].folders.indexOf(item) === -1) {
        folders[key].folders.push(item);
      }
    });
    folders[key].parsed = true;
    listFolders();
  });
};

var getFilesInFolders = function () {
  for (const key in folders) {
    if (folders.hasOwnProperty(key)) {
      getFiles(folders[key].path, key);
    }
  }
};

var listFolders = function () {
  let allParsed = true;
  let numFolders = 0;
  for (const key in folders) {
    if (folders.hasOwnProperty(key)) {
      numFolders++;
      if (!folders[key].logged || !folders[key].parsed) {
        allParsed = false;
      }
      if (folders[key].parsed && !folders[key].logged) {
        folders[key].logged = true;
        // console.log(JSON.stringify(folders[key],null,2));
      }
    }
  }
  if (allParsed && !exported) {
    exported = true;
    // console.log('Number of folders: ' + numFolders);
    // generateText();
    generateMarkdown();
    console.log(JSON.stringify(folders, null, 2));
  }
};

const generateText = function () {
  outputText += `Files and folders in ${searchPath}\n\n`;
  for (let i = 0; i < depth + 1; i++) {
    for (const key in folders) {
      if (folders.hasOwnProperty(key)) {
        const folder = folders[key];
        if (folder.depth === i) {
          const name = folder.path.split(searchPath)[1];
          outputText += `${name}\n`;
          for (var j = 0; j < name.length; j++) {
            outputText += '-';
          }
          outputText += '\n';
          if (folder.files.length === 0) {
            outputText += 'No files in folder' + '\n';
          }
          for (var j = 0; j < folder.files.length; j++) {
            outputText += `${folder.files[j]}\n`;
          }
          outputText += '\n\n';
        }
      }
    }
  }
  fs.writeFile(outputFileName, outputText, (err) => {
    if (err) return;
    // console.log(outputFileName +  '>' + outputText);
  });
};

const addFileName = function (name, indent) {
  var indent = indent + 4;
  markdownText += '';
  for (let i = 0; i < indent; i++) {
    // if(i % 3 === 0){
    // markdownText += '|';
    // } else {
    markdownText += ' ';
    // }
  }
  markdownText += `|-- ${name}\n`;
};

var addFolderName = function (name, index) {
  if (folders[name] !== undefined) {
    if (folders[name].marked) {
      return;
    }
    const indent = (folders[name].depth - startDepth) * 4;
    markdownText += '';
    for (let i = 0; i < indent; i++) {
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
      console.log('adding root folder');
      markdownText += `|-- ${startFolder}\n`;
    } else {
      markdownText += `|-- ${folders[name].name}\n`;
    }
    // console.log('Folders[name]:');
    // console.log(folders[name]);
    folders[name].files.forEach((f) => {
      addFileName(f, indent);
    });
    folders[name].marked = true;
    folders[name].folders.forEach((f) => {
      const path = `${name}/${f}`;
      addFolderName(path, 2);
    });
  }
};

var generateMarkdown = function () {
  addFolderName(key, 1);

  addSiblingfolderConnections();

  fs.writeFile(`${currentWorkingDirectory}/${outputFileName}`, markdownText, (err) => {
    if (err) return;
    // console.log(outputFileName +  '>' + outputText);
  });
};

String.prototype.replaceAt = function (index, character) {
  return this.substr(0, index) + character + this.substr(index + character.length);
};

var addSiblingfolderConnections = function () {
  const lines = markdownText.split('\n');
  for (let i = 1; i < lines.length; i++) {
    const line1 = lines[i - 1];
    let line2 = lines[i];
    for (let j = 0; j < line2.length; j++) {
      const char1 = line1.charAt(j);
      const char2 = line2.charAt(j);
      // console.log('comparing ' + char1 + ' with ' + char2);
      // Search for folder below to connect to
      let foundSibling = false;
      for (let k = i; k < lines.length; k++) {
        const charBelow = lines[k].charAt(j);
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
  console.log('lines');
  console.log(lines);
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
  marked: false,
};
fs.readdir(searchPath, (err, list) => {
  list.forEach((item) => {
    if (!fs.lstatSync(`${searchPath}/${item}`).isDirectory()) {
      if (folders[key].files.indexOf(item) === -1) {
        folders[key].files.push(item);
      }
    }
  });
  folders[key].parsed = true;
});
getFolders(searchPath);
