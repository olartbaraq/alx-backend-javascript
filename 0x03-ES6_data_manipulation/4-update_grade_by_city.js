/* eslint-disable no-param-reassign */

export default function updateStudentGradeByCity(array, city, newGrades) {
  let filterArray = [];
  let mapArray = [];
  filterArray = array.filter((items) => items.location === city);
  mapArray = filterArray.map((items) => {
    const gradeObj = newGrades.find((obj) => obj.studentId === items.id);
    if (gradeObj) {
      items.grade = gradeObj.grade;
    } else {
      items.grade = 'N/A';
    }
    return items;
  });
  return (mapArray);
}
