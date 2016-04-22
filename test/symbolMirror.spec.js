import expect from 'expect.js';

import symbolMirror from '../src/symbolMirror';

describe('symbolMirror()', function() {
  it('exports a function', function() {
    expect(symbolMirror).to.be.a('function');
  });

  it('creates an object from a list of strings with symbols for values', function() {
    expect(symbolMirror('HELLO', 'WORLD')).to.eql({
      HELLO: Symbol.for('HELLO'),
      WORLD: Symbol.for('WORLD'),
    });
  });

  it('does not include false-y values in the object', function() {
    expect(symbolMirror('HELLO', 'WORLD', null, undefined)).to.eql({
      HELLO: Symbol.for('HELLO'),
      WORLD: Symbol.for('WORLD'),
    });
  });
});
