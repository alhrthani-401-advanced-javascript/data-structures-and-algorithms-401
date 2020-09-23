'use strict';

const multiBracketValidation = require('../multi-bracket-validation.js');

describe('Multi Brackets Validation Module', () => {
  it('test true cases', () => {
    let string1 = '[hello]';
    let string2 = '{}(){}';
    let string3 = '{([])}';
    expect(multiBracketValidation(string1)).toBeTruthy();
    expect(multiBracketValidation(string2)).toBeTruthy();
    expect(multiBracketValidation(string3)).toBeTruthy();
  }),
  it('test false cases', () => {
    let string1 = '[hello[';
    let string2 = '{}(]{}';
    let string3 = '{';
    expect(multiBracketValidation(string1)).toBeFalsy();
    expect(multiBracketValidation(string2)).toBeFalsy();
    expect(multiBracketValidation(string3)).toBeFalsy();
  });
})
