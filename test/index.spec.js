import expect from 'expect.js';

import constantMirror from '../src';

describe('constantMirror', () => {
  it('exports a function', () => {
    expect(constantMirror).to.be.a('function');
  });

  it('creates a mirrored hash from a list of strings', () => {
    expect(constantMirror('HELLO', 'WORLD')).to.eql({
      HELLO: 'HELLO',
      WORLD: 'WORLD'
    });
  });
});
