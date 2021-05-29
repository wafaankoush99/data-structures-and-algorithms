'use strict';

/* <-------------------------------------------------------------------------------------------------------------> */

// Create a Node class that has properties for the value stored in the Node, and a pointer to the next node.

class Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

/* <-------------------------------------------------------------------------------------------------------------> */

// Create a Stack class that has a top property. It creates an empty Stack when instantiated.

class Stack {

  // This object should be aware of a default empty value assigned to top when the stack is created.

  constructor() {
    this.top = null;
  }

  //   Define a method called isEmpty that takes no argument, and returns a boolean indicating whether or not the stack is empty.

  isEmpty() {

    if (!this.top) {
      return true; // is empty
    }

    else return false;

  }

  //   Define a method called peek that does not take an argument and returns the value of the node located on top of the stack,
  //    without removing it from the stack.
  // Should raise exception when called on empty stack

  peek() {

    if(this.top){
      return this.top.value;
    }

    else throw new Error ('Exception : Empty Stack');

  }

  //   Define a method called push which takes any value as an argument and adds a new node with that value to the
  //    top of the stack with an O(1) Time performance.

  push(value) {
    let newNode = new Node (value);
    newNode.next = this.top;
    this.top = newNode;
  }

  //   Define a method called pop that does not take any argument, removes the node from the top of the stack,
  //   and returns the node’s value.
  // Should raise exception when called on empty stack

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

/* <-------------------------------------------------------------------------------------------------------------> */

//Create a Queue class that has a front property. It creates an empty Queue when instantiated.

class Queue {

  // This object should be aware of a default empty value assigned to front when the queue is created.

  constructor() {
    this.front = null;
    this.back = null;
  }

  //Define a method called enqueue which takes any value as an argument and adds a new node with that value
  //    to the back of the queue with an O(1) Time performance.

  enqueue(value) {


    if (this.isEmpty()) {

      let temp = new Node(value, null); // point to null "back of queue"
      this.front = temp;
      this.back = temp;
      return;

    }

    let temp = new Node(value, null);
    this.back.next = temp;
    this.back = temp;

  }

  // Define a method called peek that does not take an argument and returns the value of the node located in the front of
  //   the queue, without removing it from the queue.
  // Should raise exception when called on empty queue

  peek() {

    if (this.front){
      return this.front.value;
    }
    else throw new Error ('Exception : Empty Queue');

  }

  // Define a method called dequeue that does not take any argument, removes the node from the front of the queue,
  //    and returns the node’s value.
  // Should raise exception when called on empty queue

  dequeue() {

    // Empty
    if (this.isEmpty()) { //true
      throw new Error('Exception : Empty Queue');
    }


    let temp = this.front;

    // Has More Than 1 Node
    if (this.front.next) {
      this.front = this.front.next;
      return temp.value;
    }

    // Has 1 Node
    if (!this.front.next) {
      this.front = null;
      return temp.value;
    }

  }

  // Define a method called isEmpty that takes no argument, and returns a boolean indicating whether or not the queue is empty.

  isEmpty() {

    if (!this.front) {
      return true;
    }
    else return false;

  }

}

/* <-------------------------------------------------------------------------------------------------------------> */

module.exports = { Node, Stack, Queue };

/* <-------------------------------------------------------------------------------------------------------------> */



