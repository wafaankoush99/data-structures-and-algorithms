
const LinkedList = require('../linkedList/linkedList');


function zipLists(ll1, ll2) {
  let link = new LinkedList ();
  let temp1 = ll1.head;
  let temp2 = ll2.head;
  while (temp1 || temp2){
    if (temp1) {
      link.append(temp1.value);
      temp1 = temp1.next;
    }
    if (temp2){
      link.append (temp2.value);
      temp2 = temp2.next;
    }
  }
  return link;
}

module.exports = zipLists;
