var total = 0;

process.argv.map(function(obj) {
    if ( isNaN(obj) === false ) {
        total += +obj;
    }
});

console.log(total);