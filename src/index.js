/**
 * @param {...string} constants
 * @returns {Object<string,string>} an object with mirrored string keys and values.
 */
module.exports = function constantMirror(...constants) {
  return constants.reduce(
    (obj, constant) => (constant ? { ...obj, [constant]: constant } : obj),
    {},
  );
};
