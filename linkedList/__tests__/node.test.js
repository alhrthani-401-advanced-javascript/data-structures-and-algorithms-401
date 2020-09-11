'use strict';

const Node = require('../node.js')

describe('Node Module', () => {
    it('Test constructor()', () => {
        let value = 'Test Value';
        let node = new Node(value);
        expect(node.value).toBe(value);
        expect(node.next).toBeNull();
    })
});