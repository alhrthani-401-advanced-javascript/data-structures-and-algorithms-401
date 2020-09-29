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


    let expexted = [];
    //expected
    //  KAryNode {
    //     value: '1',
    //     pareent: null,
    //     children: [
    //       KAryNode { value: '2', pareent: null, children: [] },
    //       KAryNode { value: 'Fizz', pareent: null, children: [Array] },
    //       KAryNode { value: '4', pareent: null, children: [Array] }
    //     ]
    //   }

    let newTree = fizzBuzzTree(testTree.root);
    expect(newTree).toEqual(expexted);

  })

})
