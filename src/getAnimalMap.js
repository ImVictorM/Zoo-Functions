const data = require('../data/zoo_data');

const { species } = data;

const genericObj = {
  NE: [],
  NW: [],
  SE: [],
  SW: [],
};

function mapAnimals(animals, obj) {
  const map = obj;
  animals.forEach((currentAnimal) => {
    const { location: currLocation, name: animalName } = currentAnimal;
    map[currLocation].push(animalName);
  });
  return map;
}

function getAnimalMap(options) {
  if (!options) return mapAnimals(species, genericObj);
  const { includeNames, sex, sorted } = options;
}

console.log(getAnimalMap());

module.exports = getAnimalMap;
