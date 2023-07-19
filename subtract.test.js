const subtract = require("./subtract")

describe("add", () => {
    test('return value to be a number', () => {
        expect(typeof subtract(1,2)).toBe('number');
      });
    test('subtracts 2 - 1 to equal 1', () => {
        expect(subtract(2, 1)).toBe(1);
      });
      test('subtracts 1 - 2 to equal -1', () => {
        expect(subtract(1, 2)).toBe(-1);
      });
})