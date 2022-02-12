import moviesCounter from "./__mocks__/itemsCounter.js";

describe("Testing items counter function", () => {
  test("Count movies", () => {
    const items = ["item1", "item2", "item3"];

    const itesmLength = items.length;
    const res = moviesCounter(items);

    expect(res).toBe(itesmLength);
  });
});
