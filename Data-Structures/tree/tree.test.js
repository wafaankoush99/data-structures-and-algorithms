'use strict';

const { BinaryTree } = require('./tree');
const { Node } = require('./tree');
const { BinarySearchTree } = require('./tree');
const { expect } = require('@jest/globals');


let tree = null;

describe('Binary Tree TEST', () => {
  beforeAll(() => {
    let one = new Node(1);
    let two = new Node(2);
    let three = new Node(3);
    let four = new Node(4);
    let five = new Node(5);
    let six = new Node(6);
    let seven = new Node(7);
    let eight = new Node(8);
    let nine = new Node(9);

    one.left = two;
    one.right = three;
    two.left = six;
    six.right = seven;
    seven.left = eight;
    seven.right = nine;
    three.left = four;
    three.right = five;

    tree = new BinaryTree(one);
  });

  it('Can successfully instantiate an empty tree', () => {
    let newTree = new BinaryTree();
    expect(newTree.root).toBeNull();
  });

  it('Can successfully instantiate a tree with a single root node', () => {
    let newTree = new BinaryTree(5);
    expect(newTree.root).toBe(5);
  });

  it('Can successfully return a collection from a preorder traversal', () => {
    let expected = [1, 2, 6, 7, 8, 9, 3, 4, 5];
    let preOrderResult = tree.preOrder();
    expect(preOrderResult).toEqual(expected);
  });

  it('Can successfully return a collection from an inorder traversal', () => {
    let expected = [6, 8, 7, 9, 2, 1, 4, 3, 5];
    let inOrderResult = tree.inOrder();
    expect(inOrderResult).toEqual(expected);
  });

  it('Can successfully return a collection from a postorder traversal', () => {
    let expected = [8, 9, 7, 6, 2, 4, 5, 3, 1];
    let postOrderResult = tree.postOrder();
    expect(postOrderResult).toEqual(expected);
  });
});

describe('Binary Search Tree TEST', () => {

  it('Can successfully add a left child and right child to a single root node', () => {
    let newNode = new Node(400);
    let myTree = new BinarySearchTree(newNode);
    myTree.add(450);
    myTree.add(500);
    myTree.add(270);
    expect(myTree.root.value).toBe(400);
    expect(myTree.root.left.value).toBe(270);
    expect(myTree.root.right.value).toBe(450);
    expect(myTree.root.right.right.value).toBe(500);
  });

  it('Should returns a boolean indicating whether or not the value is in the tree at least once.', () => {
    let meTree = new BinarySearchTree();
    meTree.add(400);
    meTree.add(500);
    meTree.add(270);
    expect(meTree.contains(400)).toBeTruthy;
    expect(meTree.contains(500)).toBeTruthy;
    expect(meTree.contains(270)).toBeTruthy;
    expect(meTree.contains(360)).toBeFalsy;
  });

});

describe('Edge Cases And Expected Faller', () => {
  it('Should through an error when add a non numerical value to add method', () => {
    let meTree = new BinarySearchTree();
    expect(()=>meTree.add('String')).toThrow('The Value Should Be A Number');
  });
  it('Should through an error when add a non numerical value to contains method', () => {
    let meTree = new BinarySearchTree();
    meTree.add(400);
    meTree.add(500);
    meTree.add(270);
    expect(()=>meTree.contains('String')).toThrow('The Value Should Be A Number');
  });


});




