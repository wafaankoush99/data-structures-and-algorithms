'use strict';

const Node = require('../tree/tree').Node;

const BinaryTree = require('../tree/tree').BinaryTree;

const treeIntersection = require('./tree-intersection');

const { expect } = require('@jest/globals');


// first tree
let tree1 = new BinaryTree();

tree1.root = new Node(7000);
let one = new Node(3000);
let two = new Node(5000);
let three = new Node(6000);

tree1.root.right = one;
one.left = two;
two.left = three;

// second tree
let tree2 = new BinaryTree();

tree2.root = new Node(7000);
let one2 = new Node(2000);
let two2 = new Node(5000);
let three2 = new Node(3000);
let four2 = new Node(4004);

tree2.root.right = one2;
one2.left = two2;
two2.left = three2;
three2.left = four2;

// three tree
let tree3 = new BinaryTree();

tree3.root = new Node(4004);
let one3 = new Node(6050);
let two3 = new Node(7045);
let three3 = new Node(9874);

tree3.root.right = one3;
one3.left = two3;
two3.left = three3;

describe('Happy Path :) ', () => {
    it('can return a set of values found in both trees', () => {
        expect(treeIntersection(tree1, tree2)).toEqual([7000, 5000, 3000]);
    });
    it('can return a set of values found in both trees', () => {
        expect(treeIntersection(tree2, tree3)).toEqual([4004]);
    });

});

describe('Edge Cases & Expected failer :(', () => {
    it('Should return message if there is no repeated values', () => {
        expect(treeIntersection(tree1, tree3)).toEqual('no repeated values');
    });

    it('Should throw an error when the type of input is not a tree object', () => {
        expect(() => { treeIntersection('fsdds','ddssad') }).toThrow('Type of input should be tree object !!!!!');
        expect(() => { treeIntersection('fsdds','ddssad') }).toThrowError;
    });


});


