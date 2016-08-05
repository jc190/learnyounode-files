var http = require('http');
var collection = [];
var count = 0;

function gethttp(url, index) {
    http.get(url, function(response) {
        response.setEncoding('utf8');
        var temp = [];
        response.on('data', function(data) {
            temp.push(data);
        });
        response.on('error', function(error) {
            console.log(error);
        });
        response.on('end', function() {
            temp = temp.join('');
            collection.push({str: temp, id: index});
            count++;
            if (count === 3) {
                collection.sort(function(a, b) {
                    if (a.id < b.id) {
                        return -1;
                    }
                    if (a.id > b.id) {
                        return 1;
                    }
                    return 0;
                });
                collection.map(function(obj) {
                    console.log(obj.str);
                });
            }
        });
    }).on('error', function(error){
        console.log(error);
    });
}

for (var i = 2; i < process.argv.length; i++) {
    gethttp(process.argv[i], i);
}
    
// var http = require('http')  
// var bl = require('bl')  
// var results = []  
// var count = 0  

// function printResults () {  
// for (var i = 0; i < 3; i++)  
//  console.log(results[i])  
// }  

// function httpGet (index) {  
// http.get(process.argv[2 + index], function (response) {  
//  response.pipe(bl(function (err, data) {  
//   if (err)  
//      return console.error(err)  

//   results[index] = data.toString()  
//   count++  

//   if (count == 3)  
//      printResults()  
//  }))  
// })  
// }  

// for (var i = 0; i < 3; i++)  
// httpGet(i)