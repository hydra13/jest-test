const sub = require('../src/sub');

test('(5 - 3) - result should be 2', () => {
    expect( sub(5, 3) ).toBe(2);
})