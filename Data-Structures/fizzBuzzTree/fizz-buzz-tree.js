'use strict';
// let treeify = require('treeify');

let { Queue } = require('../stacksAndQueues/stacks-and-queues');


class Node {
  constructor(value) {
    this.value = value;
    this.children = [];
  }
}

class Tree {
  constructor() {
    this.root = null;
  }

  breadth() {
    if (this.root) {
      let result = [];
      let queue = new Queue();

      queue.enqueue(this.root);


      while (!queue.isEmpty()) {
        let temp = queue.dequeue();
        result.push(temp.value);
        for (let i = 0; i < temp.children.length; i++)
          if (temp.children[i]) {
            queue.enqueue(temp.children[i]);
          }
      }
      return result;
    } else throw new Error('Exception : Empty Tree !!!');

  }
}

function fizzBuzzTree(tree) {
  if (tree.root) {
    let fizzBuzzTree = tree;
    let traverse = (node) => {
      if (node.value % 15 === 0) {
        node.value = 'FizzBuzz';
      }

      else if (node.value % 5 === 0) {
        node.value = 'Buzz';
      }
      else if (node.value % 3 === 0) {
        node.value = 'Fizz';
      }
      else {
        node.value = node.value.toString();
      }

      for (let i = 0; i < node.children.length; i++) {
        traverse(node.children[i]);
      }
    };
    traverse(fizzBuzzTree.root);
    return fizzBuzzTree;
  } else throw new Error('Exception : Empty Tree !!!');

}


//                 35
//     1           35         24
//574  13  19    235 569 16 35    147 135 30



let tree = new Tree();

let root1 = new Node(35);
tree.root = root1;
root1.children[0] = new Node(77);
root1.children[1] = new Node(35);
root1.children[2] = new Node(24);

root1.children[0].children[0] = new Node(574);
root1.children[0].children[1] = new Node(13);
root1.children[0].children[2] = new Node(19);

root1.children[1].children[0] = new Node(235);
root1.children[1].children[1] = new Node(569);
root1.children[1].children[2] = new Node(16);


root1.children[2].children[0] = new Node(147);
root1.children[2].children[1] = new Node(135);
root1.children[2].children[2] = new Node(30);

root1.children[2].children[2].children[0] = new Node(35);

console.log(fizzBuzzTree(tree).breadth());

