'ues strict';
const Node = require('./node.js');
class Stack {
  constructor() {
    this.top = null;
    this.size = 0;
  }
  /**
         *
         * @param {any value} value
         */
  push(value) {
    if (!value) {
      throw new Error('Invalid Value');
    }
    let newNode = new Node(value);
    if (!this.top) {
      this.top = newNode;
      this.size++;
      return this.top;
    }
    newNode.next = this.top;
    this.top = newNode;
    this.size++;
    return this.top;
  }
  /**
         *
         */
  pop() {
    if (!this.top) {
      return 'Can not pop from empty stack';
    }
    let returnValue = this.top.value;
    this.top = this.top.next;
    this.size--;
    return returnValue;
  }
  /**
         *
         */
  peek() {
    if (!this.top) {
      return 'No peek for empty stack';
    }
    return this.top.value;
  }
  /**
         *
         */
  isEmpty() {
    return !this.top;
  }
}

module.exports = Stack;
