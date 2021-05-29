'use strict';

// Within your LinkedList class, include a head property. Upon instantiation, an empty Linked List should be created.

const Node = require('./node');

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
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
      this.size++;

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
    catch (err) { console.error('Does not Include a value', err); }
  }



  // Define a method called toString which takes in no arguments and returns a string representing all the values in the Linked List, formatted as: "{ a } -> { b } -> { c } -> NULL"

  toString() {
    try {
      let string = '';
      if (!(this.head)) {
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
    catch (err) { console.error('Error in toString()', err); }
  }

  // .append(value) which adds a new node with the given value to the end of the list

  append(value) {
    try {
      let temp = new Node(value);
      if (!this.head) {
        this.head = temp;
      }
      else {
        let current = this.head;
        while (current.next) {
          current = current.next;
        }
        current.next = temp;
      }
    }
    catch (err) { console.error('Can not append', err); }
  }


  //.insertBefore(value, newVal) which add a new node with the given newValue immediately before the first value node

  insertBefore(newValue, value) {
    try {
      let temp = new Node(newValue);
      let current = this.head;

      if (current.value === value) {
        temp.next = current;
        this.head = temp;
        return;
      }

      else {
        while (current.next) {
          if (current.next.value === value) {
            temp.next = current.next;
            current.next = temp;
            break;
          }

          current = current.next;

        }
      }
    }
    catch (err) { console.error('Can not Insert Before', err); }
  }


  // insertAfter(value, newVal) which add a new node with the given newValue immediately after the first value node

  insertAfter(newValue, value) {
    try {
      let current = this.head;
      let temp = new Node(newValue);

      while (current) {
        if (current.value === value) {
          temp.next = current.next;
          current.next = temp;
          break;
        }
        current = current.next;
      }
    }
    catch (err) { console.error('Can not Insert After', err); }
  }

  // Write a method for the Linked List class which takes a number, k, as a parameter. Return the node’s value that is k from the end of the linked list. You have access to the Node class and all the properties on the Linked List class as well as the methods created in previous challenges.

  kthFromEnd(k) {
    try {
      let current = this.head;
      let s = this.size - 1;
      if (k === s) {
        return current.value;
      }
      if (k > s || k < 0) { return 'exception'; }
      if (k !== s) {
        while (current) {
          current = current.next;
          s--;
          if (s === k) {
            return current.value;
          }
        }
      }
    }
    catch (err) { console.error('Can not Return Node Value', err); }

  }
}







module.exports = LinkedList;
// module.exports = zipList;

