## Binary Array Challenge 

Write a function called BinarySearch which takes in 2 parameters: a sorted array and the search key. Without utilizing any of the built-in methods available to your language, return the index of the array’s element that is equal to the value of the search key, or -1 if the element is not in the array.

## Approach and Efficacy

 begins by comparing an element in the middle of the array with the target value. If the target value matches the element, its position in the array is returned.If the target value is less than the element, the search continues in the lower half of the array.If the target value is greater than the element, the search continues in the upper half of the array.

[Board](https://miro.com/welcomeonboard/XV5WzC1LBoVeaKcpAqdW74ARdlK5T2f39vecqqVRRmLlVDEF0Pd5iaZcWm2xiRgu)

![](./binary-array.jpg)

## Code 


```js
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
```


