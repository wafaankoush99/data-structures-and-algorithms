# FIFI Animal Shelter

### Methods & Approach & Efficiency 

**enqueue(animal)**

 enqueue(animal): adds animal to the shelter. animal can be either a dog or a cat object.

```
- first thing make sure the animal value is an object
- then if the queue is empty
- declare a temporary variable point to null
- set this temp to the front and the back of the queue
- return out
- if the queue not empty set a new temp and add its value to the end of the queue
- throw an error if the input value isn't object

```

**dequeue()**

dequeue(pref): returns either a dog or a cat. If pref is not "dog" or "cat" then return null.
```

- set a parameter called (pref) to dequeue method which will accept only string which is "cat" or "dog"
- if its value equal to "cat" or "dog"
- check the property of the key ==> type .. from the front value
- if it is equal to "pref" set this front equal to the next node "dequeue"
- if this front equal to null .. set the back also equal to null
- return null if "pref" not equal to "cat" or "dog"


```

## Tests ~

## [Actions](https://github.com/wafaankoush99/data-structures-and-algorithms/actions)

```
 PASS  Data-Structures/fifoAnimalShelter/fifo-animal-shelter.test.js (13.985 s)
  Happy Path
    ✓ Should Add "Enqueue" Animal To An Empty Shelter (3 ms)
    ✓ Should Add "Enqueue" Multiple Animals To A Shelter (1 ms)
    ✓ Should Remove "Dequeue" Cat or Dog From The Shelter Which Is Has One Animal Depends On FIFO Rule
    ✓ Should Remove "Dequeue" All Or Multiple Animals From The Shelter Depends On FIFO Rule
  Expected failure & Edge Cases
    ✓ Should Return Null If "pref" Not Equal To "Cat" Or "Dog" In Dequeue Method (20 ms)
    ✓ Should Throw An Error When Enqueue Animal That Is Not Object (1 ms)

------------------------|---------|----------|---------|---------|-------------------
File                    | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s
------------------------|---------|----------|---------|---------|-------------------
All files               |     100 |    91.67 |     100 |     100 |
 fifo-animal-shelter.js |     100 |    91.67 |     100 |     100 | 36
------------------------|---------|----------|---------|---------|-------------------
Test Suites: 1 passed, 1 total
Tests:       6 passed, 6 total
Snapshots:   0 total
Time:        33.448 s

```

***


## [Board](https://miro.com/welcomeonboard/wpnB93qcd6LRIBGRweEStGoJYXJdZHhB0ppkvcK3phi54s2HonvHONa9VmJMS9yt)

![Untitled (9)](https://user-images.githubusercontent.com/78326110/120239876-edaead80-c267-11eb-87a2-28f3b15dabe0.jpg)



***

[Pull Request](https://github.com/wafaankoush99/data-structures-and-algorithms/pull/51)



