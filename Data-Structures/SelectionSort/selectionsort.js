function selectionSort(arr){

    if ( typeof arr === 'object' && arr.length !== undefined){
            for (let i=0;i<arr.length;i++){
                if (typeof arr[i] !== 'number'){
                    throw new Error ('The Type Of Array Should Be Array Of Numbers !!!!')
                }
        let min = i;
        for(let j=i; j<arr.length;j++){
            if(arr[j]<arr[min]){
                min = j;
            }
        }
        if (min !== i){
            let temp = arr[min];
            arr[min] = arr[i]
            arr[i] = temp;
        }
    }
    return arr;
    }
else {
    throw new Error ('The Input Should Be An Array !!!!!')
}

}

// console.log('hi');

let array =[8,4,23,42,16,15]
// selectionSort(array)
// console.log(selectionSort(array));
// console.log( typeof array);


// let obj = {m: 'm',
// r: 'r'}
// console.log(typeof obj)

module.exports = selectionSort;