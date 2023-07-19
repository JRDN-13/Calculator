const multiply = require("./multiply")

describe("add", () => {
    test('return value to be a number', () => {
        expect(typeof multiply(1,2)).toBe('number');
      });
    test('multiplys 2 * 2 to equal 4', () => {
        expect(multiply(2, 2)).toBe(4);
      });
      test('multiplys 4 * 0 to equal 0', () => {
        expect(multiply(4, 0)).toBe(0);
      });
})