const mul = require('../src/mul');

test('(3 * 2) - result should be 6', () => {
    expect( mul(3, 2) ).toBe(6);
})