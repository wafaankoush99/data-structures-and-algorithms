function insertShiftArray(arr, value){

  let newarr=[]
  for (let i=0; i<(arr.length/2) ;i++){
    newarr.push(arr[i])
  }
  newarr.push(value)
    for (var i = arr.length-1; i >= (arr.length/2); i--){
    newarr.push(arr[i])
  }
  console.log(newarr)

}

insertShiftArray([2,4,6,-8], 5);
insertShiftArray([42,8,15,23,42], 16);
