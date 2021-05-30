'use strict';

const Stack = require('./stacks-and-queues').Stack;

const Queue = require('./stacks-and-queues.js').Queue;


describe('Stacks', () => {

  it('Can successfully push onto a stack', () => {
    const stack = new Stack();
    stack.push(2);
    expect(stack.top.value).toBe(2);
  });

  it('Can successfully push multiple values onto a stack', () => {
    const stack = new Stack();
    stack.push(4);
    stack.push(2);
    expect(stack.top.value).toBe(2);
    expect(stack.top.next.value).toBe(4);
  });

  it('Can successfully pop off the stack', () => {
    const stack = new Stack();
    stack.push('WAFA');
    stack.pop();
    expect(stack.isEmpty()).toBeTruthy();
  });

  it('Can successfully empty a stack after multiple pops', () => {
    const stack = new Stack();
    stack.push('A');
    stack.push('B');
    stack.push('C');
    stack.pop();
    stack.pop();
    stack.pop();
    expect(stack.isEmpty()).toBeTruthy();
  });

  it('Should raise exception when called "POP" on empty stack', () => {
    const stack = new Stack();
    expect(() => stack.pop()).toThrow('Exception : Empty Stack'); // error function
  });

  it('Can successfully peek the next item on the stack', () => {
    const stack = new Stack();
    stack.push('444');
    expect(stack.peek()).toBe('444');
  });

  it('Should raise exception when called "PEEK" on empty stack', () => {
    const stack = new Stack();
    expect(() => stack.peek()).toThrow('Exception : Empty Stack'); // error function
  });

  it('Can successfully instantiate an empty stack', () => {
    const stack = new Stack();
    expect(stack).toBeDefined();
  });

});

describe('Queue', () => {

  it('Can successfully instantiate an empty queue', () => {
    const queue = new Queue();
    expect(queue).toBeDefined();
  });


  it('Can successfully enqueue into a queue', () => {
    const queue = new Queue();
    queue.enqueue('M');
    expect(queue.front.value).toBe('M');
  });

  it('Can successfully enqueue multiple values into a queue', () => {
    const queue = new Queue();
    queue.enqueue('L');
    queue.enqueue('O');
    queue.enqueue('L');
    expect(queue.front.value).toBe('L');
    expect(queue.front.next.value).toBe('O');
    expect(queue.front.next.next.value).toBe('L');
  });

  it('Can successfully peek into a queue, seeing the expected value', () => {
    const queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(5);
    expect(queue.peek()).toBe(1);
  });

  it('Can successfully dequeue out of a queue the expected value', () =>{
    const queue = new Queue();
    queue.enqueue(1);
    expect(queue.dequeue()).toBe(1);
  });


  it('Calling peek on empty queue raises exception', () => {
    const queue = new Queue();
    expect(() => queue.peek()).toThrow(Error);
    expect(() => queue.peek()).toThrow('Exception : Empty Queue');
  });

  it('Can successfully empty a queue after multiple dequeues', () => {
    const queue = new Queue();
    queue.enqueue('S');
    queue.enqueue('R');
    let deq1 = queue.dequeue();
    let deq2 = queue.dequeue();
    expect(deq1).toBe('S');
    expect(deq2).toBe('R');
    expect(queue.isEmpty).toBeTruthy;
  });

  it('Calling dequeue on empty queue raises exception', () => {
    const queue = new Queue();
    expect(() => queue.dequeue()).toThrow('Exception : Empty Queue');
  });

});
