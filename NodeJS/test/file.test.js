const addNumbers = require("./file");

test("1+1 = 2", () => {
  expect(addNumbers(1, 2)).toBe(3);
});
