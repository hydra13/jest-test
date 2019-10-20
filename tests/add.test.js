const add = require('../src/add');

test('(3 + 4) - result should be 7', () => {
    expect( add(3, 4) ).toBe(7);
})