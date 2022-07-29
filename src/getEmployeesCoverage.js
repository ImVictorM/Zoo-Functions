const data = require('../data/zoo_data');

const { employees, species } = data;

function getEmployeeByName(name) {
  return employees.find((person) => person.firstName === name || person.lastName === name);
}

function getEmployeeById(id) {
  return employees.find((person) => person.id === id);
}

function getResponsibleSpecies(person) {
  const { responsibleFor } = person;
  const animalsReposibleFor = species.reduce((acc, animal) => {
    const accCopy = acc;
    if (responsibleFor.includes(animal.id)) {
      accCopy.push(animal.name);
    }
    return accCopy;
  }, []);
  return animalsReposibleFor;
}

function getEspeciesLocation(speciesList) {
  return species.reduce((location, currentSpecie) => {
    const locationCopy = location;
    if (speciesList.includes(currentSpecie.name)) {
      locationCopy.push(currentSpecie.location);
    }
    return locationCopy;
  }, []);
}

function createEmployeeCoverage(person) {
  const { id, firstName, lastName } = person;
  const responsibleSpecies = getResponsibleSpecies(person);
  const speciesLocation = getEspeciesLocation(responsibleSpecies);
  return {
    id,
    fullname: `${firstName} ${lastName}`,
    species: responsibleSpecies,
    locations: speciesLocation,
  };
}

function getEmployeesCoverage(personInfo) {
  // seu código aqui
  let employee;
  const { name, id } = personInfo;
  if (!id) {
    employee = getEmployeeByName(name);
  } else {
    employee = getEmployeeById(id);
  }
  const employeeCoverage = createEmployeeCoverage(employee);
  return employeeCoverage;
}
// console.log(getEmployeesCoverage({ name: 'Spry' }));
// console.log(getEmployeesCoverage({ id: 'c1f50212-35a6-4ecd-8223-f835538526c2' }));
console.log(getEmployeesCoverage());
module.exports = getEmployeesCoverage;
