let treeify = require('treeify');
let { Queue } = require('./stacksAndQueues/stacks-and-queues');

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }
}




//   // console.log(treeify.asTree(myTree, true));
//   // console.log(treeify.asTree(myTree2, true));

//   ////////////

function isSame(tree1, tree2) {
  // if (typeof tree1 === 'object' &&
  //   typeof tree2 === 'object' &&
  //   tree1[0] === undefined &&
  //   tree2[0] === undefined
  // ) {
  //   let arr1 = [];
  //   function traverse(node) {
  //     arr1.push(node.val)
  //     if (node.left) traverse(node.left)
  //     if (node.right) traverse(node.right)
  //   }
  //   traverse(tree1)
  //   let arr2 = [];
  //   function traverse2(node) {
  //     arr2.push(node.val)
  //     if (node.left) traverse2(node.left)
  //     if (node.right) traverse2(node.right)
  //   }
  //   traverse2(tree2)
  //   let m = "" + arr1;
  //   let s = "" + arr2;
  //   console.log(arr1);
  //   console.log(arr2);
  //   if (m === s) { return true }
  //   else { return false }
  // }
  // else throw new Error('Type Of Inputs Should Be A Trees!!')

  if (!tree1 && !tree2) return true
  if ((tree1.val !== tree2.val)) return false
  return isSame(tree1.left, tree2.left) && isSame(tree1.right, tree2.right)
}

let myTree = null;
let a = new Node(1)
let b = new Node(2)
let c = new Node(6)
let d = new Node(7)
let e = new Node(8)
let f = new Node(9)
let g = new Node(54)
let h = new Node(4)
let i = new Node(5)
myTree = new BinaryTree();
myTree.root = a;
a.left = b;
b.left = c;
c.right = d;
d.left = e;
d.right = f;
a.right = g;
g.left = h;
g.right = i;

let myTree2 = null;
let a2 = new Node(1)
let b2 = new Node(2)
let c2 = new Node(6)
let d2 = new Node(7)
let e2 = new Node(8)
let f2 = new Node(9)
let g2 = new Node(54)
let h2 = new Node(4)
let i2 = new Node(5)
myTree2 = new BinaryTree();
myTree2.root = a2;
a2.left = b2;
b2.left = c2;
c2.right = d2;
d2.left = e2;
d2.right = f2;
a2.right = g2;
g2.left = h2;
g2.right = i2;
console.log(isSame(myTree.root, myTree2.root));
