'use strict';

function mergeSort (arr) {
    if (arr.length <= 1) { return arr }
    if ( typeof arr === 'object' && arr.length !== undefined){

    const mid = Math.floor(arr.length/2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);

    return merge(mergeSort(left), mergeSort(right))}
    else throw new Error ('Input Should be An Array !!!')
}

function merge(left, right){
    const arr = [];

    while (left.length && right.length) {
        if(left[0]<right[0]){ arr.push(left.shift())}
        else { arr.push(right.shift())}
    }

    return arr.concat(left.slice()).concat(right.slice())
}

// console.log(mergeSort([8,4,23,42,16,15]));
// console.log(mergeSort([20,18,12,8,5,-2]));
// console.log(mergeSort([5,12,7,5,5,7]));
// console.log(mergeSort([2,3,5,7,13,11]));

module.exports = mergeSort;