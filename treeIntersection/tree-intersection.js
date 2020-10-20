'use strict';

function treeIntersection(tree1, tree2) {
  let output = [];
  let _traverse = (t1node, t2node) => {
    let t1nodeValue = t1node.value;
    let t2nodeValue = t2node.value;
    console.log('t1nodeValue>>>', t1nodeValue);
    console.log('t2nodeValue>>>', t2nodeValue);
    if (t1nodeValue === t2nodeValue) {
      console.log('match');
      output.push(t1node.value);
    }
    // Go Left for both
    if (t1node.left && t2node.left) _traverse(t1node.left, t2node.left);
    // Go Right for both
    if (t1node.right && t2node.right) _traverse(t1node.right, t2node.right);
  }
  _traverse(tree1.root, tree2.root);
  return output;
}

module.exports = treeIntersection;
