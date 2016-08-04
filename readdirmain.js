
var myMod = require('./readdirmod');
var fileDIR = process.argv[2];
var fileEXT = process.argv[3];


myMod(fileDIR, fileEXT, function(err, data) {
    if (err) {
        return console.log('Error: ' + err);
    }
    data.map(function(obj) {
        console.log(obj);
    });
});