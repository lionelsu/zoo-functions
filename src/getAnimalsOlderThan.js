const data = require('../data/zoo_data');

const getAnimalsOlderThan = (animal, age) => {
  const { species } = data;
  const speciesName = species
    .find((specie) => specie.name === animal).residents;

  const olderAnimals = speciesName
    .every((resident) => resident.age >= age);
  return olderAnimals;
};

module.exports = getAnimalsOlderThan;
