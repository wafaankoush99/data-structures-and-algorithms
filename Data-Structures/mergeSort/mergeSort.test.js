'use strict';

const sort = require('./mergeSort');
const { expect } = require('@jest/globals');

// [ 4, 8, 15, 16, 23, 42 ]
// [ -2, 5, 8, 12, 18, 20 ]
// [ 5, 5, 5, 7, 7, 12 ]
// [ 2, 3, 5, 7, 11, 13 ]


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
            expect(() => sort(String)).toThrowError('Input Should be An Array !!!')
        })
        it('number', () => {
            let number = 20015;
            expect(() => sort(number)).toThrowError('Input Should be An Array !!!')
        })
        it('object', () => {
            let number = {
                m: 'm',
                s: 's'
            };
            expect(() => sort(number)).toThrowError('Input Should be An Array !!!')
        })
    })
})
