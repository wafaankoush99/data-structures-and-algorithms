'use strict';

// Within your LinkedList class, include a head property. Upon instantiation, an empty Linked List should be created.

const Node = require('./node');

class LinkedList {
  constructor() {
    this.head = null;
  }

  // Define a method called insert which takes any value as an argument and adds a new node with that value to the head of the list with an O(1) Time performance.

  insert(value) {
    try {
      let temp = new Node(value);
      if (!(this.head)) {
        this.head = temp;
      }
      else {
        temp.next = this.head;
        this.head = temp;
      }
    }
    catch (err) { console.error('Can not Insert', err); }

  }

  // Define a method called includes which takes any value as an argument and returns a boolean result depending on whether that value exists as a Node’s value somewhere within the list.

  includes(value) {
    try {
      if (!(this.head)) {
        return false;
      }
      else {
        let temp = this.head;
        while (temp.next) {
          if (temp.value === value) {
            return true;
          }
          temp = temp.next;
        }
        return false;
      }
    }
    catch(err){console.error('Does not Include a value', err);}
  }



  // Define a method called toString
  // which takes in no arguments and returns a string representing all the values in the Linked List, formatted as:
  // "{ a } -> { b } -> { c } -> NULL"

  toString() {
    try {
      let string = '';
      if (!(this.head)){
        string = 'NULL';
        return string;
      }
      else {
        let temp = this.head;
        while (temp) {
          // { 5 } -> { 4 } -> { 2 } -> NULL
          string += `{ ${temp.value} } -> `;
          temp = temp.next;
        }
        string += 'NULL';
      }
      return string;
    }
    catch(err){ console.error('Error in toString()', err);}
  }

}

module.exports = LinkedList;

