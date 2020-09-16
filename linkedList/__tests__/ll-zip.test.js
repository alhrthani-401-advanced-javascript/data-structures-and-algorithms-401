'use strict';
const LL = require('../linked-list.js');
const zipList = require('../ll-zip.js');


describe('Merge Two lists module', () => {
 
  it('test ziplists() when they are equal', () => {
    let list1=new LL();
    list1.append(1);
    list1.append(3);
    list1.append(5);

    let list2=new LL();
    list2.append(2);
    list2.append(4);
    list2.append(6);    
    expect(zipList(list1,list2).toString()).toBe('{1} -> {2} -> {3} -> {4} -> {5} -> {6} -> NULL');
  }),

  it('test ziplists() when one is less length than the other ', () => {
    let list1=new LL();
    list1.append(1);
    list1.append(3);
    list1.append(5);

    let list2=new LL();
    list2.append(2);
    list2.append(4);
    expect(zipList(list1,list2).toString()).toBe('{1} -> {2} -> {3} -> {4} -> {5} -> NULL');
  });
});