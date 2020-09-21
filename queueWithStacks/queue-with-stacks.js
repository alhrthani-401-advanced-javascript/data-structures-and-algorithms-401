'use strict';
const Stack = require('../stacksAndQueues/stack.js');

class PseudoQueue {
  constructor() {
    this.stack1 = new Stack();
    this.stack2 = new Stack();


  }

  enqueue(value) {
    if (this.stack2.size === 0) {
      return this.stack1.push(value);
    } else if (this.stack2.size > 0) {
      while (this.stack2.size > 0) {
        this.stack1.push(this.stack2.pop());
      }
      return this.stack1.push(value);
    }

  }

  dequeue() {
    if (this.stack2.size === 0) {
      while (this.stack1.size > 0) {
        let popedFromStack1 = this.stack1.pop();
        this.stack2.push(popedFromStack1);

      }
      let dequeuedFromStack2 = this.stack2.pop();
      if (dequeuedFromStack2 === 'Can not pop from empty stack') {
        return 'Can not Dequeue from empty Queue';
      }
      return dequeuedFromStack2;

    } else if (this.stack2.size > 0) {
      let dequeuedFromStack2 = this.stack2.pop();
      return dequeuedFromStack2;

    }
  }
}

module.exports = PseudoQueue;
