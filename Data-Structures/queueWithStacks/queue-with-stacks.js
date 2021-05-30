'use strict';


class Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }

  isEmpty() {

    if (!this.top) {
      return true; // is empty
    }

    else return false;

  }

  peek() {

    if(this.top){
      return this.top.value;
    }

    else throw new Error ('Exception : Empty Stack');

  }


  push(value) {
    let newNode = new Node (value);
    newNode.next = this.top;
    this.top = newNode;
  }

  pop() {

    // Empty
    if (this.isEmpty()) { //true
      throw new Error('Exception : Empty Stack');
    }

    let temp = this.top;

    // Has More Than 1 Node
    if (this.top.next) {
      this.top = this.top.next;
      return temp.value;
    }

    // Has 1 Node
    if (!this.top.next) {
      this.top = null;
      return temp.value;
    }
  }
}

// Create a brand new PseudoQueue class. this PseudoQueue class will implement our standard queue interface

class PseudoQueue{
  constructor() {
    this.stack1 = new Stack();
    this.stack2 = new Stack();
  }

  //enqueue(value) which inserts value into the PseudoQueue, using a first-in, first-out approach.
  enqueue(value){
    this.stack1.push(value);
  }

  //dequeue() which extracts a value from the PseudoQueue, using a first-in, first-out approach.
  dequeue(){

    if (!this.stack1.top){
      throw new Error (' Exception : Stack1 Is Empty !! ');
    }
    while (this.stack1.top){
      this.stack2.push(this.stack1.pop());
    }

    let extracted = this.stack2.pop();
    while(this.stack2.top){
      this.stack1.push(this.stack2.pop());
    }
    return extracted;

  }
}

module.exports = PseudoQueue;
