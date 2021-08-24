
class Node  {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class Tree {
    constructor() {
        this.root = null;
    }
}


//                  folder-a
//    folder-b                 folder-c
//  file-d  file-e     folder-f       folder-g
//                 file-h   file-i   file-j   folder-k   
//                                           file-l   file-m
let myTree1 = null
let a = new Node('folder')
let b = new Node('folder')
let c = new Node('folder')
let d = new Node('file')
let e = new Node('file')
let f = new Node('folder')
let g = new Node('folder')
let h = new Node('file')
let i = new Node('file')
let j = new Node('file')
let k = new Node('folder')
let l = new Node('file')
let m = new Node('file')
myTree1 = new Tree();
myTree1.root = a;
a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.left = f;
c.right = g;
f.left = h;
f.right = i;
g.left = j;
g.right = k;
k.left = l;
k.right = m;
//                  folder-a
//    folder-b                 folder-c
//  file-d  file-e     folder-f       folder-g
//                 file-h   file-i   file-j   file-k   
let myTree2 = null
let a2 = new Node('folder')
let b2 = new Node('folder')
let c2 = new Node('folder')
let d2 = new Node('file')
let e2 = new Node('file')
let f2 = new Node('folder')
let g2 = new Node('folder')
let h2 = new Node('file')
let i2 = new Node('file')
let j2 = new Node('file')
let k2 = new Node('file')
myTree2 = new Tree();
myTree2.root = a2;
a2.left = b2;
a2.right = c2;
b2.left = d2;
b2.right = e2;
c2.left = f2;
c2.right = g2;
f2.left = h2;
f2.right = i2;
g2.left = j2;
g2.right = k2;

let treeify = require('treeify');
// console.log(treeify.asTree(tree1, true));

function compare(tree1, tree2){
    files1 = 0;
    files2 = 0;

    function traverse1(node) {
        if(node.left) {traverse1(node.left)}
        if(node.right) {traverse1(node.right)}
        if(!node.left && !node.right) {files1++}
    }
    traverse1(tree1.root)

    function traverse2(node) {
        if(node.left) {traverse2(node.left)}
        if(node.right) {traverse2(node.right)}
        if(!node.left && !node.right) {files2++}
    }
    traverse2(tree2.root)

    if(files1 === files2) {return true}
    else return false;
}

console.log(compare(myTree1, myTree2)); 
