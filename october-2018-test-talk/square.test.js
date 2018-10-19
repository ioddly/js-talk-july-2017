const square = (n) => n * n;

describe('square', () => {
  test('squares things properly', () => {
    expect(square(8)).toBe(64);
  });
})
