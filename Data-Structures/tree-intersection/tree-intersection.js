'use strict';

const HashTable = require('../hashtable');

// const BT =require('../tree/tree').BinaryTree;

function treeIntersection(firstTree, secondTree) {

    if ((typeof firstTree === 'object' && typeof secondTree === 'object') && (firstTree.length === undefined && secondTree.length === undefined)) {

        let result = [];

        const hashTable = new HashTable(2021);

        let arr1 = firstTree.preOrder();
        let arr2 = secondTree.preOrder();

        function compare(arrr1, arrr2) {
            for (let i = 0; i < arrr1.length; i++) {
                let key = arrr1[i].toString();
                let val = arrr1[i];
                if (!hashTable.contains(key)) {
                    hashTable.set(key, val);
                }
                else return;
            }

            for (let i = 0; i < arrr2.length; i++) {
                let key = arrr2[i].toString();
                let val2 = arrr2[i];
                if (hashTable.contains(key)) {
                    result.push(val2);
                }
            }
        }

        compare(arr1, arr2)

        if (result.length <= 0) {
            return 'no repeated values';

        } else return result;

    }

    else throw new Error('Type of input should be tree object !!!!!')



}

module.exports = treeIntersection;