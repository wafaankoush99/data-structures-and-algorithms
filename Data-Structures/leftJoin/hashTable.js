'use strict';
class Node {
  constructor (value){
    this.value = value;
    this.next = null;
  }
}
class LinkedList {
  constructor (){
    this.head = null;
    this.length = 0;
  }

  append(value) {
    try {
      let node = new Node(value);
      if (!this.head) {
        this.head = node;
        this.length++;
      } else {
        let current = this.head;
        while (current.next) {
          current = current.next;
        }
        current.next = node;
        this.length++;
      }
    } catch (error) {
      console.log(`Something went error`, error);
    }

  }

}


class HashTable {
  constructor (size){
    this.size = size;
    this.table = new Array (size);
  }

  hash (key){
    let sum = 0;
    sum = key.split('').reduce((result, n) => {
      return result + n.charCodeAt(0);
    }, 1) * 599 % this.table.length;
    return sum;
  }

  add ( key , value ){
    const hashed = this.hash (key);
    if ( !this.table[hashed]){
      this.table[hashed] = new LinkedList ();
    }
    this.table[hashed].append ({ [key] : value });


  }

  get (key){
    let valArray = [];
    const hashed = this.hash(key);
    if (this.table[hashed]){
      let pointer = this.table[hashed].head;
      while (pointer){

        let objArray = Object.values(pointer.value);
        objArray.map (item =>{
          valArray.push (item);
        });
        pointer = pointer.next;
      }
      return valArray;
    }else {
      return null;
    }

  }
}

module.exports = {
  HashTable:HashTable

} ;