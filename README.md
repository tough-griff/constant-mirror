# constant-mirror [![npm](https://img.shields.io/npm/v/constant-mirror.svg)](https://www.npmjs.com/package/constant-mirror) [![npm](https://img.shields.io/npm/dm/constant-mirror.svg)](https://www.npmjs.com/package/constant-mirror)
> A simple tool for creating objects with keys mirrored as values. Inspired by React's keyMirror.

## Install
```sh
npm install --save constant-mirror
```

## Usage
```js
// ES6
import constantMirror from 'constant-mirror';
// or ES5
var constantMirror = require('constant-mirror');

constantMirror('HELLO', 'WORLD');
// => { HELLO: 'HELLO', WORLD: 'WORLD' }
```

## License
MIT ©️ [Griffin Yourick](https://github.com/tough-griff)
