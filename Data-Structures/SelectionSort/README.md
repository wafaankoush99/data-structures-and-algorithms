# Selection Sort

### Methods & Approach & Efficiency 

**selectionSort(arr)**

Selection Sort is a sorting algorithm that traverses the array multiple times as it slowly builds out the sorting sequence.
The traversal keeps track of the minimum value and places it in the front of the array which should be incrementally sorted.

```
- create a function called selectionsort that accept one parameter that accept an array
- if the input is an array of numbers
- create instead for loop (2D)
- declare a variable called minimum that equal to index
- in the second for loop
- set the min equal to j
- if min and i are not equal declare a temp variable that equal to the smallest value in the array arr[min]
- set the arr[min] equal to arr[i]
- and the arr[i] equal to temp
- then return altered array
- throw error if the input is not an array

```

## Tests ~

## [Actions](https://github.com/wafaankoush99/data-structures-and-algorithms/actions)

```
 PASS  Data-Structures/SelectionSort/selectionssort.test.js
  Happy Path
    Shoule retirn sorted array in these cases
      ✓ Normal case (3 ms)
      ✓ Reverse-sorted
      ✓ Few uniques (1 ms)
      ✓ Nearly-sorted
  Edge Cases And Failer Path
    Should Throw an error if the input is not an array
      ✓ String (4 ms)
      ✓ number
      ✓ object (1 ms)
      ✓ no call
    Should Throw an error if the array doesnt an array of numbers
      ✓ String (1 ms)

------------------|---------|----------|---------|---------|-------------------
File              | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s
------------------|---------|----------|---------|---------|-------------------
All files         |     100 |      100 |     100 |     100 |
 selectionsort.js |     100 |      100 |     100 |     100 |
------------------|---------|----------|---------|---------|-------------------
Test Suites: 1 passed, 1 total
Tests:       9 passed, 9 total
Snapshots:   0 total

```

***


## [Board](https://miro.com/welcomeonboard/aDRqZjExdFU5cUI2ME5pRlNCb25mU2xvVEFDN3laOTVqOGk1TWFaRWt3eW5ZSjdvbzJjVVg1SmMxQkVrNWI3T3wzMDc0NDU3MzU3MzU4Mjc2Mjk1)





***

[Pull Request 1](https://github.com/wafaankoush99/data-structures-and-algorithms/pull/56)





