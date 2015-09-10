export default function constantMirror(...constants) {
  return constants.reduce((obj, constant) => {
    return constant ? { ...obj, [constant]: constant } : obj;
  }, {});
}
