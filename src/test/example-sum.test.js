const sum = require('../js/example-sum');

test('should return 3 when adding 1 and 2', () => {
    expect(sum(1,2)).toBe(3);
});