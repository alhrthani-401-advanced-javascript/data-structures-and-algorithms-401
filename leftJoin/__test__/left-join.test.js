'use strict';

const HashTable = require('../hashTable');
const LeftJoin = require('../left-join')

describe('Left join module', () => {
  it('insert() 1', () => {
    let ht1 = new HashTable(1024);
    ht1.add('fond', 'enamored');
    ht1.add('warth', 'anger');
    ht1.add('diligent', 'employed');
    ht1.add('outfit', 'grab');
    ht1.add('guide', 'usher');

    let ht2 = new HashTable(1024);
    ht2.add('fond', 'averse');
    ht2.add('warth', 'delight');
    ht2.add('diligent', 'idle');
    ht2.add('flow', 'jam');
    ht2.add('guide', 'follow');

    LeftJoin(ht1, ht2);

    expect(ht1.entries[449].head.value['fond']).toEqual(["enamored", "averse"]);
    expect(ht1.entries[746].head.value['warth']).toEqual(["anger", "delight"]);
    expect(ht1.entries[48].head.value['diligent']).toEqual(["employed", "idle"]);
    expect(ht1.entries[706].head.value['guide']).toEqual(["usher", "follow"]);

  });
});
