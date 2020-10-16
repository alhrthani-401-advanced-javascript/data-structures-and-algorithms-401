'use strict';

const LinkedList = require('./linkedList');

class HashTable {
  constructor(size) {
    this.size = size;
    this.entries = new Array(size); // bucket
  }

  hash(key) {
    // return hash Index
    let charArr = key.split('');
    return charArr.reduce((p, n) => {
      return p + n.charCodeAt(0);
    }, 0) * 599 % this.size;
  }



  add(key, value) {
    // Linked List to represent the value for each key in the bucket
    let hashIndex = this.hash(key);
    console.log('hashIndex: ', hashIndex)
    if (!this.entries[hashIndex]) {
      // console.log('first addition>>',key)
      // create a new one
      this.entries[hashIndex] = new LinkedList();
      let entry = { [key]: value };
      this.entries[hashIndex].append(entry); // LinkedList append method
    } else {
      if (this.entries[hashIndex].contain(key)) {
        console.log('Can not add this key. It is already used');


        return 'Can not add this key. It is already used'
      } else {
        // console.log('key is uniqe>>>',key);
        let entry = { [key]: value };
        this.entries[hashIndex].append(entry); // LinkedList append method
      }


    }
  }

  //handle get using key
  // get(key) {
  //     let hashIndex = this.hash(key);
  //     //check if the key is valid
  //     if (this.entries[hashIndex]) {
  //         //if we have only head return it's value
  //         if (this.entries[hashIndex].head.next === null) {
  //             return this.entries[hashIndex].head.value[key];
  //             //if we have more than one node we will search using the key
  //         } else {

  //             let currentNode = this.entries[hashIndex].head;
  //             while (currentNode.next) {

  //                 if (currentNode.value[key]) {

  //                     return currentNode.value[key];
  //                 }
  //                 currentNode = currentNode.next;
  //             }
  //         }
  //     }
  // }

  get(key) {
    let hashIndex = this.hash(key);
    //check if the key is valid
    if (this.entries[hashIndex]) {
      //if we have only head return it's value
      let currentNode = this.entries[hashIndex].head;
      do {
        if (currentNode.value[key]) {
          return this.entries[hashIndex].head.value[key];
        }
        currentNode = currentNode.next;

      } while (currentNode.next);
      return 'Key not found';


    } else {
      return 'Key not found';
    }
  }

  contains(key) {
    let hashIndex = this.hash(key);
    //check if the key is valid
    if (this.entries[hashIndex]) {
      //if we have only head return it's value
      let currentNode = this.entries[hashIndex].head;
      do {
        if (currentNode.value[key]) {
          return true;
        }
        currentNode = currentNode.next;

      } while (currentNode.next);
      return false;

    } else {
      return false;
    }
  }

  // contains(key) {
  //     return this.entries[this.hash(key)] ? true : false;
  // }
}





module.exports = HashTable;





