const divide = require("./divide")

describe("divide", () => {
    test('return value to be a number', () => {
        expect(typeof divide(1,2)).toBe('number');
      });
    test('divide 4 / 2 to equal 2', () => {
        expect(divide(4, 2)).toBe(2);
      });
      test('divides 3 / 2 to equal 1.5', () => {
        expect(divide(3, 2)).toBe(1.5);
      });
})