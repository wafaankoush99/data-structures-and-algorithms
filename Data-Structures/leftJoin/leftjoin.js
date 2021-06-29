'use strict';

function joinLeft(firstTree, secondTree) {

  if ((typeof firstTree === 'object' && typeof secondTree === 'object') && (firstTree.length === undefined && secondTree.length === undefined)) {


    let arrResult = [];
    for (let i = 0; i < firstTree.table.length; i++) {
      if (firstTree.table[i]) {
        // console.log(Object.entries(firstTree.table[i].head.value)[0]);
        arrResult.push(Object.entries(firstTree.table[i].head.value)[0]);
      }
    }
    for (let i = 0; i < secondTree.table.length; i++) {
      if (secondTree.table[i]) {
        for (let j = 0; j < arrResult.length; j++) {

          if (arrResult[j].includes(Object.keys(secondTree.table[i].head.value)[0])) {
            // console.log(Object.values(secondTree.table[i].head.value)[0]);
            arrResult[j].push(Object.values(secondTree.table[i].head.value)[0]);
            break;
          }

          // console.log(arrResult);
          if(!arrResult[j].includes(Object.keys(secondTree.table[i].head.value)[0]) && arrResult[j].length === 2) {
            // console.log(arrResult[j]);
            arrResult[j].push(null)
            // console.log(arrResult[j]);
          }
        }
      }
      
    }

    return arrResult;
  }
  else throw new Error('Type of input should be tree object !!!!!')

}
module.exports = joinLeft;