'use strict';

const HashTable = require('../hashtable.js');



describe('Hash Table module', () => {
  it('Test creating new Hash table', () => {
    let myHash = new HashTable(1024);
    expect(typeof myHash).toEqual('object');
  }),
  it('Test Hash Table size ', () => {
    let myHash = new HashTable(1024);
    expect(myHash.size).toEqual(1024);
  }),

  it('Test Add key and value to Hash Table  ', () => {
    let myHash = new HashTable(1024);
    myHash.add('Name', 'Ahmad Alhrthani');
    expect(myHash.entries[215].head.value.Name).toEqual('Ahmad Alhrthani');
  }),

  it('Test Add key and value Two Times to Hash Table  ', () => {
    let myHash = new HashTable(1024);
    myHash.add('Name', 'Ahmad Alhrthani');
    myHash.add('Age', 33);
    expect(myHash.entries[363].head.value.Age).toEqual(33);
  }),

  it('Test Add duplicate key to Hash Table  ', () => {
    let myHash = new HashTable(1024);
    myHash.add('Name', 'Ahmad Alhrthani');
    myHash.add('Name', 'Ali');
    expect(myHash.entries[215].head.value.Name).toEqual('Ahmad Alhrthani');
    expect(myHash.entries[215].head.next).toEqual(null);
  }),

  it('Test hash method in hash table ', () => {
    let myHash = new HashTable(1024);
    expect(myHash.hash('Name')).toEqual(215);
  }),

  it('Test contains method in Hash Table  ', () => {
    let myHash = new HashTable(1024);
    myHash.add('Name', 'Ahmad Alhrthani');
    myHash.add('Age', 33);
    expect(myHash.contains('Age')).toBe(true);
    expect(myHash.contains('Job')).toBe(false);
  }),

  it('Test get method in Hash Table  ', () => {
    let myHash = new HashTable(1024);
    myHash.add('Name', 'Ahmad Alhrthani');
    myHash.add('Age', 33);
    expect(myHash.get('Name')).toEqual('Ahmad Alhrthani');
  }),

  it('Test get method with not found key in Hash Table  ', () => {
    let myHash = new HashTable(1024);
    myHash.add('Name', 'Ahmad Alhrthani');
    myHash.add('Age', 33);
    expect(myHash.get('job')).toEqual('Key not found');
  });
})
