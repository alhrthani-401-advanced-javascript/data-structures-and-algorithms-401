'ues strict';
const Node = require('./node.js');
class Queue {
  constructor() {
    this.rear = null;
    this.front = null;
    this.size = 0;
  }

  enqueue(value) {
    if (!value) {
      throw new Error('Invalid Value');
    }
    let newNode = new Node(value);
    if (!this.front) {
      this.front = newNode;
      this.size++;
      return this.front;
    }
    newNode.next = this.rear;
    this.rear = newNode;
    this.size++;
    return this.rear;
  }

  dequeue() {
    if (!this.front) {
      return 'Can not Dequeue from empty Queue';
    }
    let returnValue = this.front.value;
    this.front = this.front.next;
    this.size--;
    return returnValue;
  }

  peek() {
    if (!this.front) {
      return 'No peek for empty Queue';
    }
    return this.front.value;
  }

  isEmpty() {
    return !this.front;
  }
}

module.exports = Queue;
