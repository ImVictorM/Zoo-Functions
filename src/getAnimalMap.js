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

function mapAnimals(animals) {
  const map = createGenericObj();
  animals.forEach((currentAnimal) => {
    const { location: currLocation, name: animalName } = currentAnimal;
    map[currLocation].push(animalName);
  });
  return map;
}

// function createMapByName() {

// }

function getAnimalMap(options) {
  if (!options || !options.includeNames) {
    return mapAnimals(species);
  }
}

console.log(getAnimalMap());
console.log(getAnimalMap({ sex: 'female' }));

module.exports = getAnimalMap;
