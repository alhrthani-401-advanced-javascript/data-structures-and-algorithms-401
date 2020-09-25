'use strict';

const BinaryTree = require('../tree');
const Node = require('../node');


describe('Binary Search Tree', () => {
  // create a binary tree.
  // traverse it using the 3 methods

  let tree;
  beforeAll(() => {
    // let one = new Node(1);
    let two = new Node(2);
    let three = new Node(3);
    let four = new Node(4);
    let five = new Node(5);
    let six = new Node(6);
    let seven = new Node(7);
    // let eight = new Node(8);
    // let nine = new Node(9);
    four.right = six;
    four.left = two;
    two.right = three;
    // two.left = one;
    six.right = seven;
    six.left = five;

    tree = new BinaryTree(four);

  });



  it('insert() 1', () => {
    // let one = new Node(1);
    tree.insert(1);
    let expected = [1, 2, 3, 4, 5, 6, 7];
    let inOrderOutput = tree.inOrder();
    expect(inOrderOutput).toEqual(expected);
  });
  it('contians() must return false', () => {
    expect(tree.contains(10)).toBeFalse;

  });
  it('contians() must return true', () => {
    expect(tree.contains(5)).toBeTruthly;
  });
});
