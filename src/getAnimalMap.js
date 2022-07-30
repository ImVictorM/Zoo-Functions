const data = require('../data/zoo_data');

const { species } = data;

function createGenericObj() {
  return {
    NE: [],
    NW: [],
    SE: [],
    SW: [],
  };
}

function mapAnimalsLocation(animals) {
  const map = createGenericObj();
  animals.forEach((currentAnimal) => {
    const { location: currLocation, name: animalName } = currentAnimal;
    map[currLocation].push(animalName);
  });
  return map;
}

function getResidentsName(residents, sex) {
  if (!sex) {
    return residents.map((animal) => animal.name);
  }
  return residents.reduce((acc, animal) => {
    const accCopy = acc;
    if (animal.sex === sex) {
      accCopy.push(animal.name);
    }
    return accCopy;
  }, []);
}

function mapAnimals({ sorted, sex }) {
  const map = createGenericObj();
  species.forEach((animal) => {
    const { location: currLocation, residents, name: animalName } = animal;
    const residentsName = getResidentsName(residents, sex);
    if (sorted) {
      residentsName.sort();
    }
    const animalObj = {
      [animalName]: residentsName,
    };
    map[currLocation].push(animalObj);
  });
  return map;
}

function getAnimalMap(options) {
  if (!options || !options.includeNames) {
    return mapAnimalsLocation(species);
  }
  return mapAnimals(options);
}

// console.log(getAnimalMap());
// console.log(getAnimalMap({ sex: 'female' }));
// console.log(getAnimalMap({ includeNames: true }));
// console.log(getAnimalMap({ includeNames: true, sex: 'female' }));

module.exports = getAnimalMap;
