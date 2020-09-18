'ues strict';
const Node = require('./node.js');
class LinkedList {
  constructor() {
    this.head = null;
  }

  /**
     * @param {number} value
     */
  append(value) {
    let node = new Node(value); //vlaue=value, next=null
    //handle empty Linkedlist
    if (!this.head) {
      this.head = node;
      return this;
    }
    // if we have other stuff, I need to add it at the end
    // I have to loop through all nodes and add it to the tail
    let currentNode = this.head;
    while (currentNode.next) {
      currentNode = currentNode.next;
    }
    //last node we reach
    //we will put it's next equal to the new node
    currentNode.next = node;
    return this;
  }
  /**
   *
   * @param {any value} value
   */
  insert(value) {
    let newNode = new Node(value); //vlaue=value, next=null
    //handle empty Linkedlist
    if (!this.head) {
      this.head = node;
      return this;
    }
    // If we have only the head in the linked list
    if(this.head.next===null){
      newNode.next=null;
      this.head.next=newNode;
      //If we have multi nodes in the linked list
    }else{
      newNode.next=this.head.next;
      this.head.next=newNode;
    }

  }

  //test git
  /**
     *
     * @param {number} value
     *
     */
  include(value) {
    //handle include if the Linkedlist is empty
    if (!this.head) {
      return false;
    }
    // if we have other stuff, I need to add it at the end
    // I have to loop through all nodes and add it to the tail
    let currentNode = this.head;
    while (currentNode.next) {
      currentNode = currentNode.next;
      if (currentNode.value === value) {
        return true;
      }
      if (currentNode.next === null) {
        return false;
      }
    }
  }
  /**
         *
         * @param {number} value
         * @param {number} newVal
         */
  insertAfter(value, newVal) {
    let newNode = new Node(newVal); //vlaue=value, next=null

    //handle include if the Linkedlist is empty
    if (!this.head) {
      return 'Empty Linked List';
    }
    // if we have other stuff, I need to add it at the end
    // I have to loop through all nodes and add it to the tail
    let currentNode = this.head;
    while (currentNode.next) {
      currentNode = currentNode.next;
      if (currentNode.value === value) {
        newNode.next = currentNode.next;
        currentNode.next = newNode;
      }
      if (currentNode.next === null) {
        return 'The value you are trying to add after it not found';
      }
    }
  }
  /**
         *
         * @param {number} value
         * @param {number} newVal
         */
  insertBefore(value, newVal) {
    let newNode = new Node(newVal); //vlaue=value, next=null

    //handle insertBefore if the Linkedlist is empty
    if (!this.head) {
      return 'Empty Linked List';
    }
    // if we have other stuff, I need to add it at the end
    // I have to loop through all nodes and add it to the tail
    if(this.head.value === value){
      let olderHead=this.head;
      this.head=newNode;
      this.head.next=olderHead;
    }
    let currentNode = this.head;
    while (currentNode.next) {
      let prevNode = currentNode;
      currentNode = currentNode.next;
      if (currentNode.value === value) {
        newNode.next = prevNode.next;
        prevNode.next = newNode;
      }
      if (currentNode.next === null) {
        return 'The value you are trying to add after it not found';
      }
    }
  }
  /**
         * No parameters needed
         */
  toString() {
    let result = '';
    if (!this.head) {
      result = 'Empty linked list';
      return result;
    } else {
      let node = this.head;
      result = `{${node.value}}`;
      while (node.next) {
        node = node.next;
        result += ` -> {${node.value}}`;
      }
      result += ` -> NULL`;
      return result;
    }
  }


}

module.exports = LinkedList;
