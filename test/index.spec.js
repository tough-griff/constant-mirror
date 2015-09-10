import expect from 'expect.js';

import constantMirror from '../src';

describe('constantMirror', () => {
  it('exports a function', () => {
    expect(constantMirror).to.be.a('function');
  });

  it('creates a mirrored object from a list of strings', () => {
    expect(constantMirror('HELLO', 'WORLD')).to.eql({
      HELLO: 'HELLO',
      WORLD: 'WORLD'
    });
  });

  it('does not include false-y values in the object', () => {
    expect(constantMirror('HELLO', 'WORLD', null, undefined)).to.eql({
      HELLO: 'HELLO',
      WORLD: 'WORLD'
    });
  });
});
