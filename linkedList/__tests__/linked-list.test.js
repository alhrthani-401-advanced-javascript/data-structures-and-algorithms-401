'use strict';
const LL = require('../linked-list.js');

describe('linked list module', () => {
    it('test constructor()', () => {
            let list = new LL();
            expect(list.head).toBeNull();
        }),
        it('test insert()', () => {
            let list = new LL();
            let initialValue = 'First Value';
            list.insert(initialValue);
            //head value should equal initialValue
            expect(list.head.value).toEqual(initialValue);

            let newValue = 'Secnod Value';
            list.insert(newValue);
            //head value should equal initialValue
            expect(list.head.value).toEqual(initialValue);
            //head.next should not be null
            expect(list.head.next).not.toBeNull();
            //we can reach the value of the new node through head.next.value
            expect(list.head.next.value).toEqual(newValue);
        }),

        it('test include() with included value', () => {
            let list = new LL();
            let initialValue = 'First Value';
            list.insert(initialValue);
            //head value should equal initialValue
            expect(list.head.value).toEqual(initialValue);
            let newValue = 'Secnod Value';
            list.insert(newValue);
            //head value should equal initialValue
            expect(list.include('Secnod Value')).toBe(true);
        }),
        it('test include() with empty linked list', () => {
            let list = new LL();
            expect(list.include('test')).toBe(false);
        }),
        it('test include() with not included value', () => {
            let list = new LL();
            let initialValue = 'First Value';
            list.insert(initialValue);
            //head value should equal initialValue
            expect(list.head.value).toEqual(initialValue);
            let newValue = 'Secnod Value';
            list.insert(newValue);
            //head value should equal initialValue
            expect(list.include('third Value')).toBe(false);
        }),
        it('test toString() with empty linked list', () => {
            let list = new LL();
            expect(list.toString()).toBe('Empty linked list');
        }),
        it('test toString() with non empty linked list', () => {
            let list = new LL();
            let initialValue = 'First Value';
            list.insert(initialValue);
            expect(list.head.value).toEqual(initialValue);
            let newValue = 'Secnod Value';
            list.insert(newValue);
            expect(list.toString()).toBe('{First Value} -> {Secnod Value} -> NULL');
        });
});