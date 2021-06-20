'use strict';

const sort = require('./selectionsort');
const { expect } = require('@jest/globals');

describe('Happy Path', () => {
    describe('Shoule retirn sorted array in these cases', () => {
        it('Normal case', () => {
            let normalCase = [8, 4, 23, 42, 16, 15];
            expect(sort(normalCase)).toEqual([4, 8, 15, 16, 23, 42])
        })
        it('Reverse-sorted', () => {
            let ReverseSorted = [20, 18, 12, 8, 5, -2];
            expect(sort(ReverseSorted)).toEqual([-2, 5, 8, 12, 18, 20])
        })
        it('Few uniques', () => {
            let FewUniques = [5, 12, 7, 5, 5, 7];
            expect(sort(FewUniques)).toEqual([5, 5, 5, 7, 7, 12])
        })
        it('Nearly-sorted', () => {
            let NearlySorted = [2, 3, 5, 7, 13, 11];
            expect(sort(NearlySorted)).toEqual([2, 3, 5, 7, 11, 13])
        })
    })


})
describe('Edge Cases And Failer Path', () => {
    describe('Should Throw an error if the input is not an array', () => {
        it('String', () => {
            let String = 'string';
            expect(() => sort(String)).toThrowError('The Input Should Be An Array !!!!!')
        })
        it('number', () => {
            let number = 20015;
            expect(() => sort(number)).toThrowError('The Input Should Be An Array !!!!!')
        })
        it('object', () => {
            let number = {
                m: 'm',
                s: 's'
            };
            expect(() => sort(number)).toThrowError('The Input Should Be An Array !!!!!')
        })
        it('no call', () => {
            expect(() => sort()).toThrowError('The Input Should Be An Array !!!!!')
        })
    })
    describe('Should Throw an error if the array doesnt an array of numbers', () => {
        it('String', () => {
            let String = [2, 3, 'hi', 7, 13, 11];
            expect(() => sort(String)).toThrowError('The Type Of Array Should Be Array Of Numbers !!!!')
        })
    })
})
