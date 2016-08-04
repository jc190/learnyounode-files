var fs = require('fs');
var fileEXT = process.argv[3];
fs.readdir(process.argv[2], function(err, files) {
    if (!err) {
        var regExp = new RegExp('.' + fileEXT);
        files.map(function(obj) {
            if (regExp.test(obj)) {
                console.log(obj);
            }
        })
       return;
    }
    return console.log(err);
});

// var fs = require('fs')  
//  var path = require('path')  
   
//  var folder = process.argv[2]  
//  var ext = '.' + process.argv[3]  
   
//  fs.readdir(folder, function (err, files) {  
//   if (err) return console.error(err)  
//   files.forEach(function(file) {  
//       if (path.extname(file) === ext) {  
//           console.log(file)  
//       }  
//   })  
//  }) 