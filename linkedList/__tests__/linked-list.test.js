'use strict';
const LL = require('../linked-list.js');
const zipList = require('../ll-zip.js');


describe('linked list module', () => {
  it('test constructor()', () => {
    let list = new LL();
    expect(list.head).toBeNull();
  }),
  it('test append()', () => {
    let list = new LL();
    let initialValue = 'First Value';
    list.append(initialValue);
    //head value should equal initialValue
    expect(list.head.value).toEqual(initialValue);

    let newValue = 'Secnod Value';
    list.append(newValue);
    //head value should equal initialValue
    expect(list.head.value).toEqual(initialValue);
    //head.next should not be null
    expect(list.head.next).not.toBeNull();
    //we can reach the value of the new node through head.next.value
    expect(list.head.next.value).toEqual(newValue);
  }),

  it('test include() with included value', () => {
    let list = new LL();
    let initialValue = 'First Value';
    list.append(initialValue);
    //head value should equal initialValue
    expect(list.head.value).toEqual(initialValue);
    let newValue = 'Secnod Value';
    list.append(newValue);
    //head value should equal initialValue
    expect(list.include('Secnod Value')).toBe(true);
  }),
  it('test include() with empty linked list', () => {
    let list = new LL();
    expect(list.include('test')).toBe(false);
  }),
  it('test include() with not included value', () => {
    let list = new LL();
    let initialValue = 'First Value';
    list.append(initialValue);
    //head value should equal initialValue
    expect(list.head.value).toEqual(initialValue);
    let newValue = 'Secnod Value';
    list.append(newValue);
    //head value should equal initialValue
    expect(list.include('third Value')).toBe(false);
  }),
  it('test toString() with empty linked list', () => {
    let list = new LL();
    expect(list.toString()).toBe('Empty linked list');
  }),
  it('test toString() with non empty linked list', () => {
    let list = new LL();
    let initialValue = 'First Value';
    list.append(initialValue);
    expect(list.head.value).toEqual(initialValue);
    let newValue = 'Secnod Value';
    list.append(newValue);
    expect(list.toString()).toBe('{First Value} -> {Secnod Value} -> NULL');
  }),
  it('test insertAfter() with empty linked list', () => {
    let list = new LL();
    let newValue = 6;
    let valueToAddAfterIt = 5;
    expect(list.insertAfter(valueToAddAfterIt, newValue)).toBe('Empty Linked List');
  }),
  it('test insertAfter() with valid case', () => {
    let list = new LL();
    list.append(5);
    list.append(1);
    list.append(7);
    list.insertAfter(1, 2);
    expect(list.toString()).toBe('{5} -> {1} -> {2} -> {7} -> NULL');
  }),
  it('test insertAfter() with not found value to add after it', () => {
    let list = new LL();
    list.append(5);
    list.append(1);
    list.append(7);
    expect(list.insertAfter(3, 2)).toBe('The value you are trying to add after it not found');
  }),
  it('test insertBefore() with valid case', () => {
    let list = new LL();
    list.append(5);
    list.append(2);
    list.append(7);
    list.insertBefore(2, 1);
    expect(list.toString()).toBe('{5} -> {1} -> {2} -> {7} -> NULL');
  }),
  it('test insertBefore() with not found value to add after it', () => {
    let list = new LL();
    list.append(5);
    list.append(1);
    list.append(7);
    expect(list.insertBefore(3, 2)).toBe('The value you are trying to add after it not found');
  }),
  it('test insertBefore() with empty linked list', () => {
    let list = new LL();
    let newValue = 6;
    let valueToAddBeforeIt = 5;
    expect(list.insertBefore(valueToAddBeforeIt, newValue)).toBe('Empty Linked List');
  });
  // it('test insertBefore() with linked list contains head only', () => {
  //   let list = new LL();
  //   list.append(5);
  //   list.insertBefore(5,4);
  //   expect(list.toString()).toBe('{4} -> {5} -> NULL');
  // });
  // it('test insert() with empty linked list', () => {
  //   let list = new LL();
  //   list.insert(1);
  //   expect(list.toString()).toBe('{1} -> NULL');
  // });
  // it('test insert() with linked list contains head only', () => {
  //   let list = new LL();
  //   list.insert(2);
  //   list.insert(1);
  //   expect(list.toString()).toBe('{1} -> {2} -> NULL');
  // });
  it('test ziplists() ', () => {
    let list1 = new LL();
    list1.append(1);
    list1.append(3);
    list1.append(5);

    let list2 = new LL();
    list2.append(2);
    list2.append(4);
    list2.append(6);
    expect(zipList(list1, list2).toString()).toBe('{1} -> {2} -> {3} -> {4} -> {5} -> {6} -> NULL');
  });
});

// insertBefore(value, newVal) {
//   let newNode = new Node(newVal); //vlaue=value, next=null

//   //handle include if the Linkedlist is empty
//   if (!this.head) {
//       return "Empty Linked List";
//   }
//   // if we have other stuff, I need to add it at the end
//   // I have to loop through all nodes and add it to the tail
//   let currentNode = this.head;
//   while (currentNode.next) {
//       currentNode = currentNode.next;
//       if (currentNode.next.value === value) {
//           let nextForNewNode = currentNode.next;
//           currentNode.next = newNode;
//           newNode.next = nextForNewNode;
//           // return currentNode.next;
//       }
//       if (currentNode.next === null) {
//           return 'The value you are trying to add after it not found';
//       }
//   }
// }
