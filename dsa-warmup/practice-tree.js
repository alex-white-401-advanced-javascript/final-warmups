'use strict';

let BinaryTree = require('./data-structures/binary-tree');
let Node = require('./data-structures/node')

const preOrder = (tree) => {
  let resultArr = [];

  let traverse = (node) => {
    resultArr.push(node.value);
    if(node.left) traverse(node.left);
    if(node.right) traverse(node.right);
  };
  traverse(tree.root);

  return resultArr;
}

const postOrder = (tree) => {
  let resultArr = [];

  let traverse = (node) => {
    if(node.left) traverse(node.left);
    if(node.right) traverse(node.right);
    resultArr.push(node.value);
  };
  traverse(tree.root);

  return resultArr;
}

const inOrder = (tree) => {
  let resultArr = [];

  let traverse = (node) => {
    if(node.left) traverse(node.left);
    resultArr.push(node.value);
    if(node.right) traverse(node.right);
  };
  traverse(tree.root);

  return resultArr;
}

const breadthFirst = (tree) => {
  let resutlArr = [];
  let q = [];

  q.push(tree.root);

  while(q.length) {
    let current = q.shift();
    resutlArr.push(current.value);
    if (current.left) q.push(current.left);
    if (current.right) q.push(current.right);
  }
  return resutlArr;
}

let one = new Node(1);
let two = new Node(2);
let three = new Node(3);
let four = new Node(4);
let five = new Node(5);
let six = new Node(6);
let seven = new Node(7);
let eight = new Node(8);
let nine = new Node(9);

one.left = two;
one.right = three;
three.left = four;
three.right = five;
two.left = six;
six.right = seven;
seven.left = eight;
seven.right = nine;

const testTree = new BinaryTree(one);

console.log(preOrder(testTree));
console.log(inOrder(testTree));
console.log(postOrder(testTree));
console.log(breadthFirst(testTree));
