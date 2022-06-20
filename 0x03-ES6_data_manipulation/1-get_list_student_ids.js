export default function getListStudentIds(array) {
  if (Array.isArray(array) === false) {
    return [];
  }
  const reArray = Object.keys(array).map((keys) => array[keys].id);
  return reArray;
}
