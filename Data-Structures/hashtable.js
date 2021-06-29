'use strict';

const LinkedList = require('../Data-Structures/linkedList/linkedList');

class HashTable{
  constructor (length) {
    this.length = length;
    this.table = new Array(length);
  }

  hash(key) {
    let result = 0;
    result = key.split('').reduce((result, i) => {
      return result + i.charCodeAt(0);
    }, 0) * 599 % this.length;
    return result;
  }

  set(key, value) {
    let result = this.hash(key);
    if (!this.table[result]) {
      this.table[result] = new LinkedList();
    }
    let keyValuePair = { [key]: value };
    this.table[result].append(keyValuePair);
  }

  contains(key){
    let result = this.hash(key);
    if(!this.table[result]){
      return false;
    }else{
      return true;
    }
  }

}

module.exports=HashTable;