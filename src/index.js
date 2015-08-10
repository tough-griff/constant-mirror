export default function constantMirror(...constants) {
  return constants.reduce((obj, constant) => {
    if (!constant) return obj;

    return { ...obj, [constant]: constant };
  }, {});
}
