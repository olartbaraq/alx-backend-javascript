/* eslint-disable no-unused-expressions */

export default function cleanSet(set, startString) {
  if (startString === '') {
    return '';
  }
  let compoundString = '';
  set.forEach((string) => {
    const compare = string.split(startString);
    if (compare.length > 1 && compare[0] === '') {
      compoundString ? compoundString += `-${compare[1]}` : compoundString += `${compare[1]}`;
    }
  });
  return compoundString;
}
