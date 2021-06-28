# Implement a Queue using two Stacks.

### Methods & Approach & Efficiency 

**hash(key)**

- Arguments: key, value
- Returns: nothing
- This method should hash the key, and add the key and value pair to the table, handling collisions as needed.

**Algorithm**

```
    - create a method called hash that accept 1 paramter (key)
    - set a variable (result) equal to 0
    - split the key into array and loop over it and get the asci code for ach charachter
    - return the result which is the sum of the size of the hashtable

```

**set(key, value)**

- Arguments: key
- Returns: Value associated with that key in the table

**Algorithm**

```

    - use hash method to hash the key and put it in a variable
    - check if I already have this key in my table
    - add it to the created linkedist 
    - if I dont have it, create a linkedlist 
    - and store it in that location with my new entry 


```
**get(key)**

- Arguments: key
- Returns: Boolean, indicating if the key exists in the table already.

**Algorithm**

```
    - declare an epmty array
    - hash the key by hash method
    - if the table has values stored 
    - set a temp equal to head value of the linked list
    - loop over the linked list nodes
    - loop over the values of the nodes
    - push these values to the declared array
    - set temp equal to temp.next
    - return the array 
    - if the table has not stored values return null

```
**contains(key)**

- Arguments: key
- Returns: Index in the collection for that key

 **Algorithm**


```
 - hash the key using hash method
 - return true if the table has values stored
 - return null if it is not has values stored 
```

## Tests ~

## [Actions](https://github.com/wafaankoush99/data-structures-and-algorithms/actions)

```

 PASS  Data-Structures/hashTable/hashtable.test.js
  Hash Tables
    ✓ Adding a key/value to your hashtable results in the value being in the data structure (2 ms)
    ✓ Retrieving based on a key returns the value stored (1 ms)
    ✓ Successfully returns null for a key that does not exist in the hashtable (1 ms)
    ✓ Successfully handle a collision within the hashtable
    ✓ Successfully retrieve a value from a bucket within the hashtable that has a collision
    ✓ Successfully hash a key to an in-range value (1 ms)

--------------|---------|----------|---------|---------|-------------------
File          | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s
--------------|---------|----------|---------|---------|-------------------
All files     |   98.08 |      100 |     100 |   98.08 |
 hashtable.js |   98.08 |      100 |     100 |   98.08 | 26
--------------|---------|----------|---------|---------|-------------------
Test Suites: 1 passed, 1 total
Tests:       6 passed, 6 total
Snapshots:   0 total
Time:        1.09 s
```

***


## [Board](https://miro.com/welcomeonboard/REZ1MG9Uc3dFdW13elZER0tUSEk2STl6d1JBaWc0U0IyT0Q1cjFxQU8xNW5WODVWSWsyczBZckcyb0ZkR1RuRnwzMDc0NDU3MzU3MzU4Mjc2Mjk1)

![Hash Table](https://user-images.githubusercontent.com/78326110/123594193-19399f00-d7f8-11eb-9053-cf09c043f1ee.jpg)




***

[Pull Request](https://github.com/wafaankoush99/data-structures-and-algorithms/pull/61)




