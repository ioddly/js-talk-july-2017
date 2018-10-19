// square.js

const square = (n) => n * n;

// square.test.js

describe("square", () => {
  test("squares a number", () => {
    expect(square(8)).toEqual(64);
  });
});
