'use strict';

function multiBracketValidation(input) {

  if (typeof input === 'string') {

    /* ----------------------Test Opened and Closed Brackets If They Are Equal-------------------*/

    let opened = ['{', '[', '('];
    let closed = ['}', ']', ')'];

    for (let i = 0; i < 3; i++) {
      if (input.includes(opened[i]) || input.includes(closed[i])) {
        if ((input.includes(opened[i]) && !input.includes(closed[i])) ||
                    ((input.includes(closed[i]) && !input.includes(opened[i])))) {
          return false;
        }
      }

    }



    /* -----------If There is No End Bracket and its Open Bracket Between Two Brackets-----------*/

    let arr = [];
    let testBraces = input.match(/\(([^)]+)\)/ || /\{([^)]+)\}/ || /\[([^)]+)\]/);

    if (testBraces) {
      arr.push(testBraces[1]);
      let resultArr = arr.join(' ').split('');

      let bracesArr = resultArr.filter(val => {
        if (val === '{' || val === '(' || val === '[' ||
                    val === '}' || val === ')' || val === ']')
          return val;
      });
      if (bracesArr.length % 2 === 0) { return true; }
      else return false;

    }
    else return true;


  }

  /* ----------------------Edge Case & Expected Failure-------------------*/

  else throw new Error('Input Should Be A String !!!!!!');



}

module.exports = multiBracketValidation;
