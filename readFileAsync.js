var fs = require('fs');
function getLineCount(err, data) {
    if (err) {
        console.log(err);
    } else {
        console.log(data.split('\n').length - 1);
    }
}
var contents = fs.readFile(process.argv[2], 'utf8', getLineCount);