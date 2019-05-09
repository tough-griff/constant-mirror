export { default as symbolMirror } from './symbolMirror';

/**
 * @param {...string} constants
 * @returns {Object<string,string>} an object with mirrored string keys and values.
 */
export default function constantMirror(...constants) {
  return constants.reduce(
    (obj, constant) => (constant ? { ...obj, [constant]: constant } : obj),
    {},
  );
}
