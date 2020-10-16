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

module.exports=LinkedList;
