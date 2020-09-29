'use strict';
const Node = require('./node.js');

class BinaryTree {

  constructor(root) {
    this.root = root || null;
  }

  // Time o(n) : n is the number of nodes
  // Space o(h): h is the height of this tree

  // Root - Left - Right
  preOrder() {
    let output = [];
    let _traverse = (node) => {
      // console.log('node.value>>>', node.value);
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

  getMax() {
    let max = 0;
    let _traverse = (node) => {
      if (node.left) _traverse(node.left);
      if (node.right) _traverse(node.right);
      if (node.value > max) {
        max = node.value;
      }
    }
    _traverse(this.root);
    return max;
  }
  /**
         *
         * @param {any value} newValue
         */
  insert(newValue) {
    let newNode = new Node(newValue);

    let _insert = (node) => {
      if (node.value > newValue && !(node.left)) {
        // console.log('node.value>>', node.value);
        // console.log({ newValue });
        // console.log('go left, no node in left, insert new value in left');
        node.left = newNode;

      } else if (node.value > newValue) {
        // console.log('node.value>>', node.value);
        // console.log({ newValue });
        // console.log('go left, left is not empty, do recursive');
        _insert(node.left);
      } else if (node.value < newValue && !(node.right)) {
        // console.log('node.value>>', node.value);
        // console.log({ newValue });
        // console.log('go right, no node in right, insert new value in right');
        node.right = node;
      } else if (node.value < newValue) {
        // console.log('node.value>>', node.value);
        // console.log({ newValue });
        // console.log('go right, right is not empty, do recursive');
        _insert(node.right);
      }
    }
    _insert(this.root);
  }



  /**
     *
     * @param {any value} searchValue
     */
  contains(searchValue) {
    let output = false;
    let _traverse = (node) => {
      if (node.left) _traverse(node.left);
      if (node.right) _traverse(node.right);
      if (node.value === searchValue) {
        return true;
      }
    }
    _traverse(this.root);
    return output;
  }

}

module.exports = BinaryTree;
