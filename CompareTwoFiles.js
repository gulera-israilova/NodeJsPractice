const fs = require('fs');

let array1 = fs.readFileSync('input.txt').toString().split("\n"),
    array2 = fs.readFileSync('patterns.txt').toString().split("\n");

let mode1Result = [],
    mode2Result = [],
    mode3Result = [];

array1.forEach((array1Item, array1Index) => {
    array2.forEach((array2Item, array2Index) => {
        if (array1Item === array2Item) {
            mode1Result.push(array1Item);
        }

        if (array1Item === array2Item && array1Index === array2Index) {
            mode2Result.push(array1Item)
        }

        if (diff(array1Item, array2Item) === 1) {
            mode3Result.push(array1Item);
        }
    })
})

function diff(str1, str2) {
    let diff = 0;
    if (str1.length !== str2.length) {
        return
    }
    str2.split('').forEach(function (item, index) {
        if (item !== str1.charAt(index)) {
            diff++;
        }
    });

    return diff;
}

console.log('Source files data: ', array1, ',', array2)
console.log('Mode 1 result: ', mode1Result)
console.log('Mode 2 result: ', mode2Result)
console.log('Mode 3 result: ', mode3Result)


