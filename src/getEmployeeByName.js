const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  // seu código aqui!
  if (!employeeName) return {};
  const { employees } = data;
  return employees.find((employee) => {
    const { firstName, lastName } = employee;
    return firstName === employeeName || lastName === employeeName;
  });
}

console.log(getEmployeeByName());

module.exports = getEmployeeByName;
