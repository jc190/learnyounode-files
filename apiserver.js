var http = require("http");
var url = require("url");

function getHMS(date) {
    date = new Date(date);
    var hours = date.getHours(),
        minutes = date.getMinutes(),
        seconds = date.getSeconds();
    return ({
        hour: hours,
        minute: minutes,
        second: seconds
    });
}

function getUNIX(date) {
    return ({
        unixtime: Date.parse(date)
    });
}

var server = http.createServer(function(req, res) {
    if (req.method === 'GET') {
        var urlobj = url.parse(req.url, true);
        var jsondata;
        if (urlobj.pathname === '/api/parsetime') {
            jsondata = getHMS(urlobj.query.iso);
        }
        if (urlobj.pathname === '/api/unixtime') {
            jsondata = getUNIX(urlobj.query.iso);
        }
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(jsondata) + '\n');
    }
    res.end("Goodbye");
});

server.listen(process.argv[2]);

// var http = require('http')  
//  var url = require('url')  
   
//  function parsetime (time) {  
//   return {  
//      hour: time.getHours(),  
//      minute: time.getMinutes(),  
//      second: time.getSeconds()  
//   }  
//  }  
   
//  function unixtime (time) {  
//   return { unixtime : time.getTime() }  
//  }  
   
//  var server = http.createServer(function (req, res) {  
//   var parsedUrl = url.parse(req.url, true)  
//   var time = new Date(parsedUrl.query.iso)  
//   var result  
   
//   if (/^\/api\/parsetime/.test(req.url))  
//      result = parsetime(time)  
//   else if (/^\/api\/unixtime/.test(req.url))  
//      result = unixtime(time)  
   
//   if (result) {  
//      res.writeHead(200, { 'Content-Type': 'application/json' })  
//      res.end(JSON.stringify(result))  
//   } else {  
//      res.writeHead(404)  
//      res.end()  
//   }  
//  })  
//  server.listen(Number(process.argv[2])) 