import constantMirror from '.';

it('exports a function', () => {
  expect(constantMirror).toBeInstanceOf(Function);
});

it('creates a mirrored object from a list of strings', () => {
  expect(constantMirror('HELLO', 'WORLD')).toEqual({
    HELLO: 'HELLO',
    WORLD: 'WORLD',
  });
});

it('does not include false-y values in the object', () => {
  expect(constantMirror('HELLO', 'WORLD', null, undefined)).toEqual({
    HELLO: 'HELLO',
    WORLD: 'WORLD',
  });
});
