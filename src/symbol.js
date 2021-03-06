/**
 * @param {...string} constants
 * @returns {Object<string,Symbol>} an object with string keys and mirrored symbol values.
 */
module.exports = function symbolMirror(...constants) {
  return constants.reduce(
    (obj, constant) => (constant ? { ...obj, [constant]: Symbol.for(constant) } : obj),
    {},
  );
};
