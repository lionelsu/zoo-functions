const data = require('../data/zoo_data');

const generateSchedule = () => Object.keys(data.hours)
  .reduce((acc, day) => {
    const officeHour = day === 'Monday'
      ? 'CLOSED'
      : `Open from ${data.hours[day].open}am until ${data.hours[day].close}pm`;
    const exhibition = day === 'Monday'
      ? 'The zoo will be closed!'
      : data.species
        .filter((species) => species.availability.includes(day))
        .map((species) => species.name);
    acc[day] = { officeHour, exhibition };
    return acc;
  }, {});

const getAnimals = (animalName) => {
  const animals = data.species
    .find((animal) => animal.name === animalName);
  return animals ? animals.availability : null;
};

const getSchedule = (scheduleTarget) => {
  const daysOfWeek = Object.keys(data.hours);

  if (!scheduleTarget || (!getAnimals(scheduleTarget) && !daysOfWeek.includes(scheduleTarget))) {
    return generateSchedule();
  }

  if (daysOfWeek.includes(scheduleTarget)) {
    const daySchedule = generateSchedule()[scheduleTarget];
    return { [scheduleTarget]: daySchedule };
  }

  return getAnimals(scheduleTarget);
};

module.exports = getSchedule;
