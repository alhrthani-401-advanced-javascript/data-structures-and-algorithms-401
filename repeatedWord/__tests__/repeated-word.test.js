'use strict';

const repeatedWords = require('../repeated-word.js');

describe('Repeated words module', () => {
  it('Test Empty string', () => {
    let myString='';
    expect(repeatedWords(myString)).toEqual('can accept empty string');
  }),
  it('Test case 1 ', () => {
    let myString='Once upon a time, there was a brave princess who...';
    expect(repeatedWords(myString)).toEqual('a ');
  }),
  it('Test case 2 ', () => {
    let myString='It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair, we had everything before us, we had nothing before us, we were all going direct to Heaven, we were all going direct the other way – in short, the period was so far like the present period, that some of its noisiest authorities insisted on its being received, for good or for evil, in the superlative degree of comparison only...'

    expect(repeatedWords(myString)).toEqual('it ');
  }),
  it('Test case 3 ', () => {
    let myString='It was a queer, sultry summer, the summer they electrocuted the Rosenbergs, and I didn’t know what I was doing in New York...'


    expect(repeatedWords(myString)).toEqual('summer ');
  });



})
