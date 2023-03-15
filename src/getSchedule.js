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

// Função auxiliar para criar o principal objeto e algumas condicionais, ela não depende da função getSchedule para funcionar.

const getAnimals = (animalName) => {
  const animals = data.species
    .find((animal) => animal.name === animalName);
  return animals ? animals.availability : null;
};

// Função auxliar para receber o nome do animal como parâmetro e comparar com o animal existente no objeto, ao final retorna nulo caso o animal não esteja disponível ou uma lista com os animais disponíveis.

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

// Função principal do programa, seu retorno depende das comparações das condicionais com o parâmetro passado. Sem parâmetros ou com parâmetros incompletos, retorna a função generateSchedule.

module.exports = getSchedule;
