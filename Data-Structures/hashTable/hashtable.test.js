'use strict';

const HashTable = require('./hashtable.js');
const { expect } = require('@jest/globals');

describe('Hash Tables', () => {

    it('Adding a key/value to your hashtable results in the value being in the data structure', () => {
        let myHash = new HashTable(3000);
        let obj = {
            'key': 'wafa'
        };
        myHash.set('key', 'wafa');
        let hashed = myHash.hash('key');
        expect(myHash.table[hashed].head.value).toEqual(obj);
    });

    it('Retrieving based on a key returns the value stored', () => {
        let myHash = new HashTable(3000);
        let arr = ['wafa', 'dana'];
        myHash.set('key', 'wafa');
        myHash.set('key', 'dana');
        expect(myHash.get('key')).toEqual(arr);
        expect(myHash.get('non')).toBeNull;
    });

    it('Successfully returns null for a key that does not exist in the hashtable', () => {
        let myHash = new HashTable(3000);
        myHash.set('key', 'wafa');
        myHash.set('key', 'dana');
        expect(myHash.contains('key')).toBeTruthy();
        expect(myHash.contains('non')).toBeNull;

    });

    it('Successfully handle a collision within the hashtable', () => {
        let myHash = new HashTable(3000);
        myHash.set('key', 'dana');
        myHash.set('yek', 'dana');
        let hashed = myHash.hash('key');
        expect(myHash.table[hashed].head.value).toEqual({ 'key': 'dana' });
        expect(myHash.table[hashed].head.next.value).toEqual({ 'yek': 'dana' });
    });

    it('Successfully retrieve a value from a bucket within the hashtable that has a collision', () => {
        let myHash = new HashTable(3000);
        myHash.set('key', 'dana');
        myHash.set('yek', 'dana');
        let array = myHash.get('key');
        expect(array[0]).toEqual('dana');
        expect(array[1]).toEqual('dana');
    });

    it('Successfully hash a key to an in-range value', () => {
        let myHash = new HashTable(3000);
        let hashed = myHash.hash('key');
        expect(hashed).toBeLessThanOrEqual(599 % myHash.size);
    });

});