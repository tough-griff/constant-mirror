export symbolMirror from './symbolMirror.js';

export default function constantMirror(...constants) {
  return constants.reduce((obj, constant) => (
    (constant) ? { ...obj, [constant]: constant } : obj
  ), {});
}
