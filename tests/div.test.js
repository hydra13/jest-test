const div = require('../src/div');

describe('testing division', () => {
    test('(8, 4) - result should be 2', () => {
        expect( div(8, 4) ).toBe(2);
    })
    
    test('(8, 0) - throw error "Error: Division by zero."', () => {
        expect( div(8, 0) ).toThrow('Error: Division by zero.');
    })
})

