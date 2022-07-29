const data = require('../data/zoo_data');

const { species, hours } = data;
const weekDays = Object.keys(hours);
const animalNames = species.map((animal) => animal.name);

function isMonday(day) {
  if (day === 'Monday') {
    return {
      Monday: {
        exhibition: 'The zoo will be closed!',
        officeHour: 'CLOSED',
      },
    };
  }
  return false;
}

function createWeekInfo(weekInfo, currentDay) {
  const opensAt = hours[currentDay].open;
  const closesAt = hours[currentDay].close;
  const weekInfoCopy = weekInfo;
  weekInfoCopy[currentDay] = {
    officeHour: `Open from ${opensAt}am until ${closesAt}pm`,
    exhibition: [],
  };
  species.forEach((animal) => {
    if (animal.availability.includes(currentDay)) {
      weekInfoCopy[currentDay].exhibition.push(animal.name);
    }
  });
  if (currentDay === 'Monday') {
    weekInfoCopy[currentDay].exhibition = 'The zoo will be closed!';
    weekInfoCopy[currentDay].officeHour = 'CLOSED';
  }
  return weekInfoCopy;
}

function createDay(day) {
  const opensAt = hours[day].open;
  const closesAt = hours[day].close;
  const dayObj = {
    [day]: {
      officeHour: `Open from ${opensAt}am until ${closesAt}pm`,
      exhibition: [],
    },
  };
  species.forEach((animal) => {
    if (animal.availability.includes(day)) {
      dayObj[day].exhibition.push(animal.name);
    }
  });
  return dayObj;
}

function getSchedule(scheduleTarget) {
  // seu código aqui
  if (scheduleTarget === 'Monday') {
    return isMonday(scheduleTarget);
  }
  if (animalNames.includes(scheduleTarget)) {
    return species.find((animal) => animal.name === scheduleTarget).availability;
  }
  if (weekDays.includes(scheduleTarget)) {
    return createDay(scheduleTarget);
  }
  return weekDays.reduce(createWeekInfo, {});
}

// console.log(getSchedule('penguins'));
// console.log(getSchedule());
// console.log(getSchedule('batata'));
// console.log(getSchedule('Monday'));
// console.log(getSchedule('Friday'));

module.exports = getSchedule;
