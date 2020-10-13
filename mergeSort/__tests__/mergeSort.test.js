'use strict';

const mergeSort = require('../mergeSort.js');

describe('Merge sort module', () => {
  it('Test normal array', () => {
    let arr = [7, 8, 5, 2, 4, 6, 3];
    let expected = [2, 3, 4, 5, 6, 7, 8];
    expect(mergeSort(arr)).toEqual(expected);
  }),
  it('Test nearly sorted array', () => {
    let nearlySorted = [2, 3, 5, 7, 13, 11];
    let nearlySortedExpected = [2, 3, 5, 7, 11, 13];
    expect(mergeSort(nearlySorted)).toEqual(nearlySortedExpected);
  }),
  it('Test few uniques array', () => {
    let fewUniques = [5, 12, 7, 5, 5, 7];
    let fewUniquesExpected = [5, 5, 5, 7, 7, 12];
    expect(mergeSort(fewUniques)).toEqual(fewUniquesExpected);
  });
})
