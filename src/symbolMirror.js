export default function symbolMirror(...constants) {
  return constants.reduce(
    (obj, constant) => (constant ? { ...obj, [constant]: Symbol.for(constant) } : obj),
    {},
  );
}
