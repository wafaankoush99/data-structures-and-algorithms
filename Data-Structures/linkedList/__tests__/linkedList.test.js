'use strict';

const Node = require('../node');
const LinkedList = require('../linked-list');
const { expect } = require('@jest/globals');

describe('Check Linked List Class', ()=>{

  it('Can successfully instantiate an empty linked list', ()=>{
    let linkedList = new LinkedList();
    expect(linkedList.head).toBeNull();
  });

  it('Can properly insert into the linked list', ()=>{
    let linkedList = new LinkedList();
    let value = 2;
    linkedList.insert(value);
    expect(linkedList.head.value).toEqual(value);
    expect(linkedList.head.next).toBeNull();
  });

  it('The head property will properly point to the first node in the linked list', ()=>{
    let linkedList = new LinkedList();
    let value = 3;
    linkedList.insert(value);
    let newValue = 8;
    linkedList.insert(newValue);
    expect(linkedList.head.value).toEqual(newValue);
    expect(linkedList.head.next.value).toEqual(value);
    expect(linkedList.head.next.next).toBeNull;
  });

  it('Can properly insert multiple nodes into the linked list', ()=>{
    let linkedList = new LinkedList();

    linkedList.insert(2);
    linkedList.insert(4);
    linkedList.insert(5);

    expect(linkedList.head.value).toEqual(5);
    expect(linkedList.head.next.value).toEqual(4);
    expect(linkedList.head.next.next.value).toEqual(2);

    expect(linkedList.head.next.next.next).toBeNull();
  });

  it('Will return true when finding a value within the linked list that exists', () => {
    let linkedList = new LinkedList();
    linkedList.insert(4);
    linkedList.insert(6);
    linkedList.insert(2);
    linkedList.insert(15);
    expect(linkedList.includes(6)).toBeTruthy();
  });

  it('Will return false when searching for a value in the linked list that does not exist', ()=>{
    let linkedList = new LinkedList();
    expect(linkedList.includes(5)).toBeFalsy();
  });

  it('Can properly return a collection of all the values that exist in the linked list', ()=>{
    let linkedList = new LinkedList();

    linkedList.insert(2);
    linkedList.insert(4);
    linkedList.insert(5);

    expect(linkedList.toString()).toEqual('{ 5 } -> { 4 } -> { 2 } -> NULL');

  });


});
