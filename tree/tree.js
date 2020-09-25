'use strict';
const Node = require('./node.js');

class BinaryTree {

  constructor(root = null) {
    this.root = root;
  }

  // Time o(n) : n is the number of nodes
  // Space o(h): h is the height of this tree

  // Root - Left - Right
  preOrder() {
    let output = [];
    let _traverse = (node) => {
      output.push(node.value);
      // Go Left
      if (node.left) _traverse(node.left);
      // Go Right
      if (node.right) _traverse(node.right);
    }
    _traverse(this.root);
    return output;
  }

  // Left - Root - Right
  inOrder() {
    let output = [];
    let _traverse = (node) => {
      if (node.left) _traverse(node.left);
      output.push(node.value);
      if (node.right) _traverse(node.right);
    }

    _traverse(this.root);
    return output;
  }

  // Left - Right - Root
  postOrder() {
    let output = [];
    let _traverse = (node) => {
      if (node.left) _traverse(node.left);
      if (node.right) _traverse(node.right);
      output.push(node.value);
    }
    _traverse(this.root);
    return output;
  }

  insert(newValue) {
    let newNode = new Node(newValue);

    let _insert = (node) => {
      if (node.value > newValue && !(node.left)) {
        node.left = newNode;
      } else if (node.value > newValue) {
        _insert(node.left);
      } else if (node.value < newValue && !(node.right)) {
        bst.right = node;
      } else if (node.value < newValue) {
        _insert(node.right);
      }
    }
    _insert(this.root);
  }

  contains(searchValue) {
    let output = false;
    let _traverse = (node) => {
      if (node.left) _traverse(node.left);
      if (node.right) _traverse(node.right);
      if (node.value === searchValue) {
        output = true;
        return output;
      }
    }
    _traverse(this.root);
    return output;
  }

}

module.exports = BinaryTree;
