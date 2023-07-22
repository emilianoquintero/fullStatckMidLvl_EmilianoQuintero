const findMissingNums = require('./add-up-to-tarjet');

test('1', () => {
    expect(findAddTarjet([2, 7, 11, 15],9)).toBe([0,1]);
});

test('2', () => {
    expect(findAddTarjet([3,2,4],6)).toBe([1,2]);
});

test('2', () => {
    expect(findAddTarjet([3,3],6)).toBe([0,1]);
});