export default function appendToEachArrayValue(array, appendString) {
  const result = [];
  for (const idx of array) {
    const value = idx;
    const newValue = appendString + value;
    result.push(newValue);
  }

  return result;
}
