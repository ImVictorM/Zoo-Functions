const data = require('../data/zoo_data');

const { employees, species } = data;

function getEmployee(personInfo) {
  const { name, id } = personInfo;
  if (!id) {
    return employees.find((person) => person.firstName === name || person.lastName === name);
  }
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

function getSpeciesLocation(speciesList) {
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
  const speciesLocation = getSpeciesLocation(responsibleSpecies);
  return {
    id,
    fullName: `${firstName} ${lastName}`,
    species: responsibleSpecies,
    locations: speciesLocation,
  };
}

function completeEmployeesCoverage(people) {
  return people.reduce((coverage, person) => {
    const coverageCopy = coverage;
    const personCoverage = createEmployeeCoverage(person);
    coverageCopy.push(personCoverage);
    return coverageCopy;
  }, []);
}

function getEmployeesCoverage(personInfo) {
  if (!personInfo) {
    return completeEmployeesCoverage(employees);
  }
  const employee = getEmployee(personInfo);
  if (!employee) {
    throw new Error('Informações inválidas');
  }
  return createEmployeeCoverage(employee);
}
// console.log(getEmployeesCoverage({ name: 'Spry' }));
// console.log(getEmployeesCoverage({ id: 'c1f50212-35a6-4ecd-8223-f83553852' }));
// console.log(getEmployeesCoverage());

module.exports = getEmployeesCoverage;
