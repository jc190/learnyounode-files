var fs = require('fs');
var path = require('path');

module.exports = function(dirName, fileEXT, callback) {
    var filteredFiles = [];
    fs.readdir(dirName, function(err, files) {
        if (err) {
            return callback(err);
        }
        fileEXT = '.' + fileEXT;
        files.map(function(file) {
            if (path.extname(file) === fileEXT) {
                filteredFiles.push(file);
            }
        });
        return callback(null, filteredFiles);
    });
}

// var fs = require('fs')  
//  var path = require('path')  
   
//  module.exports = function (dir, filterStr, callback) {  
   
//   fs.readdir(dir, function (err, list) {  
//      if (err)  
//       return callback(err)  
   
//      list = list.filter(function (file) {  
//       return path.extname(file) === '.' + filterStr  
//      })  
   
//      callback(null, list)  
//   })  
//  } 