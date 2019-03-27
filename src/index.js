export { default as symbolMirror } from './symbolMirror';

export default function constantMirror(...constants) {
  return constants.reduce(
    (obj, constant) => (constant ? { ...obj, [constant]: constant } : obj),
    {},
  );
}
