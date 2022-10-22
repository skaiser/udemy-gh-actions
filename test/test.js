const assert = require('assert');
describe('Simple tests', () => {
  it('sums to 2', () => {
    assert.equal(1 + 1, 2);
  });
  it('product is 9', () => {
    assert.equal(3 * 3, 9);
  });
  it('returns 1', () => {
    assert.equal(6 / 6, 1);
  });
});