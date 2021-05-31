'use strict';

class Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

class AnimalShelter {
  constructor() {
    this.front = null;
    this.back = null;
  }

  enqueue(animal) {
    if (typeof animal === 'object'){
      if (!this.back) {
        let temp = new Node(animal, null);
        this.front = temp;
        this.back = temp;
        return;
      }
      let temp2 = new Node(animal, null);
      this.back.next = temp2;
      this.back = temp2;
    }
    else {
      throw new Error ('Can Not Enqueue : Input Should Be An Object !!');
    }
  }

  dequeue(pref){

    if (pref === 'cat' || pref === 'dog'){
      if(this.front.value.type === pref){
        this.front = this.front.next;
        if(!this.front){
          this.back = null;
        }
      }
    }
    else{
      throw new Error (null);
    }
  }
}

module.exports = AnimalShelter;
