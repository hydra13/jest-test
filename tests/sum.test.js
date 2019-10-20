const sum = require('../src/sum');

test('(3 + 4) - result should be 7', () => {
    expect( sum(3, 4) ).toBe(7);
})