
const LinkedList = require('../linkedList/linkedList');


function zipList(list1, list2) {

  let current1 = list1.head;
  let current2 = list2.head;

  while (current1.next !== null && current2.next !== null) {
    let temp1 = current1.next;
    let temp2 = current2.next;

    current1.next = current2;
    current2.next = temp1;

    current1 = temp1;
    current2 = temp2;

  }

  if (current1.next === null && current2 !== null) {
    current1.next = current2;
  }

  // if (current2.next === null && current1 !== null) {
  //   current2.next = current1;
  // }


  // list2.length > list1
  if (current1.next === null && current2.next !== null ) {
    current2.next = current1;
  }

  // list1.length > list2
  if (current2.next === null && current1.next !== null) {
    current1.next = current2;
    // current1.next;
    // console.log(current1.next)
    current2 = current1.next;
  }

  return list1;

}
module.exports = zipList;
