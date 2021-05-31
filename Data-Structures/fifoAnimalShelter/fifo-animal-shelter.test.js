'use strict';

const AnimalShelter = require('./fifo-animal-shelter');
const { expect } = require('@jest/globals');

/* <---------------------------------------Happy Path---------------------------------------------> */

describe('Happy Path', () => {

  it('Should Add "Enqueue" Animal To An Empty Shelter', () => {
    const shelter = new AnimalShelter();

    let catObject = {
      name: 'Sherry',
      type: 'cat'
    };

    shelter.enqueue(catObject);

    expect(shelter).toBeDefined();
    expect(shelter.front.value).toEqual(catObject);
    expect(shelter.back.value).toEqual(catObject);

  });

  it('Should Add "Enqueue" Multiple Animals To A Shelter', () => {
    const shelter = new AnimalShelter();

    let catObject = {
      name: 'Sherry',
      type: 'cat'
    };

    let dogObject = {
      name: 'Kitty',
      type: 'cat'
    };

    let catObject2 = {
      name: 'Leo',
      type: 'cat'
    };

    shelter.enqueue(catObject);
    shelter.enqueue(dogObject);
    shelter.enqueue(catObject2);

    expect(shelter).toBeDefined();
    expect(shelter.front.value).toEqual(catObject);
    expect(shelter.front.next.value).toEqual(dogObject);
    expect(shelter.back.value).toEqual(catObject2);

  });

  it('Should Remove "Dequeue" Cat or Dog From The Shelter Which Is Has One Animal Depends On FIFO Rule', () => {
    const shelter = new AnimalShelter();

    let catObject = {
      name: 'Sherry',
      type: 'cat'
    };

    shelter.enqueue(catObject);
    shelter.dequeue('cat');

    expect(shelter.front).toBeNull;

  });

  it('Should Remove "Dequeue" All Or Multiple Animals From The Shelter Depends On FIFO Rule', () => {
    const shelter = new AnimalShelter();

    let catObject = {
      name: 'Sherry',
      type: 'cat'
    };

    let dogObject = {
      name: 'Max',
      type: 'dog'
    };

    let catObject2 = {
      name: 'Leo',
      type: 'cat'
    };

    shelter.enqueue(catObject);
    shelter.enqueue(dogObject);
    shelter.enqueue(catObject2);

    shelter.dequeue('cat');
    shelter.dequeue('dog');
    shelter.dequeue('cat');

    expect(shelter.front).toBeNull;

  });


});

/* <-----------------------------Expected failure & Edge Cases--------------------------------> */

describe('Expected failure & Edge Cases', () => {

  it('Should Return Null If "pref" Not Equal To "Cat" Or "Dog" In Dequeue Method', () => {
    const shelter = new AnimalShelter();

    let catObject = {
      name: 'Sherry',
      type: 'cat'
    };

    shelter.enqueue(catObject);

    expect(() => shelter.dequeue('bird')).toThrow('null');
    expect(shelter.front.value).toEqual(catObject);

  });

  it('Should Throw An Error When Enqueue Animal That Is Not Object', () => {
    const shelter = new AnimalShelter();

    expect(() => shelter.enqueue('Cat')).toThrow('Can Not Enqueue : Input Should Be An Object !!');

  });

});
