const data = require('../data/zoo_data');

// const entrantsList = [
//   { name: 'Lara Carvalho', age: 5 },
//   { name: 'Frederico Moreira', age: 5 },
//   { name: 'Pedro Henrique Carvalho', age: 5 },
//   { name: 'Maria Costa', age: 18 },
//   { name: 'Núbia Souza', age: 18 },
//   { name: 'Carlos Nogueira', age: 50 },
// ];

function getKey(age) {
  if (age < 18) {
    return 'child';
  }
  if (age < 50) {
    return 'adult';
  }
  return 'senior';
}

function countEntrants(entrants) {
  // seu código aqui
  return entrants.reduce((entrantsInfo, currentPerson) => {
    const entrantsCopy = entrantsInfo;
    const { age } = currentPerson;
    const key = getKey(age);
    if (!entrantsCopy[key]) {
      entrantsCopy[key] = 1;
    } else {
      entrantsCopy[key] += 1;
    }
    return entrantsCopy;
  }, {});
}

// console.log(countEntrants(entrantsList));
// PARA CHECAR SE O OBJETO É VAZIO: ref https://stackoverflow.com/questions/679915/how-do-i-test-for-an-empty-javascript-object

function objIsEmpty(obj) {
  return Object.keys(obj).length === 0;
}

function calculateEntry(entrants) {
  // seu código aqui
  if (!entrants || objIsEmpty(entrants)) {
    return 0;
  }
  const { prices } = data;
  const finalResult = entrants.reduce((total, currentPerson) => {
    let totalCopy = total;
    const { age } = currentPerson;
    const key = getKey(age);
    totalCopy += prices[key];
    return totalCopy;
  }, 0);
  return Number(finalResult.toFixed(2));
}

// console.log(calculateEntry());

module.exports = { calculateEntry, countEntrants };
