
const {HashTable} = require('../hashtable')

function repeatedWord(str) {
    // console.log(str);
    if (typeof str === 'string') {
        let hashTable = new HashTable(1021);
        let arr = str.match(/\w+/g);
        // let arr = str.split(' ');
        console.log(arr);
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
}


module.exports= repeatedWord;