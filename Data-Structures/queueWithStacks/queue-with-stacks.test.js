'use strict';

let PseudoQueue = require('./queue-with-stacks');
const { expect } = require('@jest/globals');

describe(' Test-1 : Happy Path', () => {
  it('Should Successfully Push A Value To Stack1', ()=>{
    const pseudoQueue = new PseudoQueue();
    pseudoQueue.enqueue('2458');
    expect(pseudoQueue.stack1.top.value).toBe('2458');
  });

  it('Should Successfully Push Multiple Values To Stack1', ()=>{
    const pseudoQueue = new PseudoQueue();
    pseudoQueue.enqueue('2458');
    pseudoQueue.enqueue('3569');
    pseudoQueue.enqueue('8475');
    expect(pseudoQueue.stack1.top.value).toBe('8475');
    expect(pseudoQueue.stack1.top.next.value).toBe('3569');
    expect(pseudoQueue.stack1.top.next.next.value).toBe('2458');
  });

  it('Should Successfully Extract "Dequeue" A Value Using FIFO', ()=>{
    const pseudoQueue = new PseudoQueue();
    pseudoQueue.enqueue('2458');
    let poppedVal = pseudoQueue.dequeue();
    expect(poppedVal).toEqual('2458');
    expect(pseudoQueue.stack1.top).toBe(null);
  });

  it('Should Successfully Extract "Dequeue" Multiple Values Using FIFO', ()=>{
    const pseudoQueue = new PseudoQueue();
    pseudoQueue.enqueue('A');
    pseudoQueue.enqueue('B');
    pseudoQueue.enqueue('C');
    let poppedVal1 = pseudoQueue.dequeue();
    let poppedVal2 = pseudoQueue.dequeue();
    let poppedVal3 = pseudoQueue.dequeue();
    expect(poppedVal1).toEqual('A');
    expect(poppedVal2).toEqual('B');
    expect(poppedVal3).toEqual('C');
    expect(pseudoQueue.stack1.top).toBe(null);
    expect(pseudoQueue.stack1.isEmpty()).toBeTruthy;
  });

});

describe('Test-2 : Expected failure & Edge Cases', () =>{
  it('Calling Dequeue On Empty Queue Raises Exception', ()=>{
    const pseudoQueue = new PseudoQueue();
    expect(() => pseudoQueue.dequeue()).toThrow(' Exception : Stack1 Is Empty !! ');
    expect(() => pseudoQueue.dequeue()).toThrowError();
  });
});


