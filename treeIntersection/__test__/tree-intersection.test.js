'use strict';

const Node = require('../node');
const BinaryTree = require('../tree');
const treeIntersection=require('../tree-intersection')

describe('Tree intersection module', () => {
  it('Test 1', () => {
    let a150=new Node(150);
    let a250=new Node(250);
    let a200=new Node(200);
    let a100=new Node(100);
    let a350=new Node(350);
    let a160=new Node(160);
    let a75=new Node(75);
    let a175=new Node(175);
    let a125=new Node(125);
    let a300=new Node(300);
    let a500=new Node(500);
    a150.right=a250;
    a150.left=a100;
    a250.right=a350;
    a250.left=a200;
    a100.right=a160;
    a100.left=a75;
    a160.right=a175;
    a160.left=a125;
    a350.right=a500;
    a350.left=a300;
    let t1=new BinaryTree(a150);
    let b42=new Node(42);
    let b100=new Node(100);
    let b200=new Node(200);
    let b600=new Node(600);
    let b350=new Node(350);
    let b160=new Node(160);
    let b15=new Node(15);
    let b175=new Node(175);
    let b125=new Node(125);
    let b4=new Node(4);
    let b500=new Node(500);
    b42.right=b600;
    b42.left=b100;
    b600.right=b350;
    b600.left=b200;
    b100.right=b160;
    b100.left=b15;
    b160.right=b175;
    b160.left=b125;
    b350.right=b500;
    b350.left=b4;
    let t2=new BinaryTree(b42);
    let expected = [100,160,125,175,200,350,500];
    expect(treeIntersection(t1,t2)).toEqual(expected);
  });
});
