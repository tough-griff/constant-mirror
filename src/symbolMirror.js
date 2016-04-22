export default function constantMirror(...constants) {
  return constants.reduce((obj, constant) => (
    (constant) ? { ...obj, [constant]: Symbol.for(constant) } : obj
  ), {});
}
