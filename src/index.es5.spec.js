const mirror = require('.');

it('exports a function', () => {
  expect(mirror).toBeInstanceOf(Function);
});

it('creates a mirrored object from a list of strings', () => {
  expect(mirror('HELLO', 'WORLD')).toStrictEqual({
    HELLO: 'HELLO',
    WORLD: 'WORLD',
  });
});

it('does not include false-y values in the object', () => {
  expect(mirror('HELLO', 'WORLD', null, undefined)).toStrictEqual({
    HELLO: 'HELLO',
    WORLD: 'WORLD',
  });
});
