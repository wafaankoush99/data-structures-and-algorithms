/**
 * This function Takes an array and return the index of the array’s
 * element that is equal to the value of the search key,
 *  or -1 if the element is not in the array.
 * @param {array} arr => sorted array of numbers
 * @param {number} key => search key
 * @returns {number} => the index of the key
 */

function binarySearch(arr, key){
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let i = Math.floor((start + end) / 2);

    if (arr[i] === key) {
      return i;
    } else if (arr[i] < key) {
      start = i + 1;
    } else {
      end = i - 1;
    }
  }
  return -1;
}


describe('Testing challenge', () => {
  test('It should return reversed array', () => {
    expect(binarySearch([4, 8, 15, 16, 23, 42], 15)).toStrictEqual(2);
    expect(binarySearch([-131, -82, 0, 27, 42, 68, 179], 42)).toStrictEqual(4);
    expect(binarySearch([11, 22, 33, 44, 55, 66, 77], 90)).toStrictEqual(-1);
    expect(binarySearch([1, 2, 3, 5, 6, 7], 4)).toStrictEqual(-1);
  });
});
