'use strict';

/* ------------------------------------------------------------------------------------------------
CHALLENGE 1 - Review

Write a function called sortStarWarsCharacters that sorts the characters in the starWarsPeople array by height from tallest to shortest.
------------------------------------------------------------------------------------------------ */

let starWarsPeople = [
  {
    'name': 'C-3PO',
    'height': '167',
    'eye_color': 'yellow'
  },
  {
    'name': 'Luke Skywalker',
    'height': '172',
    'eye_color': 'blue'
  },
  {
    'name': 'R2-D2',
    'height': '96',
    'eye_color': 'red'
  }
];

const sortStarWarsCharacters = (starWarsArr) => {
  // Solution code here...

  starWarsArr.sort(function (a, b) {
    // console.log(a.height.length)
    if (a.height.length < b.height.length) return 1;
    else if (a.height < b.height) return 1;
    else if (a.height > b.height) return -1;
    else return 0;
  });
  return starWarsArr;
};


/* ------------------------------------------------------------------------------------------------
CHALLENGE 2

Write a function named removeThree that takes an index and an array. The function should removes three items in the array starting with the value at the index.
------------------------------------------------------------------------------------------------ */

const removeThree = (idx, arr) => {
  // Solution code here...
  // console.log(arr);
  arr.splice(idx, 3);
  // console.log(arr);
  return arr;
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 3

Write a function named joinArray that takes an array and joins all of the elements together in one string on a space.
------------------------------------------------------------------------------------------------ */

const joinArray = (arr) => {
  // Solution code here...
  let y = arr.join(' ');
  return y;
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 4

Write a function named howMuchPencil that takes in a string, as written on the side of a pencil.

As you sharpen the pencil, the string will become shorter and shorter, starting by removing the first letter.

Your function should use slice within a loop and return an array of each successive string result from losing letters to the sharpener, until nothing is left.

For example, if the input is 'Welcome', the output will be:
['Welcome', 'elcome', 'lcome', 'come', 'ome', 'me', 'e', ''].
------------------------------------------------------------------------------------------------ */

const howMuchPencil = (str) => {
  let result = [];
  // Solution code here...
  for (let i = 0; i <= str.length; i++) {
    let y = str.slice(i);
    // console.log(y);
    result.push(y);
  }
  return result;
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 5

Write a function name wordsToCharList that, given a string as input, returns a new array where every element is a character of the input string.

For example, wordsToCharList('gregor') returns ['g','r','e','g','o','r'].
------------------------------------------------------------------------------------------------ */

const wordsToCharList = (arr) => {
  // Solution code here...
  let y = arr.split('');
  return y;

};


/* ------------------------------------------------------------------------------------------------
CHALLENGE 6

You are making a grocery list for ingredients needed in the gruffalo crumble recipe, below. Rather than taking the entire recipe, you only want a list of the item names.

Write a function named listFoods that takes in the recipe and returns a new array of the food items without any amount or units. Just the name. For example, '1 cup flour' will return 'flour'.

Use slice for this function, maybe more than once. The Array.indexOf() method may also be helpful.

Do not use split for this function.
------------------------------------------------------------------------------------------------ */

const gruffaloCrumble = {
  name: 'How to make a Gruffalo Crumble',
  ingredients: [
    '1 medium-sized Gruffalo', // remove 1st and 2nd items
    '8 pounds oats',
    '2 pounds brown sugar',
    '4 pounds flour',
    '2 gallons pure maple syrup',
    '16 cups chopped nuts',
    '1 pound baking soda',
    '1 pound baking powder',
    '1 pound cinnamon',
    '6 gallons melted butter',
    '2 gallons fresh water',
  ],
  steps: [
    'Pre-heat a large oven to 375',
    'De-prickle the gruffalo',
    'Sprinkle with cinnamon, sugar, flour, and nuts',
    'Mix until evenly distributed',
    'Grease a 3-foot x 3-foot casserole dish',
    'Combine gruffalo compote with water to maintain moisture in the oven',
    'Fold together remaining ingredients to make the crisp',
    'Spread the crisp evenly over the gruffalo mixture',
    'Bake for 12-15 hours',
  ]
};



const listFoods = (recipe) => {
  let result = [];
  // Solution code here...
  let o = recipe.ingredients;
  // console.log(o);
  o.forEach(function (it) {
    // console.log(it)
    let x = it.substr(it.indexOf(' ') + 1);
    // console.log(x);
    let x2 = x.substr(x.indexOf(' ') + 1);
    // console.log(x2);
    result.push(x2);
  });
  return result;

};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 7 - Stretch Goal

Write a function named splitFoods that uses split to produce the same output as Challenge 3.

You may also use other string or array methods.
------------------------------------------------------------------------------------------------ */

const splitFoods = (recipe) => {
  let result = [];
  // Solution code here...
  let o = recipe.ingredients;
  // console.log(o);
  o.forEach(function (it) {
    // console.log(it);
    let u = it.split(' ');
    // console.log(u);
    u.splice(0, 2);
    // console.log(x);
    // console.log(u)
    let z = u.join(' ');
    // console.log(z);
    result.push(z);
  });
  return result;
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 8 - Stretch Goal

Use the same recipe from Challenge 3, above.

Write a function named stepAction that takes in the recipe and extracts the action verbs from the steps. Fortunate for you, the action verbs are the first word of each action.

Return a new array containing just the verbs. For example, ['Mix until evenly distributed'] returns ['Mix'].
------------------------------------------------------------------------------------------------ */

const stepActions = (recipe) => {
  let result = [];
  // Solution code here...
  let o = recipe.steps;
  o.forEach(function (it) {
    let u = it.split(' ');
    let x = u.splice(0, 1);
    x.join('');
    x.forEach(function (it) {
      result.push(it);
    });
  });
  return result;
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 9 - Stretch Goal

Write a function named removeEvenValues that, given an array of integers as input, deletes all even values from the array, leaving no 'gaps' behind.

The array should be modified in-place.

For example:
  const integers = [1, 2, 3, 4, 5, 6];
  removeEvenValues(integers);
  console.log(integers) will print [1, 3, 5]
------------------------------------------------------------------------------------------------ */

const removeEvenValues = (arr) => {
  // Solution code here...
  for (let i = 0; i < arr.length; i++) {
    while (arr[i] % 2 === 0) {
      arr.splice(i, 1);
    }
  }
  return arr;
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 10 - Stretch Goal

Write a function named removeLastCharacters that takes in a string and a number. The numberOfCharacters argument determines how many characters will be removed from the end of the string. Return the resulting string.

If the numberOfCharacters argument is greater than the length of the input string, the function should return an empty string.

If the numberOfCharacters argument input is a negative number, the function should return the input string without any changes.

For example:
removeLastCharacters('Gregor', 2) returns 'Greg'
removeLastCharacters('Gregor', -2) returns 'Gregor'
removeLastCharacters('Gregor', 9) returns ''
------------------------------------------------------------------------------------------------ */

const removeLastCharacters = (str, numberOfCharacters) => {
  // Solution code here...
  // console.log(str)
  if (numberOfCharacters > 0) {
    let y = str.split('');
    // console.log(y);
    let x = y.slice(0, -numberOfCharacters);
    // console.log(x)
    let v = x.join('');
    return v;
  }
  if (numberOfCharacters < 0) { return str; }
  if (numberOfCharacters === 0) { return ''; }
};



/* ------------------------------------------------------------------------------------------------
CHALLENGE 11 - Stretch Goal

Write a function named totalSumCSV that, given a string of comma-separated values (CSV) as input. (e.g. "1,2,3"), returns the total sum of the numeric values (e.g. 6).
------------------------------------------------------------------------------------------------ */

const totalSumCSV = (str) => {

  let y = str.split(',');
  let total = 0;
  let numArr = [];
  y.forEach(function (it, i) {
    let o = parseInt(y[i]);
    numArr.push(o);

  });
  let t = numArr.reduce((a, b) => a + b, 0);
  total = t;
  return total;

};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 12 - Stretch Goal

Write a function named removeVowels that takes in a string and returns a new string where all the vowels of the original string have been removed.

For example, removeVowels('gregor') returns 'grgr'.
------------------------------------------------------------------------------------------------ */

const removeVowels = (str) => {
  // Solution code here...
  let y = str.replace(/['a','e','i','o','u']/gi, '');
  return y;
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 13 - Stretch Goal

Write a function named extractVowels that takes in a string and returns an array where the first element is the original string with all the vowels removed, and the second element is a string of all the vowels that were removed, in alphabetical order.

For example, extractVowels('gregor') returns ['grgr', 'eo'].

Similarly, extractVowels('The quick brown fox') returns ['Th qck brwn fx', 'eioou']
------------------------------------------------------------------------------------------------ */


const extractVowels = (str) => {
  // Solution code here...
  let newArr = [];
  let y = str.replace(/['a','e','i','o','u']/gi, '');
  newArr.push(y);
  let reg = /['a','e','i','o','u']/g;
  let s = str.match(reg);
  // console.log(s)
  s.sort(function (a, b) {
    if (a < b) return -1;
    else if (a > b) return 1;
    else return 0;
  });
  // console.log(s)

  let n = s.join('');
  newArr.push(n);
  // console.log(newArr)
  return newArr;
};
/* ------------------------------------------------------------------------------------------------
TESTS

All the code below will verify that your functions are working to solve the challenges.

DO NOT CHANGE any of the below code.

Run your tests from the console: jest challenges-05.test.js

------------------------------------------------------------------------------------------------ */

describe('Testing challenge 1', () => {
  test('It should sort the star wars characters by height from tallest to shortest', () => {
    expect(sortStarWarsCharacters(starWarsPeople)[0]['name']).toStrictEqual('Luke Skywalker');
    expect(sortStarWarsCharacters(starWarsPeople)[2]['height']).toStrictEqual('96');
  });
});

describe('Testing challenge 2', () => {
  test('It should return an array with three items removed', () => {
    expect(removeThree(2, [1, 2, 3, 4, 5, 6, 7, 8])).toStrictEqual([1, 2, 6, 7, 8]);
  });
});

describe('Testing challenge 3', () => {
  test('It should join an array', () => {
    expect(joinArray(['hello', '301', 'students'])).toStrictEqual('hello 301 students');
  });
});

describe('Testing challenge 4', () => {
  test('It should return a list of shortening words', () => {
    expect(howMuchPencil('Welcome')).toStrictEqual(['Welcome', 'elcome', 'lcome', 'come', 'ome', 'me', 'e', '']);
    expect(howMuchPencil('Welcome').length).toStrictEqual(8);
    expect(howMuchPencil('')).toStrictEqual(['']);
    expect(howMuchPencil('abc')).toStrictEqual(['abc', 'bc', 'c', '']);
  });
});

describe('Testing challenge 5', () => {
  test('It should return an array of individual letters', () => {
    expect(wordsToCharList('Gregor')).toStrictEqual(['G', 'r', 'e', 'g', 'o', 'r']);
    expect(wordsToCharList('Gregor').length).toStrictEqual(6);
    expect(wordsToCharList('hooray')).toStrictEqual(['h', 'o', 'o', 'r', 'a', 'y']);
    expect(wordsToCharList('')).toStrictEqual([]);
  });
});

describe('Testing challenge 6', () => {
  test('It should return a list of foods', () => {
    expect(listFoods(gruffaloCrumble)).toStrictEqual(['Gruffalo', 'oats', 'brown sugar', 'flour', 'pure maple syrup', 'chopped nuts', 'baking soda', 'baking powder', 'cinnamon', 'melted butter', 'fresh water']);
    expect(listFoods(gruffaloCrumble).length).toStrictEqual(11);
  });
});

describe('Testing challenge 7', () => {
  test('It should return a list of foods', () => {
    expect(splitFoods(gruffaloCrumble)).toStrictEqual(['Gruffalo', 'oats', 'brown sugar', 'flour', 'pure maple syrup', 'chopped nuts', 'baking soda', 'baking powder', 'cinnamon', 'melted butter', 'fresh water']);
  });
});

describe('Testing challenge 8', () => {
  test('It should return a list of recipe steps', () => {
    expect(stepActions(gruffaloCrumble)).toStrictEqual(['Pre-heat', 'De-prickle', 'Sprinkle', 'Mix', 'Grease', 'Combine', 'Fold', 'Spread', 'Bake']);
    expect(stepActions(gruffaloCrumble).length).toStrictEqual(9);
  });
});

describe('Testing challenge 9', () => {
  test('It should remove the even numbers from the array', () => {
    let list = [1, 2, 3, 4, 5, 6];
    removeEvenValues(list);
    expect(list).toStrictEqual([1, 3, 5]);

    list = [6, 3, 19, 43, 12, 66, 43];
    removeEvenValues(list);
    expect(list).toStrictEqual([3, 19, 43, 43]);
    expect(list.length).toStrictEqual(4);
  });
});

describe('Testing challenge 10', () => {
  test('It should shorten the string based on the first argument', () => {
    expect(removeLastCharacters('Gregor', 2)).toStrictEqual('Greg');
    expect(removeLastCharacters('Gregor', 2).length).toStrictEqual(4);
  });
  test('It should return the complete string when passed a negative number', () => {
    expect(removeLastCharacters('hello', -1)).toStrictEqual('hello');
    expect(removeLastCharacters('wowow', -700)).toStrictEqual('wowow');
  });
  test('It should return an empty string when called with a number larger than the string length', () => {
    expect(removeLastCharacters('hello', 12)).toStrictEqual('');
    expect(removeLastCharacters('', 1)).toStrictEqual('');
    expect(removeLastCharacters('a', 1)).toStrictEqual('');
  });
});

describe('Testing challenge 11', () => {
  test('It should add up the numbers contained within the string', () => {
    expect(totalSumCSV('1,4,5,7,2')).toStrictEqual(19);
    expect(totalSumCSV('147')).toStrictEqual(147);
  });
});

describe('Testing challenge 12', () => {
  test('It should return the string without vowels', () => {
    expect(removeVowels('gregor')).toStrictEqual('grgr');
    expect(removeVowels('gregor').length).toStrictEqual(4);
    expect(removeVowels('asdf')).toStrictEqual('sdf');
    expect(removeVowels('why')).toStrictEqual('why');
  });
});

describe('Testing challenge 13', () => {
  test('It should return the string without vowels', () => {
    expect(extractVowels('gregor')).toStrictEqual(['grgr', 'eo']);
    expect(extractVowels('gregor').length).toStrictEqual(2);

    expect(extractVowels('The quick brown fox')).toStrictEqual(['Th qck brwn fx', 'eioou']);
  });
});
