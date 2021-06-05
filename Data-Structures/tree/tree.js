'use strict';

class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}
class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  // Root - Left - Right
  preOrder() {
    try {
      let results = [];
      let traverse = (node) => {
        results.push(node.value);
        if (node.left) traverse(node.left);
        if (node.right) traverse(node.right);
      };
      traverse(this.root);
      return results;
    }
    catch (err) { console.error('Error in preOrder method', err); }
  }

  // Left - Root - Right
  inOrder() {
    try {
      let results = [];
      let traverse = (node) => {
        if (node.left) traverse(node.left);
        results.push(node.value);
        if (node.right) traverse(node.right);
      };
      traverse(this.root);
      return results;
    }
    catch (err) { console.error('Error in inOrder method', err); }

  }

  // Left - Right - Root
  postOrder() {
    try {
      let results = [];
      let traverse = (node) => {
        if (node.left) traverse(node.left);
        if (node.right) traverse(node.right);
        results.push(node.value);
      };
      traverse(this.root);
      return results;
    }
    catch (err) { console.error('Error in postOrder method', err); }

  }
}


class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }
  add(value) {
    if (typeof value === 'number') {
      let newNode = new Node(value);
      let current = this.root;

      while (current) {
        if (newNode.value > current.value) {
          if (current.right) {
            current = current.right;
          }
          else {
            current.right = newNode;
            break;
          }
        }
        else if (newNode.value < current.value) {
          if (current.left) {
            current = current.left;
          }
          else {
            current.left = newNode;
            break;
          }

        }
      }
    }
    else {
      throw new Error('The Value Should Be A Number');
    }

  }

  contains(value) {
    if (typeof value === 'number') {
      let current = this.root;
      while (current) {
        if (value === current.value) {
          return true;
        }
        if (value > current.value) {
          if (current.right) {
            current = current.right;
          }
          else {
            return false;
          }
        }
        else if (value < current.value) {
          if (current.left) {
            current = current.left;
          }
          else {
            return false;
          }
        }
      }
    }
    else {
      throw new Error('The Value Should Be A Number');
    }
  }
}


module.exports = {
  Node: Node,
  BinaryTree: BinaryTree,
  BinarySearchTree: BinarySearchTree
};


