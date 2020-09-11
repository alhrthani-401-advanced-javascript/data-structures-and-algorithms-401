'ues strict'
const Node = require('./node.js');
class LinkedList {
    constructor() {
        this.head = null;
    }

    insert(value) {
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
            if (currentNode.value == value) {
                return true;
            }
            if (currentNode.next == null) {
                return false;
            }
        }
    }

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