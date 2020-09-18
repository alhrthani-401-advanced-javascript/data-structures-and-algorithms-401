const shifArray = require('../array-shift');
describe('test shif array', () => {
  it('valid case should return 4,8,15,16,23,42  if 4, 8, 15, 23, 42, and 16 was the input', () => {
    expect(shifArray([4, 8, 15, 23, 42], 16).toString()).toBe('4,8,15,16,23,42');
  })
})
