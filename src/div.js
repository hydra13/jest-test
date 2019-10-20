function div(x, y) {
    if (y == 0) {
        throw new Error('Error: Division by zero.');
    }
    return x / y;
}

module.exports = div;