const findMissingNums = require('./find-the-nums');

test('1', () => {
    expect(findMissingNums([4, 3, 2, 7, 8, 2, 3, 1])).toBe([5,6]);
});

test('2', () => {
    expect(findMissingNums([1,1])).toBe([2]);
});

