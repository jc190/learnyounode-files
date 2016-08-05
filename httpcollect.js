var http = require('http');

var httpaddress = process.argv[2];
var collection = [];

http.get(httpaddress, function(response) {
   response.setEncoding('utf8');
   response.on('data', function(data) {
       collection.push(data);
   });
   response.on('error', function(error) {
       console.log('Error!: ' + error);
   });
   response.on('end', function() {
       console.log(collection.join('').length);
       console.log(collection.join(''));
   })
}).on('error', function(error) {
    console.log('Error!: ' + error);
});

// var http = require('http')  
// var bl = require('bl')  

// http.get(process.argv[2], function (response) {  
// response.pipe(bl(function (err, data) {  
//  if (err)  
//   return console.error(err)  
//  data = data.toString()  
//  console.log(data.length)  
//  console.log(data)  
// }))    
// })