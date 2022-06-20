export default function updateUniqueItems(map) {
  if (map instanceof Map === false) {
    throw (Error('Cannot process'));
  } else {
    for (const [key, value] of map.entries()) {
      if (value === 1) {
        map.set(key, 100);
      }
    }
  }
  return map;
}
