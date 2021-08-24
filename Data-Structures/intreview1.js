// //////////////////////////////////////////////////////////////////
// ///////           Compare two trees                      ////////
// /////////////////////////////////////////////////////////////////
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

//////

let myTree2 = null;
let a2 = new Node(1)
let b2 = new Node(2)
let c2 = new Node(6)
let d2 = new Node(7)
let e2 = new Node(8)
let f2 = new Node(9)
let g2 = new Node(55)
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

//   // console.log(treeify.asTree(myTree, true));
//   // console.log(treeify.asTree(myTree2, true));

//   ////////////

// function isSame(tree1, tree2) {
//   if (typeof tree1 === 'object' &&
//     typeof tree2 === 'object' &&
//     tree1[0] === undefined &&
//     tree2[0] === undefined
//   ) {
//     let arr1 = [];
//     function traverse(node) {
//       arr1.push(node.val)
//       if (node.left) traverse(node.left)
//       if (node.right) traverse(node.right)
//     }
//     traverse(tree1)
//     let arr2 = [];
//     function traverse2(node) {
//       arr2.push(node.val)
//       if (node.left) traverse2(node.left)
//       if (node.right) traverse2(node.right)
//     }
//     traverse2(tree2)
//     let m = "" + arr1;
//     let s = "" + arr2;
//     if (m === s) { return true }
//     else { return false }
//   }
//   else throw new Error('Type Of Inputs Should Be A Trees!!')
// }


// console.log(isSame(myTree, myTree2));


function identical(n1, n2) {
  function isSame(p, q) {
    if (!p && !q) return true;
    if (p.val !== q.val) return false
    return isSame(p.left, q.left) && isSame(p.right, q.right)
  }
  return isSame;
}
// return identical(p.root, q.root)

console.log(identical(myTree, myTree2));
//////////////////////////////////////////////////////////////////
///////           Mirror                                 ////////
/////////////////////////////////////////////////////////////////



// let myTree3 = null;
// let a = new Node(1)
// let b = new Node(2)
// let c = new Node(2)
// let d = new Node(3)
// let e = new Node(4)
// let f = new Node(4)
// let g = new Node(3)

// let h = new Node(5)
// let i = new Node(6)
// let j = new Node(7)
// let k = new Node(8)
// let l = new Node(8)
// let m = new Node(7)
// let n = new Node(6)
// let o = new Node(5)

// myTree3 = new BinaryTree();
// myTree3.root = a;

// a.left = b //2
// a.right = c //2
// b.left = d // 3
// b.right = e //4
// c.left = f //4
// c.right = g //3

// d.left = h
// d.right = i
// e.left = j
// e.right = k
// f.left = l
// f.right = m
// g.left = n
// g.right = o

// ////////////

// function mirror(tree) {
//   let tree1 = tree;
//   let result1 = []
//   let tree2 = tree;
//   let result2 = []

//   function reverse(node) {
//     let temp;
//     if (node.left) {
//       temp = node.left;
//       node.left = node.right
//       reverse(node.left)
//     }
//     if (node.right) {
//       node.right = temp;
//       reverse(node.right)
//     }
//   }
//   reverse(tree2.root.right)

//   function traverse2(node) {
//     result2.push(node.value)
//     if (node.left) { traverse2(node.left) }
//     if (node.right) { traverse2(node.right) }
//   }
//   traverse2(tree2.root.right)

//   function traverse1(node) {
//     result1.push(node.value)
//     if (node.left) { traverse1(node.left) }
//     if (node.right) { traverse1(node.right) }
//   }
//   traverse1(tree1.root.left)

//   if (result1 + "" === result2 + "") { return true }
//   else return false;

// }


// console.log(mirror(myTree3));


//////////////////////////////////////////////////////////////////
///////          claculate lefts and rights               ////////
/////////////////////////////////////////////////////////////////

// let myTree4 = null;

// let a = new Node(3)
// let b = new Node(9)
// let c = new Node(20)
// let d = new Node(15)
// let e = new Node(7)
// let f = new Node(10)
// myTree4 = new BinaryTree();

// myTree4.root = a;
// a.left = b;
// a.right = c;
// c.left = d;
// c.right = e;
// e.left = f;

// function numOlefts&rights(tree) {
//   let count1 = 1;
//   let count2 = 1;
//   // let countAllNodes = 0;

//   function traverse(node) {
//     if (node.left) {
//       count1++;
//       traverse(node.left)
//     }
//     if (node.right) {
//       count2++;
//       traverse(node.right)
//     }
//     // countAllNodes++;
//   }
//   traverse(tree.root)

//   // console.log(countAllNodes);
//   // console.log(count1, count2);

//   if (count1 >= count2) { return count1 }
//   else if (count2 >= count1) { return count2 }

// }

// function numOlefts&rights(tree) {
//   let result = []
//   let c1 = 1;
//   let c2 = 1;
//   let queue = new Queue()
//   queue.enqueue(tree.root)
//   while (queue.front) {
//     let temp = queue.dequeue()
//     result.push(temp.value)
//     if (temp.left) {
//       c1++
//       queue.enqueue(temp.left)
//     }
//     if (temp.right) {
//       c2++
//       queue.enqueue(temp.right)
//     }
//   }
//   // console.log(c1, c2);
//   if (c1 >= c2) { return c1 }
//   else if (c2 >= c1) { return c2 }

// }

// console.log(numOlefts&rights(myTree4));


//////////////////////////////////////////////////////////////////
///////           convert sorted arr to BST               ////////
/////////////////////////////////////////////////////////////////


function sortedArrayToBST(nums) {
  let mid = Math.floor(nums.length / 2)
  let root;
  let left = []
  let right = []
  for (let i = 0; i < nums.length; i++) {
    if (i === mid) root = new Node(nums[i])
    if (i < mid) left.push(nums[i])
    if (i > mid) right.push(nums[i])
  }
  root.left = sortedArrayToBST(left)
  root.right = sortedArrayToBST(right)
  return root
}


// myArr = [-10, -3, 0, 5, 9]
// console.log(sortedArrayToBST(myArr));


//////////////////////////////////////////////////////////////////
///////           MaxDepth                               ////////
/////////////////////////////////////////////////////////////////

// let myTree4 = null;

// let a = new Node(3)
// let b = new Node(9)
// let c = new Node(20)
// let d = new Node(15)
// let e = new Node(7)
// let f = new Node(10)
// myTree4 = new BinaryTree();

// myTree4.root = a;
// a.left = b;
// a.right = c;
// c.left = d;
// c.right = e;
// e.left = f;

// function maxDepth(tree) {
//   if (!tree.root) return 0;
//   let queue = [tree.root];
//   let max = 0;
//   while (queue.length > 0) {
//     let len = queue.length;
//     max++;
//     for (let i = 0; i < len; i++) {
//       let node = queue.shift();
//       if (node.left) queue.push(node.left);
//       if (node.right) queue.push(node.right);
//     }
//   }
//   return max;
// }

// function minDepth(tree) {
//   if (!tree.root) return 0;
//   let depth = 1;
//   let queue = [tree.root];
//   while (queue.length) {
//     let levelSize = queue.length;
//     for (let i = 0; i < levelSize; i++) {
//       let currentNode = queue.shift();
//       if (!currentNode.left && !currentNode.right) return depth
//       if (currentNode.left) queue.push(currentNode.left);
//       if (currentNode.right) queue.push(currentNode.right);
//     }
//     depth++
//   }
// }

// console.log(maxDepth(myTree4));
// console.log(minDepth(myTree4));

// ////////////////////////////////////////////////////////////
// /          isBalanced                              ////////
// ///////////////////////////////////////////////////////////

// let myTree4 = null;

// let a = new Node(3)
// let b = new Node(9)
// let c = new Node(20)
// let d = new Node(15)
// let e = new Node(7)
// // let f = new Node(10)
// myTree4 = new BinaryTree();

// myTree4.root = a;
// a.left = b;
// a.right = c;
// c.left = d;
// c.right = e;
// // e.left = f;

// function isBalanced(tree) {

//   let max = 0;
//   let min = 1;
//   let minn;
//   let queue = [tree.root];
//   while (queue.length) {
//     len = queue.length;
//     max++
//     for (let i = 0; i < len; i++) {
//       let temp = queue.shift()
//       if (!temp.left && !temp.right) minn = min;
//       if (temp.left) queue.push(temp.left)
//       if (temp.right) queue.push(temp.right)
//     }
//     if (!minn) { min++ }

//   }
//   if (max === min || max - min === 1) return true
//   else return false;

// }

// console.log(isBalanced(myTree4));

// ////////////////////////////////////////////////////////////
// /         Path Sum                                 ////////
// ///////////////////////////////////////////////////////////

// let myTree4 = null;

// let a = new Node(5)
// let b = new Node(4)
// let c = new Node(8)
// let d = new Node(11)
// let e = new Node(13)
// let f = new Node(4)
// let g = new Node(7)
// let h = new Node(2)
// let i = new Node(1)

// myTree4 = new BinaryTree();

// myTree4.root = a;
// a.left = b;
// a.right = c;
// b.left = d;
// d.left = g;
// d.right = h;
// c.left = e;
// c.right = f;
// f.right = i;


// var hasPathSum = function (root, targetSum) {
//   if (!root) return false;
//   let queue = [root];

//   while (queue.length > 0) {
//     let cur = queue.shift();

//     if (cur.left) {
//       cur.left.value += cur.value;
//       queue.push(cur.left);
//     }
//     if (cur.right) {
//       cur.right.value += cur.value;
//       queue.push(cur.right);
//     }
//     if (!cur.left && !cur.right && cur.value == targetSum) {
//       return true;
//     }
//   }
//   return false;
// };

// console.log(hasPathSum(myTree4.root, 22));


// function binaryTreePaths(root) {
// let res = []

// function helper(root, res, str = '') {
//   str = str + root.val;
//   if (!root.left && !root.right) res.push(str)


//   str = str + '->'
//   if (root.left) helper(root.left, res, str)
//   if (root.right) helper(root.right, res, str)
// }

// helper(root, res)
// return res


// }

// console.log(binaryTreePaths(myTree4.root));


// ////////////////////////////////////////////////////////////
// /         invert Tree                               ////////
// ///////////////////////////////////////////////////////////

// let myTree3 = null;
// let a = new Node(1)
// let b = new Node(2)
// let c = new Node(3)


// myTree3 = new BinaryTree();
// myTree3.root = a;

// a.left = b;
// a.right = c;



// function invert(tree) {
//   function traverse(node) {
//     let temp;
//     if (node.left) {
//       temp = node.left;
//       node.left = node.right;
//       traverse(node.left)
//     }
//     if (node.right) {
//       node.right = temp;
//       traverse(node.right)
//     }
//   }
//   traverse(tree.root)

//   return tree;
// }

// console.log(invert(myTree3));


// ////////////////////////////////////////////////////////////
// /         lowestCommonAncestor                     ////////
// ///////////////////////////////////////////////////////////
// let bst = null;
// let a = new Node(3)
// let b = new Node(2)
// let c = new Node(4)
// let d = new Node(1)
// let e = new Node(3)
// let f = new Node(5)
// let g = new Node(7)
// bst = new BinaryTree();
// bst.root = a;
// a.left = b;
// a.right = c;
// b.left = d;
// b.right = e;
// c.left = f;
// c.right = g;



// function lowestCommonAncestor(root, p, q) {
//   while (root) {
//     if (p.val < root.val && q.val < root.val) {
//       root = root.left;
//     } else if (p.val > root.val && q.val > root.val) {
//       root = root.right;
//     } else {
//       return root;
//     }
//   }
// }

// let one = new Node(2)
// let two = new Node(4)
// console.log(lowestCommonAncestor(bst.root, one, two));

// ////////////////////////////////////////////////////////////
// /        BT paths                                  ////////
// ///////////////////////////////////////////////////////////


// var binaryTreePaths = function (root) {
//   let result = [];
//   let str = ""
//   function traverse(node, path) {
//     if (!node.left && !node.right) {
//       path += node.val;
//       result.push(path);
//       return;
//     }
//     path = path + node.val + " -> "
//     traverse(node.left, path);
//     traverse(node.right, path);
//   }
//   traverse(root, str);
//   return result;
// };

// console.log(binaryTreePaths(bst.root));

// function sumPaths(root) {
//   let x = 0;

//   function trav(node, str) {
//     str+= node.val;
//     if(!node.left && !node.right) x+= Number(str)
//     if (node.left) trav (node.left, str)
//     if (node.right) trav (node.right, str)
// }
//   trav(root, '')
//   return x;
// }
// console.log(sumPaths(bst.root));




// ////////////////////////////////////////////////////////////
// /       sum left leaves                            ////////
// ///////////////////////////////////////////////////////////

// function sumLeftLeaves(root) {
//   let sum = 0;
//   function traverse(node) {
//     if (node.left && !node.left.left && !node.left.right) sum += node.left.val;
//     // if (node.right && !node.right.left && !node.right.right) sum += node.right.val;
//     if (node.left) traverse(node.left);
//     if (node.right) traverse(node.right);
//   }
//   traverse(root);
//   return sum;

// }

// console.log(sumLeftLeaves(myTree.root));


// ////////////////////////////////////////////////////////////
// /       Subtree of Another Tree                    ////////
// ///////////////////////////////////////////////////////////

// function isSubTree(tree, subTree) {
//   if (typeof tree === 'object' && typeof subTree === 'object' && tree[0] === undefined && subTree[0] === undefined) {
//     if (!tree || !subTree) { return false }
//     function isSame(t, s) {
//       let arr1 = []
//       let arr2 = []
//       function traverse1(node) {
//         arr1.push(node.val)
//         if (node.left) traverse1(node.left)
//         if (node.right) traverse1(node.right)
//       }
//       traverse1(t)
//       function traverse2(node) {
//         arr2.push(node.val)
//         if (node.left) traverse2(node.left)
//         if (node.right) traverse2(node.right)
//       }
//       traverse2(s)
//       if (arr1 + "" === arr2 + "") { return true }
//       else { return false }
//     }

//     function helper(t, s) {
//       if (!t) return false;
//       if (isSame(t, s)) return true;
//       return helper(t.left, s) || helper(t.right, s)
//     }
//     return helper(tree, subTree)
//   }
//   else throw new Error('both inputs should be trees!!')
// }



// let mySub = null;

// let a2 = new Node(4)
// let b2 = new Node(3)
// let d2 = new Node(5)

// mySub = new BinaryTree();

// mySub.root = a2;
// a2.left = b2;
// a2.right = d2;
// // b2.right = e2;



// console.log(isSubTree(myTree.root, mySub.root));

// ////////////////////////////////////////////////////////////
// /       find Mode                                  ////////
// ///////////////////////////////////////////////////////////



// let myTree = null;

// let a = new Node(6)
// let b = new Node(6)
// let c = new Node(8)
// let d = new Node(0)
// let e = new Node(4)
// let f = new Node(5)
// let g = new Node(9)
// let h = new Node(5)
// let i = new Node(5)
// myTree = new BinaryTree();

// myTree.root = a;
// a.left = b;
// b.left = d;
// b.right = e;
// e.left = h;
// e.right = i;
// a.right = c;
// c.left = f;
// c.right = g;


var findMode = function (root) {
  if (!root) return [];
  var result = {};
  var resultArray = [];
  var max = 0;

  var traverse = function (node) {
    if (!result[node.val]) result[node.val] = 1;
    else result[node.val] = result[node.val] + 1;
    if (node.left) traverse(node.left);
    if (node.right) traverse(node.right);
  }
  traverse(root);

  for (vals in result) {
    if (result[vals] >= max) {
      max = result[vals]
    }
  }
  console.log(max);
  for (vals in result) {
    if (result[vals] >= max) resultArray.push(parseInt(vals));
  }
  console.log(resultArray);
  return resultArray;
}


// console.log(findMode(myTree.root));

// ////////////////////////////////////////////////////////////
// /       Merge 2 BTs                                ////////
// ///////////////////////////////////////////////////////////

// let myTree = null;
// let a = new Node(1)
// let b = new Node(3)
// let c = new Node(2)
// let d = new Node(5)
// myTree = new BinaryTree();
// myTree.root = a;
// a.left = b;
// a.right = c;
// b.left = d;
// let myTree2 = null;
// let a2 = new Node(2)
// let b2 = new Node(1)
// let c2 = new Node(3)
// let d2 = new Node(4)
// let e2 = new Node(7)
// myTree2 = new BinaryTree();
// myTree2.root = a2;
// a2.left = b2;
// a2.right = c2;
// b2.right = d2;
// c2.right = e2;

// function merge(tree1, tree2) {

//   let merged = tree1;
//   function traverse(node1, node2) {
//     node1.val += node2.val
//     if (node1.left && node2.left) traverse(node1.left, node2.left)
//     if (node1.right && node2.right) traverse(node1.right, node2.right)
//     if (!node1.left && node2.left) node1.left = new Node(node2.left.val)
//     if (!node1.right && node2.right) node1.right = new Node(node2.right.val)
//   }

//   traverse(merged, tree2)
//   return merged
// }


// console.log(treeify.asTree(merge(myTree.root, myTree2.root), true));
// console.log(merge(myTree, myTree2));


// ////////////////////////////////////////////////////////////
// /       Average  of levels                         ////////
// ///////////////////////////////////////////////////////////

// let myTree = null;
// let a = new Node(1)
// let b = new Node(3)
// let c = new Node(2)
// let d = new Node(5)
// let e = new Node(8)
// let f = new Node(7)
// myTree = new BinaryTree();
// myTree.root = a;
// a.left = b;
// a.right = c;
// b.left = d;
// c.left = e;
// c.right = f;

// function average(root) {
//   const averages = [];
//   const queue = [root];
//   while (queue.length) {
//     let sum = 0;
//     const size = queue.length;
//     for (let i = 0; i < size; i++) {
//       const node = queue.shift();
//       sum += node.val;
//       if (node.left) queue.push(node.left);
//       if (node.right) queue.push(node.right);
//     }
//     averages.push(sum / size);
//   }
//   return averages;
// }


// console.log(average(myTree.root));

// ////////////////////////////////////////////////////////////
// /       Two sum IV                                 ////////
// ///////////////////////////////////////////////////////////

// function findTarget(tree, k) {
//   let arr = []
//   function trav(node) {
//     arr.push(node.val)
//     if (node.left) trav(node.left)
//     if (node.right) trav(node.right)
//   }
//   trav(tree)

//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[i] + arr[j] === k) return true
//     }
//   }
//   return false
// }

// console.log(findTarget(myTree.root, 12));

// ////////////////////////////////////////////////////////////
// /       sec min val in BT                           ////////
// ///////////////////////////////////////////////////////////

// function secMin(tree) {
//   let result = [];
//   function trav(node) {
//     result.push(node.val)
//     if (node.left) trav(node.left)
//     if (node.right) trav(node.right)
//   }
//   trav(tree)

//   console.log(result);
//   for (let i = 0; i < result.length; i++) {
//     for (let j = i + 1; j < result.length; j++) {
//       if (result[i] > result[j]) {
//         let swap = result[j]
//         let swap2 = result[i]
//         result[i] = swap
//         result[j] = swap2
//       }
//     }
//   }
//   console.log(result);
//   return result[1];

// }

// console.log(secMin(myTree.root));

// ////////////////////////////////////////////////////////////
// /       sec min val in BST                          ////////
// ///////////////////////////////////////////////////////////

let bst = null;
let a = new Node(4)
let b = new Node(2)
let c = new Node(6)
let d = new Node(1)
let e = new Node(3)
let f = new Node(5)
let g = new Node(7)
bst = new BinaryTree();
bst.root = a;
a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.left = f;
c.right = g;

function secMin(tree) {
  let arr = []
  let s;
  function trav(node) {
    if (node.left && !node.left.left && !node.left.right) {
      s = node.val
      return;
    }
    if (node.left) trav(node.left)
  }
  trav(tree)
  return s;
}

console.log(secMin(bst.root));


// ////////////////////////////////////////////////////////////
// /       search in BST                               ////////
// ///////////////////////////////////////////////////////////

// function search(root, k) {
//   let n ;
//   function trav(node) {
//     if (node.val === k) n = node;
//     if (node.left) trav(node.left)
//     if (node.right) trav(node.right)
//   }
//   trav(root)
//   return n;
// }

// console.log(search(myTree.root, 6));

// ////////////////////////////////////////////////////////////
// /       Min distance                                ////////
// ///////////////////////////////////////////////////////////

// function minDis(root) {
//   let min;
//   function trav(node) {
//     if (node.left && !node.left.left && !node.left.right) min = node.val - node.left.val
//     if (node.left) trav(node.left)
//     if (node.right) trav(node.right)
//   }
//   trav(root)
//   return min
// }

// console.log(minDis(myTree.root));


// ////////////////////////////////////////////////////////////
// /     leaf similar trees                           ////////
// ///////////////////////////////////////////////////////////

// let myTree1 = null;
// let a = new Node(2)
// let b = new Node(1)
// let c = new Node(3)
// let d = new Node(4)
// let e = new Node(7)
// myTree1 = new BinaryTree();
// myTree1.root = a;
// a.left = b;
// a.right = c;
// b.right = d;
// c.right = e;

// let myTree2 = null;
// let a2 = new Node(5)
// let b2 = new Node(6)
// let c2 = new Node(8)
// let d2 = new Node(4)
// let e2 = new Node(7)
// myTree2 = new BinaryTree();
// myTree2.root = a2;
// a2.left = b2;
// a2.right = c2;
// b2.right = d2;
// c2.right = e2;

// function leafSim(root1, root2) {

//   let arr1 = []
//   let arr2 = []

//   function trav1(node) {
//     if (!node.left && !node.right) arr1.push(node.val)
//     if (node.left) trav1(node.left)
//     if (node.right) trav1(node.right)
//   }
//   trav1(root1)
//   function trav2(node) {
//     if (!node.left && !node.right) arr2.push(node.val)
//     if (node.left) trav2(node.left)
//     if (node.right) trav2(node.right)
//   }
//   trav2(root2)

//   console.log(arr1);
//   console.log(arr2);

//   if (arr1 + '' === arr2 + '') return true
//   else return false
// }

// console.log(leafSim(myTree1.root, myTree2.root));


// ////////////////////////////////////////////////////////////
// /    increase BST                                  ////////
// ///////////////////////////////////////////////////////////

// function increaseBST(root) {

//   let result = [];
//   function trav(node) {
//     if (node.left) trav(node.left);
//     result.push(node.val);
//     if (node.right) trav(node.right);
//   }
//   trav(root);

//   console.log(result);

//   let newTree = new Node(0);
//   let current = newTree;
//   for (let i = 0; i < result.length; i++) {
//     current.right = new Node(result[i]);
//     current = current.right;
//   }
//   return newTree.right;

// }


// console.log(treeify.asTree(increaseBST(bst.root), true));


// ////////////////////////////////////////////////////////////
// /    Uni Valid BT                                  ////////
// ///////////////////////////////////////////////////////////

// let bt = null;
// let a = new Node(1)
// let b = new Node(1)
// let c = new Node(1)
// let d = new Node(1)
// let e = new Node(1)
// let f = new Node(1)
// let g = new Node(1)
// bt = new BinaryTree();
// bt.root = a;
// a.left = b;
// a.right = c;
// b.left = d;
// b.right = e;
// c.left = f;
// c.right = g;

// function uniValid(root) {
//   let val = root.val;
//   let check = true;
//   function trav(node) {
//     if (node.val !== val) check = false;
//     if (node.left) trav(node.left)
//     if (node.right) trav(node.right)
//   }
//   trav(root)
//   return check
// }

// console.log(uniValid(bt.root));

// ////////////////////////////////////////////////////////////
// /    is cousins                                     ////////
// ///////////////////////////////////////////////////////////

// let myTree = null;
// let a = new Node(1)
// let b = new Node(3)
// let c = new Node(2)
// let d = new Node(5)
// let e = new Node(7)
// myTree = new BinaryTree();
// myTree.root = a;
// a.left = b;
// a.right = c;
// b.left = d;
// c.left = e



// function isCousins(root, x, y) {
//   if (!root) return false
//   const queue = [root]
//   while (queue.length) {
//     const len = queue.length
//     let foundX = false, foundY = false
//     for (let i = 0; i < len; i++) {
//       const node = queue.shift()
//       if (node.left && node.right) {
//         if ((node.left.val === x && node.right.val === y) ||
//           (node.left.val === y && node.right.val === x)) return false
//       }
//       if (node.val === x) foundX = true
//       if (node.val === y) foundY = true
//       if (foundX && foundY) return true
//       if (node.left) queue.push(node.left)
//       if (node.right) queue.push(node.right)
//     }
//   }
//   return false
// }

// console.log(isCousins(myTree.root, 7, 5));

// console.log(parseInt(101010, 2));

// ////////////////////////////////////////////////////////////
// /   Sum of Root To Leaf Binary Numbers             ////////
// ///////////////////////////////////////////////////////////

// let myTree = null;
// let a = new Node(1)
// let b = new Node(0)
// let c = new Node(1)
// let d = new Node(0)
// let e = new Node(1)
// myTree = new BinaryTree();
// myTree.root = a;
// a.left = b;
// a.right = c;
// b.left = d;
// c.left = e


// function weired(root) {
//   let res = []

//   function helper(root, res, str = '') {
//     str = str + root.val;
//     if (!root.left && !root.right) res.push(str)


//     str = str + ''
//     if (root.left) helper(root.left, res, str)
//     if (root.right) helper(root.right, res, str)
//   }

//   helper(root, res)
//   return res.reduce((sum, binary) => {
//     sum += parseInt(binary, 2);
//     return sum;
//   }, 0)

// }

// console.log(weired(myTree.root));


