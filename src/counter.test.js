import itemsCounter from './counter';

test('Test counter', () => {
  expect(itemsCounter([1])).toBe(1);
  expect(itemsCounter([1, 2])).toBe(2);
  expect(itemsCounter([])).toBe(0);
  expect(itemsCounter([1, 2, 3, 4, 5])).toBe(5);
});