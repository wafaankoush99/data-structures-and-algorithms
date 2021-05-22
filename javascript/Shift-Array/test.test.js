function insertShiftArray(arr, value) {

  let newArr = [];
  for (let i = 0; i < (arr.length / 2); i++) {
    newArr.push(arr[i]);
  }
  newArr.push(value);
  for (var i = 0; i <= (arr.length / 2) - 1; i++) {
    let index = i + (arr.length / 2);
    newArr.push(arr[Math.ceil(index)]);
  }
  return newArr;

}

describe('Testing challenge', () => {
  test('It should return reversed array', () => {
    expect(insertShiftArray([2, 4, 6, -8], 5)).toStrictEqual([2,4,5,6,-8]);
    expect(insertShiftArray([42, 8, 15, 23, 42], 16)).toStrictEqual([42,8,15,16,23,42]);
  });
});
