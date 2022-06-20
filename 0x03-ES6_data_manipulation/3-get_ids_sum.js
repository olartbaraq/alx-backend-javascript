/* eslint-disable max-len */

export default function getStudentIdsSum(array) {
  const initialValue = 0;
  const result = array.reduce((prevValue, currValue) => prevValue + currValue.id, initialValue);
  return result;
}
