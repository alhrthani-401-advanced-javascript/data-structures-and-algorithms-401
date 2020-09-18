const binarySearch = require('../array-binary-search');
describe('test binary search array', () => {
  it('valid case should return 3  if 4, 8, 15, 23, 42, and 23 was the input', () => {
    expect(binarySearch([4, 8, 15, 23, 42], 23)).toEqual(3);
  }),
  it('Unvalid case should return -1  if 4, 8, 15, 23, 42, and 16 was the input', () => {
    expect(binarySearch([4, 8, 15, 23, 42], 16)).toEqual(-1);
  }),
  it('valid case should return empty array provided if empty array provided', () => {
    expect(binarySearch([], 16)).toBe('Please provide non empty array');
  })
})
