'use strict';

const PseudoQueue = require('../queue-with-stacks.js');

describe('Queue Module', () => {
  it('test constructor()', () => {
    let list = new PseudoQueue();
    expect(list.stack1.size).toEqual(0);
    expect(list.stack2.size).toEqual(0);


  }),
  it('Test Enqueue() in empty Queue', () => {
    let newNode = new PseudoQueue();
    expect(newNode.enqueue(1).value).toEqual(1);
  }),
  it('Test Enqueue() in non empty Queue', () => {
    let newNode = new PseudoQueue();
    newNode.enqueue(1);
    expect(newNode.enqueue(2).value).toEqual(2);
  }),
  it('Test Enqueue() after Dequeue()', () => {
    let newNode = new PseudoQueue();
    newNode.enqueue(1);
    newNode.enqueue(2);
    newNode.enqueue(3);
    newNode.dequeue();
    expect(newNode.enqueue(4).value).toEqual(4);
  }),
  it('Test Dequeue() in non empty Queue', () => {
    let newNode = new PseudoQueue();
    newNode.enqueue(1);
    newNode.enqueue(2);
    newNode.enqueue(3);
    expect(newNode.dequeue()).toEqual(1);
    expect(newNode.dequeue()).toEqual(2);

  }),
  it('Test Dequeue() in empty Queue', () => {
    let newNode = new PseudoQueue();
    expect(newNode.dequeue()).toBe('Can not Dequeue from empty Queue');
  });
  // it('Test peek() in non empty Queue', () => {
  //     let newNode = new PseudoQueue();
  //     newNode.enqueue(1);
  //     newNode.enqueue(2);
  //     newNode.enqueue(3);
  //     expect(newNode.peek()).toEqual(1);
  // }),
  // it('Test peek() in empty stack', () => {
  //     let newNode = new PseudoQueue();
  //     expect(newNode.peek()).toBe('No peek for empty Queue');
  // }),
  // it('Test isEmpty() in non empty Queue', () => {
  //     let newNode = new Queue();
  //     newNode.enqueue(1);
  //     newNode.enqueue(2);
  //     newNode.enqueue(3);
  //     expect(newNode.isEmpty()).toBeFalsy();
  // }),
  // it('Test isEmpty() in empty Queue', () => {
  //     let newNode = new PseudoQueue();
  //     expect(newNode.isEmpty()).toBeTruthy();
  // });
})
