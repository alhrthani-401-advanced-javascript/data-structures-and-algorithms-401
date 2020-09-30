'use strict';

const KAryTree = require('../k_ary_tree.js');
const KAryNode = require('../k_ary_node.js');
const fizzBuzzTree = require('../fizz-buzz-tree.js');

describe('FizzBuzzTree Module', () => {

  it('test FizzBuzzTreeFn function', () => {
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


    let newTree = fizzBuzzTree(testTree);
    let depthFirsttraverse = newTree.depthFirstTraversal();
    expect(depthFirsttraverse).toEqual('1 4 13 Fizz 11 Fizz Buzz Fizz 8 2 7 Fizz Buzz');

  })

})
