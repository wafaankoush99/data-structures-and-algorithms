

const repeatedWord = require('./repeatedWords')
const { expect } = require('@jest/globals');


describe('Happy Path :) ', () => {

  describe('Should return the repeated word that found the first word to occur more than once in a string', () => {
    it('First case', () => {
      let str = 'Once upon a time, there was a brave princess who...';
      expect(repeatedWord(str)).toEqual('a');
    });

    it('Second Case', () => {
      let str = 'It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair, we had everything before us, we had nothing before us, we were all going direct to Heaven, we were all going direct the other way – in short, the period was so far like the present period, that some of its noisiest authorities insisted on its being received, for good or for evil, in the superlative degree of comparison only...';
      expect(repeatedWord(str)).toEqual('it');
    });

    it('Third Case', () => {
      let str = 'It was a queer, sultry summer, the summer they electrocuted the Rosenbergs, and I didn’t know what I was doing in New York...';
      expect(repeatedWord(str)).toEqual('summer');
    });
  });
});

describe('Edge Cases & Expected failer', () => {
  it('Should return null if there is no words repeated', () => {
    let str = 'Hello World !';
    expect(repeatedWord(str)).toBeNull;
  });

  it('Should throw an error when the type of input is not a string', () => {
    let str = 5;
    expect(() => { repeatedWord(str) }).toThrow('Input Should be a string!!!');
    expect(() => { repeatedWord(str) }).toThrowError;
  });


});

