const data = require('../data/zoo_data');

const { employees, species } = data;

function getEmployee(id) {
  return employees.find((employeeObj) => employeeObj.id === id);
}

function getOldestFromFirstSpecies(id) {
  const chosenEmployee = getEmployee(id);
  const [firstSpecieId] = chosenEmployee.responsibleFor;
  const chosenSpecie = species.find((animal) => animal.id === firstSpecieId);
  const olderOne = chosenSpecie.residents.reduce((older, currentAnimal) => {
    if (older.age > currentAnimal.age) {
      return older;
    }
    return currentAnimal;
  });
  return Object.values(olderOne);
}

// console.log(getOldestFromFirstSpecies('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1'));

module.exports = getOldestFromFirstSpecies;
