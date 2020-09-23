'use strict';
const Stack = require('../stacksAndQueues/stack.js');

function multiBracketValidation(input) {
  let stack = new Stack();
  let strinArray = Array.from(input);
  strinArray.forEach((char) => {
    if (char === '[' || char === '(' || char === '{') {
      stack.push(char);
    }
    if (char === ']' || char === ')' || char === '}') {
      if (char === closingTag(stack.peek())) {
        stack.pop();
      }
    }
  })
  if (stack.size === 0) {
    return true;
  } else {
    return false;
  }
}

function closingTag(openTag) {
  if (openTag === '[') { return ']' } else if (openTag === '(') { return ')' } else if (openTag === '{') { return '}' }
}

module.exports = multiBracketValidation;
