const fs = require('fs');

fs.readFile('input.txt', function(err, data) {
    if(err) throw err;
    const array1 = data.toString().split("\n");

    fs.readFile('patterns.txt', function(err, data) {
        if(err) throw err;
        const array2 = data.toString().split("\n");

        for(i in array1) {
            for(j in array2){
                if (array1[i]===array2[j]){
                    console.log(array1[i]);
                }}}
        for(i in array1) {
            for(j in array2){
                if (array1[i]===array2[j] && j===i){
                    console.log(array1[i]);
                }
            }}
    });
});





