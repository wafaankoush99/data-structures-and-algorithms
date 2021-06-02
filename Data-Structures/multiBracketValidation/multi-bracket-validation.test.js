'use strict';

let validation = require('./multi-bracket-validation');
const { expect } = require('@jest/globals');

describe(' Test-1 : Happy Path ==> Should Return True', () => {
  it('Case 1 ', ()=>{
    expect(validation('{}')).toBeTruthy;
  });
  it('Case 2 ', ()=>{
    expect(validation('{}(){}')).toBeTruthy;
  });
  it('Case 3 ', ()=>{
    expect(validation('()[[Extra Characters]]')).toBeTruthy;
  });
  it('Case 4 ', ()=>{
    expect(validation('(){}[[]]')).toBeTruthy;
  });
  it('Case 5 ', ()=>{
    expect(validation('{}{Code}[Fellows](())')).toBeTruthy;
  });

});

describe(' Test-2 : Happy Path ==> Should Return False', () => {
  it('Case 1 ', ()=>{
    expect(validation('[({}]')).toBeFalsy;
  });
  it('Case 2 ', ()=>{
    expect(validation('(](')).toBeFalsy;
  });
  it('Case 3 ', ()=>{
    expect(validation('{(})')).toBeFalsy;
  });
  it('Case 4 ', ()=>{
    expect(validation('{')).toBeFalsy;
  });
  it('Case 5 ', ()=>{
    expect(validation(')')).toBeFalsy;
  });
  it('Case 6 ', ()=>{
    expect(validation('[}')).toBeFalsy;
  });
});

describe(' Test-3 : Edge Case & Expected Failure', () => {
  it('Case 1 ', ()=>{
    expect(()=>validation()).toThrow('Input Should Be A String !!!!!!');
  });
  it('Case 2 ', ()=>{
    expect(()=>validation(2000)).toThrow('Input Should Be A String !!!!!!');
  });
});
