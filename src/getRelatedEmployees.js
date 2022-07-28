const data = require('../data/zoo_data');

const { employees } = data;

function getManagers() {
  return employees.reduce((managers, currentPerson) => {
    currentPerson.managers.forEach((element) => {
      if (!managers.includes(element)) {
        managers.push(element);
      }
    });
    return managers;
  }, []);
}

const managers = getManagers();
// console.log(managers);

function isManager(id) {
  // seu código aqui
  const chosenEmployee = employees.find((employee) => employee.id === id);
  return managers.includes(chosenEmployee.id);
}

function getRelatedEmployees(managerId) {
  // seu código aqui
  if (!isManager(managerId)) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  return employees.reduce((responsibleFor, employee) => {
    const { managers: employeeManagers, firstName, lastName } = employee;
    if (employeeManagers.includes(managerId)) {
      responsibleFor.push(`${firstName} ${lastName}`);
    }
    return responsibleFor;
  }, []);
}

module.exports = { isManager, getRelatedEmployees };
