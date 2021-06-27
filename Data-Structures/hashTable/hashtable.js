'use strict';

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }



    add(value) {
        const node = new Node(value);
        if (!this.head) {
            this.head = node;
            return;
        }

        let current = this.head;
        while (current.next) {
            current = current.next;
        }
        current.next = node;
    }


}


class HashTable {
    constructor(size) {
        this.size = size;
        this.table = new Array(size);
    }


    hash(key) {

        let result = 0;
        key.split('').forEach(c => {
            result += c.charCodeAt(0);
        });
        return result;
    }


    set(key, value) {
        let hash = this.hash(key);

        if (!this.table[hash]) {
            this.table[hash] = new LinkedList();
        }
        this.table[hash].add({ [key]: value });
    }


    get(key) {
        let arr = [];
        const hashed = this.hash(key);
        if (this.table[hashed]) {
            let temp = this.table[hashed].head;
            while (temp) {

                let obj = Object.values(temp.value);
                obj.map(item => {
                    arr.push(item);
                });
                temp = temp.next;
            }
            return arr;
        } else {
            return null;
        }

    }

    contains(key) {
        let hashed = this.hash(key);
        if (this.table[hashed]) {
            return true;
        } else {
            return null;
        }
    }
}




let myhash = new HashTable(1021);
myhash.set('John', 'Boss');
myhash.set('Cathy', 'The Real Boss');
myhash.set('Zach', 'Kid 1');
myhash.set('Allie', 'Kid 2');
myhash.set('Rosie', 'Dog');
myhash.set('Cat', 'TA');
myhash.set('Justin', 'Student');
myhash.set('Jason', 'Student');
myhash.set('Ben', 'Student');
myhash.set('Timea', 'Student');
myhash.set('Jen', 'Student');
myhash.set('Khalil', 'Student');
myhash.set('Michael', 'Student');
myhash.set('Ovi', 'Student');


// console.log( myhash.hash('test'));


// console.log( myhash.table);

// myhash.table.forEach((data, i) => {
//     console.log(i, data.head.value);
// });



module.exports = {
    HashTable: HashTable,
};