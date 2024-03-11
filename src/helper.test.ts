const helper = require('./index');

test('work with reverse string', () => {
  expect(helper.stringHelpers.reverse('hello world')).toBe('dlrow olleh');
});

test('work with count substring', () => {
  expect(
    helper.stringHelpers.count_substring('hello world! hello', 'hello')
  ).toBe(2);
});

test('work with date format', () => {
  expect(
    helper.dateTimeHelpers.format(
      new Date(2024, 3, 11, 14, 30, 0),
      'America/New_York'
    )
  ).toBe('4/11/2024, 04:30:00');
});

test('work with deep merge [Test Case: 1] [Only Object]', () => {
  expect(
    helper.arrayObjectHelpers.deep_merge(
      { a: { b: 1 }, c: 2 },
      { a: { d: 3 }, e: 4 }
    )
  ).toStrictEqual({ a: { b: 1, d: 3 }, c: 2, e: 4 });
});

test('work with deep merge [Test Case: 2] [Object with Array]', () => {
  expect(
    helper.arrayObjectHelpers.deep_merge(
      { a: { b: [1] }, c: [2] },
      { a: { d: 3, b: [2] }, c: [4] }
    )
  ).toStrictEqual({ a: { b: [1, 2], d: 3 }, c: [2, 4] });
});
