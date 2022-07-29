const data = require('../data/zoo_data');

const { species } = data;
function mapAnimals(animals) {
  return animals.reduce((map, currentAnimal) => {
    const mapCopy = map;
    const { location: currLocation, name: animalName } = currentAnimal;
    if (!mapCopy[currLocation]) {
      mapCopy[currLocation] = [];
      mapCopy[currLocation].push(animalName);
    } else {
      mapCopy[currLocation].push(animalName);
    }
    return mapCopy;
  }, {});
}

function getAnimalMap(options) {
  if (!options) return mapAnimals(species);
}

console.log(getAnimalMap());

module.exports = getAnimalMap;
