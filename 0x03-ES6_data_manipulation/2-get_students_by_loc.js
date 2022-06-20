export default function getStudentsByLocation(array, city) {
  let newArray = [];
  newArray = array.filter((items) => items.location === city);
  return newArray;
}
