'use strict';

let Node = require('../node');
const { expect } = require('@jest/globals');

describe('Check the Node', ()=>{
  it('Check value & next',()=>{
    let value = 5;
    let node = new Node(value);
    expect(node.value).toEqual(value);
    expect(node.next).toBeNull();
  });
});
