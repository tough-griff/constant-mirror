export default function constantMirror(...constants) {
  return constants.reduce((obj, constant) => {
    return { ...obj, [constant]: constant };
  }, {});
}
