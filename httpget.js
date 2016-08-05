var http = require('http');
var url = process.argv[2];

http.get(url, function(response) {
   response.on('data', function(data) {
       data = data.toString();
       console.log(data);
   });
   response.on('error', function(error) {
       console.log('ERROR: ' + error);
   });
}).on('error', function(error){console.log(error)});

// var http = require('http')  
       
//  http.get(process.argv[2], function (response) {  
//   response.setEncoding('utf8')  
//   response.on('data', console.log)  
//   response.on('error', console.error)  
//  }).on('error', console.error)  