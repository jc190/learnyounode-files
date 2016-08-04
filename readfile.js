var fs = require('fs');
var fileToRead = process.argv[2];
var str = fs.readFileSync(fileToRead).toString();
var newLines = str.split('\n');

console.log(newLines.length - 1);

//  var contents = fs.readFileSync(process.argv[2])  
//  var lines = contents.toString().split('\n').length - 1  
//  console.log(lines)