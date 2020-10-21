'use strict';

const BinaryTree = require('../tree');
const Node = require('../node');


describe('Binary Search Tree', () => {
  // create a binary tree.
  // traverse it using the 3 methods



  it('insert() 1', () => {
    let ht1 = new HashTable(1024);
    ht1.add('fond', 'enamored');
    ht1.add('warth', 'anger');
    ht1.add('diligent', 'employed');
    ht1.add('outfit', 'grab');
    ht1.add('guide', 'usher');

    let ht2 = new HashTable(1024);
    ht2.add('fond', 'averse');
    ht2.add('warth', 'delight');
    ht2.add('diligent', 'idle');
    ht2.add('flow', 'jam');
    ht2.add('guide', 'follow');

    let expected = [1, 2, 3, 4, 5, 6, 7];
    let inOrderOutput = tree.inOrder();
    expect(inOrderOutput).toEqual(expected);
  });



});
