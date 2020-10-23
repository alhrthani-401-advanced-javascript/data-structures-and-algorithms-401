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
      console.log('hashIndex>>',hashIndex);
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
            return currentNode.value[key];
          }
          currentNode = currentNode.next;
  
        } while (currentNode.next);
        return false;
  
      } else {
        return false;
      }
    }
  
    update(key,value){
      if(this.contains(key)){
        let entry = { [key]: value };
        // console.log('before--->',this.entries[this.hash(key)].head.value);
        this.entries[this.hash(key)].head.value = entry
        // console.log('after--->',this.entries[this.hash(key)].head.value);
      }else{
        this.add(key,value)
      }
    }
  
    // contains(key) {
    //     return this.entries[this.hash(key)] ? true : false;
    // }
  }


  class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  class LinkedList {
    constructor() {
      this.head = null;
    }
  
    print() {
  
    }
  
    append(value) {
      const node = new Node(value);
      if (!this.head) {
        this.head = node;
  
      } else {
  
        let current = this.head;
        while (current.next) {
          current = current.next;
        }
        current.next = node;
      }
    }
  
    contain(key){
  
      // console.log({key});
      // let result=false;
  
      // console.log('hash index',hashIndex);
      //check if the key is valid
      let currentNode=this.head;
      // console.log('currentNode',currentNode.value);
      if(currentNode.next===null && currentNode.value[key] ){
        // console.log('we have header only, header contain the key');
        return true;
      }
  
      while (currentNode.next) {
        currentNode = currentNode.next;
  
        // console.log('>>>>>inside while');
        // console.log('currentNode.value[key]',currentNode.value);
  
        if (currentNode.value[key]) {
          // console.log('key used');
          return true;
  
        }
      }
      // console.log({result});
  
      return false;
    }
  }
  module.exports=HashTable;