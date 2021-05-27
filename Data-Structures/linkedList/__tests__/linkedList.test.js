'use strict';

const Node = require('../node');
const LinkedList = require('../linkedList');
const zipLists = require('../zipList');
const { expect } = require('@jest/globals');

describe('Check Linked List Class', () => {

  it('Can successfully instantiate an empty linked list', () => {
    let linkedList = new LinkedList();
    expect(linkedList.head).toBeNull();
  });

  it('Can properly insert into the linked list', () => {
    let linkedList = new LinkedList();
    let value = 2;
    linkedList.insert(value);
    expect(linkedList.head.value).toEqual(value);
    expect(linkedList.head.next).toBeNull();
  });

  it('The head property will properly point to the first node in the linked list', () => {
    let linkedList = new LinkedList();
    let value = 3;
    linkedList.insert(value);
    let newValue = 8;
    linkedList.insert(newValue);
    expect(linkedList.head.value).toEqual(newValue);
    expect(linkedList.head.next.value).toEqual(value);
    expect(linkedList.head.next.next).toBeNull;
  });

  it('Can properly insert multiple nodes into the linked list', () => {
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

  it('Will return false when searching for a value in the linked list that does not exist', () => {
    let linkedList = new LinkedList();
    expect(linkedList.includes(5)).toBeFalsy();
  });

  it('Can properly return a collection of all the values that exist in the linked list', () => {
    let linkedList = new LinkedList();

    linkedList.insert(2);
    linkedList.insert(4);
    linkedList.insert(5);

    expect(linkedList.toString()).toEqual('{ 5 } -> { 4 } -> { 2 } -> NULL');

  });

  /* append / insert before / insert after */
  it('Can successfully add a node to the end of the linked list', () => {
    let linkedList = new LinkedList();

    linkedList.insert(2);
    let appendedValue = 5;
    // 2 5
    linkedList.append(appendedValue);
    expect(linkedList.head.next.value).toEqual(appendedValue);

  });

  it('test edge case in append method', () => {
    let linkedList = new LinkedList();

    linkedList.insert(2);
    let appendedValue = [];
    linkedList.append(appendedValue);
    console.log(linkedList.head.value);
    // console.log(linkedList.head.next.value);
    expect(linkedList.head.next).toBeNull();

  });

  it('Can successfully add multiple nodes to the end of a linked list', () => {
    let linkedList = new LinkedList();

    linkedList.append(2);
    linkedList.append(4);
    linkedList.append(7);
    // 2 4 7

    expect(linkedList.head.value).toEqual(2);
    expect(linkedList.head.next.value).toEqual(4);
    expect(linkedList.head.next.next.value).toEqual(7);

  });

  it('Can successfully insert a node before a node located i the middle of a linked list', () => {
    let linkedList = new LinkedList();

    linkedList.insert(2);
    linkedList.insert(4);
    linkedList.insert(7);
    // 7 4 2
    let newValue = 9;
    linkedList.insertBefore(newValue, 4);
    expect(linkedList.head.next.value).toEqual(9);
    expect(linkedList.head.next.next.value).toEqual(4);

  });

  it('test edge case in insertBefore method', () => {
    let linkedList = new LinkedList();

    linkedList.insert(2);
    linkedList.insert(5);
    linkedList.insert(4);
    //4 5 2
    // adding one parameter (edge case)
    linkedList.insertBefore(5);
    // add value which is not string or number
    linkedList.insertBefore([],5);
    // value does not exist
    linkedList.insertBefore(7,8);
    expect(linkedList.toString()).toEqual('{ 4 } -> { 5 } -> { 2 } -> NULL');

  });

  it('Can successfully insert a node before the first node of a linked list', () => {
    let linkedList = new LinkedList();
    let firstNode = 5;
    let newValue = 9;
    linkedList.insert(firstNode);
    // 9 5
    linkedList.insertBefore(newValue, firstNode);

    expect(linkedList.head.value).toEqual(newValue);
    expect(linkedList.head.next.value).toEqual(firstNode);

  });
  it('Can successfully insert after a node in the middle of the linked list', () => {
    let linkedList = new LinkedList();

    linkedList.insert(2);
    linkedList.insert(4);
    linkedList.insert(7);
    // 7 4 (9) 2
    let newValue = 9;
    linkedList.insertAfter(newValue, 4);
    expect(linkedList.head.next.value).toEqual(4);
    expect(linkedList.head.next.next.value).toEqual(newValue);

  });

  it('Can successfully insert a node after the last node of the linked list', () => {
    let linkedList = new LinkedList();

    linkedList.insert(2);
    linkedList.insert(4);
    linkedList.insert(7);
    // 7 4 2 (9)
    let newValue = 9;
    linkedList.insertAfter(newValue, 2);
    expect(linkedList.head.next.value).toEqual(4);
    expect(linkedList.head.next.next.value).toEqual(2);
    expect(linkedList.head.next.next.next.value).toEqual(newValue);

  });
  it('test edge case in insertAfter method', () => {
    let linkedList = new LinkedList();

    linkedList.insert(2);
    linkedList.insert(5);
    linkedList.insert(4);
    //4 5 2
    // adding one parameter (edge case)
    linkedList.insertAfter(5);
    // add value which is not string or number
    linkedList.insertAfter([],5);
    // value does not exist
    linkedList.insertAfter(7,8);
    expect(linkedList.toString()).toEqual('{ 4 } -> { 5 } -> { 2 } -> NULL');

  });

  // Where k is greater than the length of the linked list
  // Where k and the length of the list are the same
  // Where k is not a positive integer
  // Where the linked list is of a size 1
  // “Happy Path” where k is not at the end, but somewhere in the middle of the linked list

  it('Where k is greater than the length of the linked list', () => {
    let linkedList = new LinkedList();
    linkedList.insert(2);
    linkedList.insert(4);
    linkedList.insert(7);
    expect(linkedList.kthFromEnd(8)).toEqual('exception');
  });

  it('Where k and the length of the list are the same', () => {
    let linkedList = new LinkedList();
    linkedList.insert(2);
    linkedList.insert(4);
    linkedList.insert(7);
    expect(linkedList.kthFromEnd(3)).toEqual('exception');
  });

  it('Where k is not a positive integer', () => {
    let linkedList = new LinkedList();
    linkedList.insert(2);
    linkedList.insert(4);
    linkedList.insert(7);
    expect(linkedList.kthFromEnd(-3)).toEqual('exception');
  });

  it('Where the linked list is of a size 1', () => {
    let linkedList = new LinkedList();
    linkedList.insert(2);
    expect(linkedList.kthFromEnd(0)).toEqual(2);
    expect(linkedList.kthFromEnd(1)).toEqual('exception');
  });

  it('where k is not at the end, but somewhere in the middle of the linked list', () => {
    let linkedList = new LinkedList();
    linkedList.insert(2);
    linkedList.insert(4);
    linkedList.insert(7);
    expect(linkedList.kthFromEnd(1)).toEqual(4);
  });

  // zipLinked list

  it ('Zip second linked list into first if the second is longer than the first',()=>{

    let ll1 = new LinkedList ();
    ll1.insert (100);
    ll1.insert (200);

    let ll2 = new LinkedList ();
    ll2.insert (400);
    ll2.insert (600);
    ll2.insert (300);
    let result = zipLists (ll1 , ll2);
    expect (result.head.value).toBe (200);
    expect (result.head.next.value).toBe (300);
    expect (result.head.next.next.value).toBe (100);
    expect (result.head.next.next.next.value).toBe (600);
  });


  it ('Zip second linked list into first if the first is longer than the second',()=>{

    let ll1 = new LinkedList ();
    ll1.insert (500);
    ll1.insert (300);
    ll1.insert (400);

    let ll2 = new LinkedList ();
    ll2.insert (100);
    ll2.insert (200);
    let result = zipLists (ll1 , ll2);
    expect (result.head.value).toBe (400);
    expect (result.head.next.value).toBe (200);
    expect (result.head.next.next.value).toBe (300);
    expect (result.head.next.next.next.value).toBe (100);
  });
});
