const arrayClone = require("./array");

test("array should be cloned", () => {
  const array = [1, 2, 3, 4];
  expect(arrayClone(array)).toEqual(array);
  expect(arrayClone(array)).not.toBe(array);
});
