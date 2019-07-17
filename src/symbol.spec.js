import mirror from './symbol';

it('exports a function', () => {
  expect(mirror).toBeInstanceOf(Function);
});

it('creates an object from a list of strings with symbols for values', () => {
  expect(mirror('HELLO', 'WORLD')).toStrictEqual({
    HELLO: Symbol.for('HELLO'),
    WORLD: Symbol.for('WORLD'),
  });
});

it('does not include false-y values in the object', () => {
  expect(mirror('HELLO', 'WORLD', null, undefined)).toStrictEqual({
    HELLO: Symbol.for('HELLO'),
    WORLD: Symbol.for('WORLD'),
  });
});
