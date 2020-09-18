'use strict';

const Stack = require('../stack.js');

describe('Stack Module', () => {
  it('test constructor()', () => {
    let list = new Stack();
    expect(list.top).toBeNull();
  }),
  it('Test push() in empty stack', () => {
    let newNode = new Stack();
    expect(newNode.push(1).value).toEqual(1);
  }),
  it('Test push() in non empty stack', () => {
    let newNode = new Stack();
    newNode.push(1);
    expect(newNode.push(2).value).toEqual(2);
  }),
  it('Test pop() in non empty stack', () => {
    let newNode = new Stack();
    newNode.push(1);
    newNode.push(2);
    newNode.push(3);
    expect(newNode.pop()).toEqual(3);
  }),
  it('Test pop() in empty stack', () => {
    let newNode = new Stack();
    expect(newNode.pop()).toBe('Can not pop from empty stack');
  }),
  it('Test peek() in non empty stack', () => {
    let newNode = new Stack();
    newNode.push(1);
    newNode.push(2);
    newNode.push(3);
    expect(newNode.peek()).toEqual(3);
  }),
  it('Test peek() in empty stack', () => {
    let newNode = new Stack();
    expect(newNode.peek()).toBe('No peek for empty stack');
  }),
  it('Test isEmpty() in non empty stack', () => {
    let newNode = new Stack();
    newNode.push(1);
    newNode.push(2);
    newNode.push(3);
    expect(newNode.isEmpty()).toBeFalsy();
  }),
  it('Test isEmpty() in empty stack', () => {
    let newNode = new Stack();
    expect(newNode.isEmpty()).toBeTruthy();
  });
})
