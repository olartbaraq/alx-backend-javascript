export default function createReportObject(employeesList) {
  const result = {
    allEmployees: employeesList,
    getNumberOfDepartments() {
      return (Object.keys(employeesList)).length;
      // This method takes an object as the argument and
      // returns an array of strings representing
      // each property in the object
    },
  };
  return result;
}
