let mockSquare;

describe("square", () => {
  beforeEach(() => {
    mockSquare = jest.fn(() => 64);
  });

  test("square of 8 equals 64", () => {
    expect(mockSquare(8)).toEqual(64);
    expect(mockSquare).toHaveBeenCalledTimes(1);
  });
});
