'use strict';
const KAryTree = require('./k_ary_tree.js');
const KAryNode = require('./k_ary_node.js');
// const Queue = require('../stacksAndQueues/queue.js');
// const Stack = require('../stacksAndQueues/stack.js');

let testTree = new KAryTree();

testTree.root = new KAryNode(1);
testTree.root.children.push(new KAryNode(2));
testTree.root.children.push(new KAryNode(3));
testTree.root.children.push(new KAryNode(4));
testTree.root.children[0].children.push(new KAryNode(5));
testTree.root.children[0].children.push(new KAryNode(6));
testTree.root.children[0].children.push(new KAryNode(7));
testTree.root.children[1].children.push(new KAryNode(8));
testTree.root.children[1].children.push(new KAryNode(9));
testTree.root.children[1].children.push(new KAryNode(10));
testTree.root.children[2].children.push(new KAryNode(11));
testTree.root.children[2].children.push(new KAryNode(12));
testTree.root.children[2].children.push(new KAryNode(13));
// testTree.root.children[2].children[0].children.push(new KAryNode(25));

const fizzBuzzTree = (root) => {
  // console.log(root.value);
  root.value = checkFizzBuzz(root.value);
  // console.log('String root value>>>', root.value);

  recursive(root);

  // currentNode.value = checkFizzBuzz(currentNode.value);

  function recursive(root) {
    if (root.children) {
      for (let i = 0; i < root.children.length; i++) {
        // console.log('root.children[i].value>>>', root.children[i].value);
        // let newValue = checkFizzBuzz(root.children[i].value);
        // console.log({ newValue });
        // root.children.push(new KAryNode(newValue));
        // console.log(typeof root.children[i]);
        root.children[i].value = checkFizzBuzz(root.children[i].value);
        console.log(root.children[i].value);

        recursive(root.children[i])
      }
    }
  }
  return root;
};

function checkFizzBuzz(value) {
  if (value % 3 === 0) {
    return 'Fizz';
  } else if (value % 5 === 0) {
    return 'Buzz';
  } else if (value % 5 === 0 && value % 3 === 0) {
    return 'FizzBuzz';
  } else {
    return '' + value;
  }
}



let newTree = fizzBuzzTree(testTree.root);
console.log(newTree);
module.exports = fizzBuzzTree;
