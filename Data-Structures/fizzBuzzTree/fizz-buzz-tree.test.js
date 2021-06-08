'use strict';

const Node = require('./fizz-buzz-tree').Node;
const Tree = require('./fizz-buzz-tree').Tree;
const fizzBuzzTree= require ('./fizz-buzz-tree').fizzBuzzTree;
const { expect } = require('@jest/globals');

describe('Happy Bath', () => {

  it('Should return "Buzz" If the value is divisible by 5', () => {
    let tree = new Tree();

    let root = new Node(35);
    tree.root = root;
    root.children[0] = new Node(77);

    expect(fizzBuzzTree(tree).breadth()[0]).toEqual('Buzz');
  });
  it('Should return "Fizz" If the value is divisible by 3', () => {
    let tree = new Tree();

    let root = new Node(35);
    tree.root = root;
    root.children[0] = new Node(18);

    expect(fizzBuzzTree(tree).breadth()[1]).toEqual('Fizz');
  });
  it('Should return "FizzBuzz" If the value is divisible by 3 and 5', () => {
    let tree = new Tree();

    let root = new Node(35);
    tree.root = root;
    root.children[0] = new Node(15);

    expect(fizzBuzzTree(tree).breadth()[1]).toEqual('FizzBuzz');
  });
  it('Should stringify the value if it is not divisible by 3 or 5 ', () => {
    let tree = new Tree();

    let root = new Node(35);
    tree.root = root;
    root.children[0] = new Node(77);

    expect(fizzBuzzTree(tree).breadth()[1]).toEqual('77');
  });
  it('Should return new tree after invoke FizzBuzzTree function', () => {

    let tree = new Tree();

    let root = new Node(35);
    tree.root = root;
    root.children[0] = new Node(77);
    root.children[1] = new Node(35);
    root.children[2] = new Node(24);

    root.children[0].children[0] = new Node(574);
    root.children[0].children[1] = new Node(13);
    root.children[0].children[2] = new Node(19);

    root.children[1].children[0] = new Node(235);
    root.children[1].children[1] = new Node(569);
    root.children[1].children[2] = new Node(16);


    root.children[2].children[0] = new Node(147);
    root.children[2].children[1] = new Node(135);
    root.children[2].children[2] = new Node(30);

    root.children[2].children[2].children[0] = new Node(35);
    expect(fizzBuzzTree(tree).breadth()).toEqual(['Buzz', '77','Buzz', 'Fizz', '574', '13', '19', 'Buzz', '569', '16', 'Fizz', 'FizzBuzz', 'FizzBuzz', 'Buzz']);
  });

});



describe('Edge Cases And Expected Faller', () => {

  it('Should throw an error when invoke fizzBuzz function on empty tree', () => {
    let tree = new Tree();

    expect(() => fizzBuzzTree(tree).breadth()).toThrow('Exception : Empty Tree !!!');
    expect(() => fizzBuzzTree(tree).breadth()).toThrowError;
  });

});
