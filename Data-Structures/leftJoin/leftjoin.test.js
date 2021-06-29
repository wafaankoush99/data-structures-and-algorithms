'use strict';

const joinLeft = require('./leftjoin')
const { HashTable } = require('./hashTable');
const { expect } = require('@jest/globals');

let firstTree = new HashTable(1024);
firstTree.add('fond', 'enamored');
firstTree.add('wrath', 'anger');
firstTree.add('diligent', 'employed');
firstTree.add('outfit', 'garb');
firstTree.add('guide', 'usher');

let secondTree = new HashTable(1024);
secondTree.add('fond', 'averse');
secondTree.add('wrath', 'delight');
secondTree.add('diligent', 'idle');
secondTree.add('guide', 'follow');
secondTree.add('flow', 'jam');

describe('Happy path :)', () => {
  it('if values exist in the “right” hashmap, they are appended to the result row If not NULL should be appended to the result row.', () => {
    expect(joinLeft(firstTree, secondTree)).toEqual([
      ['fond', 'enamored', 'averse'],
      ['guide', 'usher', 'follow'],
      ['wrath', 'anger', 'delight'],
      ['diligent', 'employed', 'idle'],
      ['outfit', 'garb', null]
    ]);
  });
});

describe('Edge cases :(', () => {
  it('should throw error in an edge case', () => {
    let input1 = 'string'
    let input2 = 25
    expect(() => joinLeft(input1, input2)).toThrow('Type of input should be tree object !!!!!');
  });
  it('should throw error in an edge case', () => {
    expect(() => joinLeft()).toThrow('Type of input should be tree object !!!!!');
  });
});

