'use strict';


function quickSort(arr, left, right) {



    if (typeof arr === 'object' && arr.length !== undefined) {

        for (let i = 0; i < arr.length; i++) {
            if (typeof arr[i] !== 'number')
                throw new Error('The Type Of Array Should Be Array Of Numbers !!!!')

                else {
                    
                }
        }

        if (left < right) {
            // console.log('inside quickSort');
            let position = partition(arr, left, right)
            // console.log(position);
            quickSort(arr, left, position - 1)
            quickSort(arr, position + 1, right)
            return arr;
        }
    }
    else throw new Error('The Input Should Be An Array !!!!!')


}

function partition(arr, left, right) {
    // console.log('position');

    let pivot = arr[right]
    let low = left - 1;

    for (let s = left; s < right; s++) {
        if (arr[s] <= pivot) {
            low++
            swap(arr, s, low)
        }

    }
    swap(arr, right, low + 1)
    return low + 1
}

function swap(arr, i, low) {
    // console.log('swap');

    let temp;
    temp = arr[i]
    arr[i] = arr[low]
    arr[low] = temp
    // console.log("doone");
}

// let input = [8, 4, 23, 42, 's', 15]
// console.log(quickSort(input, 0, input.length - 1));


module.exports = quickSort