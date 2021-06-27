# FIFI Animal Shelter

### Methods & Approach & Efficiency 

**repeatedWord(str)**

- Write a function called repeated word that finds the first word to occur more than once in a string
- Arguments: string
- Return: string

<!-- function repeatedWord(str) {
    // console.log(str);
    if (typeof str === 'string') {
        let hashTable = new HashTable(1021);
        let arr = str.match(/\w+/g);
        // console.log(arr);
        let n = arr.length;
        for (let j = 0; j < n; j++) {
            let word = arr[j].toLowerCase();
            if (hashTable.get(word) == word) {
                // console.log(hashTable.get(word));
                let result = hashTable.get(word)
                return result.toString();
            } else {
                hashTable.set(word, word);
            }
        }
        return null;
    }
    else throw new Error ('Input Should be a string!!!')
} -->

```
- create a function called repeatedWord that aeecept a string parameter
- create a new hashTable
- using regular expression split the words in the string into array 
- from the match array result .. loop over the words in the array
- set words to lower case
- compare between word that got from hashtable using get method .. and the word
- return it as a string
- if they're not equal .. using set method set the word to the hash table as key and value
- outside if statement return null ('if there is no word repeated ')

```

## Tests ~

## [Actions](https://github.com/wafaankoush99/data-structures-and-algorithms/actions)

```
 PASS  Data-Structures/hashTable/reapeated-word/repeatedWord.test.js
  Happy Path :)
    Should return the repeated word that found the first word to occur more than once in a string
      ✓ First case (3 ms)
      ✓ Second Case (1 ms)
      ✓ Third Case (1 ms)
  Edge Cases & Expected failer
    ✓ Should return null if there is no words repeated
    ✓ Should throw an error when the type of input is not a string (4 ms)

--------------------------|---------|----------|---------|---------|-------------------
File                      | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s
--------------------------|---------|----------|---------|---------|-------------------
All files                 |   88.06 |    66.67 |   90.91 |   87.88 |
 hashTable                |   84.62 |       50 |      90 |   84.62 |
  hashtable.js            |   84.62 |       50 |      90 |   84.62 | 24-28,83-87
 hashTable/reapeated-word |     100 |      100 |     100 |     100 |
  repeatedWords.js        |     100 |      100 |     100 |     100 |
--------------------------|---------|----------|---------|---------|-------------------
Test Suites: 1 passed, 1 total
Tests:       5 passed, 5 total
Snapshots:   0 total
Time:        1.537 s

```

***


<!-- ## [Board](https://miro.com/welcomeonboard/wpnB93qcd6LRIBGRweEStGoJYXJdZHhB0ppkvcK3phi54s2HonvHONa9VmJMS9yt)

![Untitled (9)](https://user-images.githubusercontent.com/78326110/120239876-edaead80-c267-11eb-87a2-28f3b15dabe0.jpg)
 -->


***

[Pull Request](https://github.com/wafaankoush99/data-structures-and-algorithms/pull/62)



