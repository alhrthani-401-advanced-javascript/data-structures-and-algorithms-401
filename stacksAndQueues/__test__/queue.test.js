'use strict';

const Queue = require('../queue.js');

describe('Queue Module', () => {
  it('test constructor()', () => {
    let list = new Queue();
    expect(list.front).toBeNull();
  }),
  it('Test Enqueue() in empty Queue', () => {
    let newNode = new Queue();
    expect(newNode.enqueue(1).value).toEqual(1);
  }),
  it('Test Enqueue() in non empty Queue', () => {
    let newNode = new Queue();
    newNode.enqueue(1);
    expect(newNode.enqueue(2).value).toEqual(2);
  }),
  it('Test Dequeue() in non empty Queue', () => {
    let newNode = new Queue();
    newNode.enqueue(1);
    newNode.enqueue(2);
    newNode.enqueue(3);
    expect(newNode.dequeue()).toEqual(1);
  }),
  it('Test Dequeue() in empty Queue', () => {
    let newNode = new Queue();
    expect(newNode.dequeue()).toBe('Can not Dequeue from empty Queue');
  }),
  it('Test peek() in non empty Queue', () => {
    let newNode = new Queue();
    newNode.enqueue(1);
    newNode.enqueue(2);
    newNode.enqueue(3);
    expect(newNode.peek()).toEqual(1);
  }),
  it('Test peek() in empty stack', () => {
    let newNode = new Queue();
    expect(newNode.peek()).toBe('No peek for empty Queue');
  }),
  it('Test isEmpty() in non empty Queue', () => {
    let newNode = new Queue();
    newNode.enqueue(1);
    newNode.enqueue(2);
    newNode.enqueue(3);
    expect(newNode.isEmpty()).toBeFalsy();
  }),
  it('Test isEmpty() in empty Queue', () => {
    let newNode = new Queue();
    expect(newNode.isEmpty()).toBeTruthy();
  });
})
