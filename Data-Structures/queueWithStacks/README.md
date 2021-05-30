# Implement a Queue using two Stacks.

### Methods & Approach & Efficiency 

**enqueue(value)**

 which inserts value into the PseudoQueue, using a first-in, first-out approach.

```
************************************************************************************************
   • create a method called enqueue that accept 1 parameters for value
   • push this value to stack1
************************************************************************************************
```

**dequeue()**

 which extracts a value from the PseudoQueue, using a first-in, first-out approach.

```
************************************************************************************************
   • create a method called dequeue
   • if the stack one is empty throw an error
   • iterate over stack1 and push every value to the second stack in the PseudoQueue
   • declare the popped value in a variable
   • then iterate over the second stack to return its values to the first stack without popped value
   • return popped value
************************************************************************************************

```

## Tests ~

## [Actions](https://github.com/wafaankoush99/data-structures-and-algorithms/actions)

```

 Test-1 : Happy Path
    ✓ Should Successfully Push A Value To Stack1
    ✓ Should Successfully Push Multiple Values To Stack1
    ✓ Should Successfully Extract "Dequeue" A Value Using FIFO
    ✓ Should Successfully Extract "Dequeue" Multiple Values Using FIFO
  Test-2 : Expected failure & Edge Cases
    ✓ Calling Dequeue On Empty Queue Raises Exception

----------------------|---------|----------|---------|---------|-------------------
File                  | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s
----------------------|---------|----------|---------|---------|-------------------
All files             |   87.88 |    66.67 |   88.89 |   87.88 |
 queue-with-stacks.js |   87.88 |    66.67 |   88.89 |   87.88 | 28-32,47
----------------------|---------|----------|---------|---------|-------------------
Test Suites: 1 passed, 1 total
Tests:       5 passed, 5 total

```

***


## [Board](https://miro.com/welcomeonboard/JGxIOmWAlMwH5RnG7tYz7cKHLbnB0Dap3Z4wsAb0OiR3lw0LALxUHhJdOSh7kQHO)

![Untitled (8)](https://user-images.githubusercontent.com/78326110/120112548-faa3a200-c17e-11eb-8146-76ab4eff7a37.jpg)


***

[Pull Request](https://github.com/wafaankoush99/data-structures-and-algorithms/pull/50)




