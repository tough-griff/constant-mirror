import symbolMirror from './symbolMirror';

it('exports a function', () => {
  expect(symbolMirror).toBeInstanceOf(Function);
});

it('creates an object from a list of strings with symbols for values', () => {
  expect(symbolMirror('HELLO', 'WORLD')).toEqual({
    HELLO: Symbol.for('HELLO'),
    WORLD: Symbol.for('WORLD'),
  });
});

it('does not include false-y values in the object', () => {
  expect(symbolMirror('HELLO', 'WORLD', null, undefined)).toEqual({
    HELLO: Symbol.for('HELLO'),
    WORLD: Symbol.for('WORLD'),
  });
});
