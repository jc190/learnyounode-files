var net = require('net');
var server = net.createServer(function(socket) {
    socket.write(getTime() + '\n');
    socket.end();
});

function getTime() {
    var date = new Date();
    var year = date.getFullYear(),
        month = zeroPrefix(date.getMonth() + 1),
        day = zeroPrefix(date.getDate()),
        hour = zeroPrefix(date.getHours()),
        minute = zeroPrefix(date.getMinutes());
    function zeroPrefix(num) {
        if (num < 10) {
            return '0' + num;
        }
        return num;
    }
    var formattedDate = year + '-' + month + '-' + day + ' ' + hour + ':' + minute;
    return formattedDate;
}

server.listen(process.argv[2]);

// var net = require('net')  
       
//  function zeroFill(i) {  
//   return (i < 10 ? '0' : '') + i  
//  }  
   
//  function now () {  
//   var d = new Date()  
//   return d.getFullYear() + '-'  
//      + zeroFill(d.getMonth() + 1) + '-'  
//      + zeroFill(d.getDate()) + ' '  
//      + zeroFill(d.getHours()) + ':'  
//      + zeroFill(d.getMinutes())  
//  }  
   
//  var server = net.createServer(function (socket) {  
//   socket.end(now() + '\n')  
//  })  
   
//  server.listen(Number(process.argv[2])) 
