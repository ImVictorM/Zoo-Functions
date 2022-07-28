const data = require('../data/zoo_data');

const { species } = data;

function generateAnimalsReport() {
  return species.reduce((animalReport, currAnimal) => {
    const reportCopy = animalReport;
    reportCopy[currAnimal.name] = currAnimal.residents.length;
    return reportCopy;
  }, {});
}

function countAnimals(animal) {
  // seu código aqui
  if (!animal) {
    return generateAnimalsReport();
  }
  const { specie, sex } = animal;
  const chosenAnimal = species.find((animalObj) => animalObj.name === specie);
  if (!sex) {
    return chosenAnimal.residents.length;
  }
  return chosenAnimal.residents.reduce((count, currAnimal) => {
    let countCopy = count;
    if (currAnimal.sex === sex) {
      countCopy += 1;
    }
    return countCopy;
  }, 0);
}
console.log(countAnimals());
console.log(countAnimals({ specie: 'penguins' }));
console.log(countAnimals({ specie: 'elephants', sex: 'male' }));

module.exports = countAnimals;
