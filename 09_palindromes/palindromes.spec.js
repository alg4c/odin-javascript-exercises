const palindromes = require("./palindromes");

describe("palindromes", () => {
  test("works with single words", () => {
    expect(palindromes("racecar")).toBe(true);
  });
  test("works with punctuation ", () => {
    expect(palindromes("racecar!")).toBe(true);
  });
  test("works with upper-case letters ", () => {
    expect(palindromes("Racecar!")).toBe(true);
  });
  test("works with multiple words", () => {
    //spaces disregarded
    expect(palindromes("A car, a man, a maraca.")).toBe(true);
  });
  test("works with multiple words", () => {
    //space-sensitive
    expect(palindromes("Animal loots foliated detail of stool lamina.")).toBe(
      true
    );
  });
  test("doesn't just always return true", () => {
    expect(palindromes("ZZZZ car, a man, a maracaz.")).toBe(false);
  });
});
